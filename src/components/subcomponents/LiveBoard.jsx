import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { clickedPieceJSX, clickedSquareJSX } from '../../utils/engine';
import getHTMLChessPiece from '../../utils/board';
import { SET_TIMER1_STATUS } from '../../redux/ActionTypes';

class LiveBoard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstClick: false,
      rankSelected: null,
      fileSelected: null,
      firstMove: false,
    };
    this.squareClick = this.squareClick.bind(this);
  }

  squareClick(rank, file, type, piece) {
    const { yourTurn } = this.props;
    /* only perform actions if it is your turn */
    if (yourTurn) {
      const {
        webSocket,
        playerSide,
      } = this.props;
      const {
        firstClick,
      } = this.state;

      const whitePieces = ['P', 'R', 'N', 'B', 'Q', 'K'];
      const blackPieces = ['p', 'r', 'n', 'b', 'q', 'k'];
      // if the player clicks on their piece for the first time
      if (
        firstClick === false
        && (
          (whitePieces.includes(piece) && playerSide === 0)
          || (blackPieces.includes(piece) && playerSide === 1)
        )
      ) {
        /* start the timer for the white pieces after the player clicks a piece */
        const { firstMove } = this.state;
        if (!firstMove) {
          this.setState({ firstMove: true });
          const { dispatch } = this.props;
          dispatch({ type: SET_TIMER1_STATUS, payload: { isTimer1Running: true } });
        }
        /* send move over websocket */
        webSocket.send(JSON.stringify({
          action: 'message',
          method: 'sendmove',
          rank,
          file,
          type,
        }));
        /* send move to local engine */
        clickedPieceJSX(file, rank);
        /* set first click state */
        /* set gray selected square */
        if (playerSide === 0) {
          this.setState({
            firstClick: true,
            rankSelected: 8 - rank,
            fileSelected: file - 1,
          });
        } else if (playerSide === 1) {
          this.setState({
            firstClick: true,
            rankSelected: rank - 1,
            fileSelected: 8 - file,
          });
        }
      } else if (firstClick === true) {
        /* send move over websocket */
        webSocket.send(JSON.stringify({
          action: 'message',
          method: 'sendmove',
          rank,
          file,
          type,
        }));
        /* send move to local engine */
        if (type === 'Piece') {
          clickedPieceJSX(file, rank);
        } else if (type === 'Square') {
          clickedSquareJSX(file, rank);
        }
        /* set first click state */
        /* deselect gray selected square */
        this.setState({
          firstClick: false,
          rankSelected: null,
          fileSelected: null,
        });
        /* update board */
        const { updateBoard } = this.props;
        updateBoard();
      }
    }
  }

  render() {
    const { rankSelected, fileSelected } = this.state;
    const { boardArray, playerSide } = this.props;
    const jsxTags = [];
    const rowTags = [];
    for (let i = 0; i < 8; i += 1) {
      const dataTags = [];
      for (let j = 0; j < 8; j += 1) {
        dataTags.push(
          // eslint-disable-next-line
          <td
            key={`${i}${j}`}
            id={`square-${i}${j}`}
            className={`${(((i + j) % 2) === 0) ? 'bg-white' : 'darkSquare'} ${(i === rankSelected && j === fileSelected) ? 'square-selected' : ''}`}
            onClick={() => {
              this.squareClick(playerSide === 0 ? 8 - i : 8 - (8 - i) + 1, playerSide === 0 ? j + 1 : 8 - (j + 1) + 1, `${boardArray[i][j] !== '.' ? 'Piece' : 'Square'}`, boardArray[i][j]);
            }}
            onKeyDown={() => {
              this.squareClick(playerSide === 0 ? 8 - i : 8 - (8 - i) + 1, playerSide === 0 ? j + 1 : 8 - (j + 1) + 1, `${boardArray[i][j] !== '.' ? 'Piece' : 'Square'}`, boardArray[i][j]);
            }}
            // eslint-disable-next-line
            role="button"
            tabIndex="0"
          >
            {getHTMLChessPiece(boardArray[i][j])}
          </td>,
        );
      }
      rowTags.push(
        <tr key={i}>{dataTags}</tr>,
      );
    }
    jsxTags.push(<table id="chess-board" className="m-auto" key={0}><tbody>{rowTags}</tbody></table>);
    return (<>{jsxTags}</>);
  }
}

LiveBoard.propTypes = {
  // eslint-disable-next-line
  boardArray: PropTypes.array,
  webSocket: PropTypes.shape({
    send: PropTypes.func,
  }),
  yourTurn: PropTypes.bool,
  playerSide: PropTypes.number,
  updateBoard: PropTypes.func,
  dispatch: PropTypes.func,
};

LiveBoard.defaultProps = {
  boardArray: [[]],
  webSocket: {
    send: () => {},
  },
  yourTurn: false,
  playerSide: 0,
  updateBoard: () => {},
  dispatch: () => {},
};

const mapStateToProps = (/* state */ /* , */ /* ownProps */) => ({});
const mapDispatchToProps = (dispatch) => ({ dispatch });

export default connect(mapStateToProps, mapDispatchToProps)(LiveBoard);
