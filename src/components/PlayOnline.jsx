import React from 'react';
import CustomNav from './CustomNav';
import Footer from './Footer';

import { startBoard } from '../constants';
import getHTMLChessPiece from '../utils/board';

class PlayOnline extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      madeConnection: false,
      foundOpponent: false,
      gameID: null,
      pairingType: null,
      boardArray: startBoard,
      rankSelected: null,
      fileSelected: null,
    };
    this.initializeWebSocket = this.initializeWebSocket.bind(this);
    this.send = this.send.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(e) {
    this.setState({
      [e.target.id]: e.target.value,
    });
  }

  initializeWebSocket(pairingType) {
    // console.log(e.target.id);
    // console.log(id);
    this.setState({
      pairingType,
    });
    this.ws = new WebSocket(
      `ws://localhost:8999/opensearch/${new Date().toLocaleString()}`,
    );

    this.ws.onopen = () => {
      this.setState({
        madeConnection: true,
      });
    };

    this.ws.onmessage = (evt) => {
      const obj = JSON.parse(evt.data);
      this.setState((prevState) => ({
        foundOpponent: (
          obj.foundOpponent
            ? obj.foundOpponent
            : prevState.foundOpponent
        ),
        gameID: (
          obj.gameID
            ? obj.gameID
            : prevState.gameID
        ),
      }));
    };

    this.ws.onclose = () => {
      this.setState({
        madeConnection: false,
      });
    };
  }

  send() {
    this.ws.send({

    });
  }

  render() {
    const {
      foundOpponent, madeConnection, pairingType, boardArray, rankSelected, fileSelected,
    } = this.state;
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
              this.squareClick(8 - i, j + 1, `${boardArray[i][j] !== '.' ? 'Piece' : 'Square'}`);
            }}
            onKeyDown={() => {
              this.squareClick(8 - i, j + 1, `${boardArray[i][j] !== '.' ? 'Piece' : 'Square'}`);
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
    return (
      <div className="bg-primary text-white" style={{ minHeight: '100vh' }}>
        <CustomNav />
        {
          foundOpponent && madeConnection
            ? (
              <>
                {jsxTags}
              </>
            )
            : (
              <div className="mx-3">
                <div className="w-75 m-auto text-center h1">
                  Choose Your Time Limit
                </div>
                <div className="row w-50 mx-auto mt-4">
                  <div
                    className="col text-center game-select"
                    onClick={() => { this.initializeWebSocket(1); }}
                    onKeyDown={() => { this.initializeWebSocket(1); }}
                  >
                    <div className="mt-4">10+0</div>
                    <div>Rapid</div>
                    {
                madeConnection && !foundOpponent && pairingType === 1
                  ? (
                    <div className="spinner-border text-secondary" role="status" />
                  )
                  : (
                    <div className="spinner-border text-tertiary" role="status" />
                  )
              }
                  </div>
                  <div
                    className="col text-center game-select"
                    onClick={() => { this.initializeWebSocket(2); }}
                    onKeyDown={() => { this.initializeWebSocket(2); }}
                  >
                    <div className="mt-4">30+0</div>
                    <div>Classic</div>
                    {
                madeConnection && !foundOpponent && pairingType === 2
                  ? (
                    <div className="spinner-border text-secondary" role="status" />
                  )
                  : (
                    <div className="spinner-border text-tertiary" role="status" />
                  )
              }
                  </div>
                </div>
              </div>
            )
        }

        <div className="px-3">
          <Footer />
        </div>
      </div>
    );
  }
}

export default PlayOnline;
