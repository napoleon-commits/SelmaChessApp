import React from 'react';
import CustomNav from './CustomNav';
import Footer from './Footer';

import { startBoard } from '../constants';
import getHTMLChessPiece from '../utils/board';

import {
  clickedPieceJSX,
  clickedSquareJSX,
  getJSXBoard,
} from '../utils/engine';

import {reverseBoard} from '../utils/utils';

class PlayOnline extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      madeConnection: false,
      foundOpponent: false,
      gameID: null,
      pairingType: null,
      boardArray: startBoard,
      reversedBoardArray: reverseBoard(startBoard),
      rankSelected: null,
      fileSelected: null,
      playerSide: null,
      firstClick: false,
    };
    this.initializeWebSocket = this.initializeWebSocket.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.squareClick = this.squareClick.bind(this);
  }

  handleInputChange(e) {
    this.setState({
      [e.target.id]: e.target.value,
    });
  }

  initializeWebSocket(pairingType) {
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

      if(obj.foundOpponent){
        this.setState({
          foundOpponent: obj.foundOpponent,
        })
      }

      if(obj.gameID){
        this.setState({
          gameID: obj.gameID,
        })
      }

      if(obj.side === 0 || obj.side === 1){
        this.setState({
          playerSide: obj.side,
        })
      }

      if(obj.move){
        if (obj.move.type === 'Piece') {
          clickedPieceJSX(obj.move.file, obj.move.rank);
        } else if (obj.move.type === 'Square') {
          clickedSquareJSX(obj.move.file, obj.move.rank);
        }
        const tempBoard = getJSXBoard();
        this.setState({
          boardArray: tempBoard,
          reversedBoardArray: reverseBoard(tempBoard),
        })
      }
    };

    this.ws.onclose = () => {
      this.setState({
        madeConnection: false,
      });
    };
  }

  squareClick(rank, file, type, piece) {
    const whitePieces = ['P', 'R', 'N', 'B', 'Q', 'K'];
    const blackPieces = ['p', 'r', 'n', 'b', 'q', 'k'];
    const { playerSide, firstClick, gameID } = this.state;
    if (playerSide === 0) {
      if (firstClick === true) {
        if (type === 'Piece') {
          clickedPieceJSX(file, rank);
        } else if (type === 'Square') {
          clickedSquareJSX(file, rank);
        }
        this.ws2 = new WebSocket(`ws://localhost:8999/sendmove/${gameID}/${playerSide}/${rank}/${file}/${type}`);
        const tempBoard = getJSXBoard();
        this.setState((currentState) => ({
          firstClick: false,
          boardArray: tempBoard,
          reversedBoardArray: reverseBoard(tempBoard),
          rankSelected: (currentState.rankSelected !== null || type === 'Square') ? null : 8 - rank,
          fileSelected: (currentState.fileSelected !== null || type === 'Square') ? null : file - 1,
        }));
      } else if (whitePieces.includes(piece)) {
        if (type === 'Piece') {
          clickedPieceJSX(file, rank);
        } else if (type === 'Square') {
          clickedSquareJSX(file, rank);
        }
        this.ws2 = new WebSocket(`ws://localhost:8999/sendmove/${gameID}/${playerSide}/${rank}/${file}/${type}`);
        this.setState((currentState) => ({
          firstClick: true,
          rankSelected: (currentState.rankSelected !== null || type === 'Square') ? null : 8 - rank,
          fileSelected: (currentState.fileSelected !== null || type === 'Square') ? null : file - 1,
        }));
      }
    } else if (firstClick === true) {
      if (type === 'Piece') {
        clickedPieceJSX(file, rank);
      } else if (type === 'Square') {
        clickedSquareJSX(file, rank);
      }
      this.ws2 = new WebSocket(`ws://localhost:8999/sendmove/${gameID}/${playerSide}/${rank}/${file}/${type}`);
      let tempBoard = getJSXBoard();
      this.setState((currentState) => ({
        firstClick: false,
        boardArray: tempBoard,
        reversedBoardArray: reverseBoard(tempBoard),
        rankSelected: (currentState.rankSelected !== null || type === 'Square') ? null : 8 - rank,
        fileSelected: (currentState.fileSelected !== null || type === 'Square') ? null : file - 1,
      }));
    } else if (blackPieces.includes(piece)) {
      if (type === 'Piece') {
        clickedPieceJSX(file, rank);
      } else if (type === 'Square') {
        clickedSquareJSX(file, rank);
      }
      this.ws2 = new WebSocket(`ws://localhost:8999/sendmove/${gameID}/${playerSide}/${rank}/${file}/${type}`);
      this.setState((currentState) => ({
        firstClick: true,
        rankSelected: (currentState.rankSelected !== null || type === 'Square') ? null : 8 - rank,
        fileSelected: (currentState.fileSelected !== null || type === 'Square') ? null : file - 1,
      }));
    }
  }

  render() {
    const {
      foundOpponent,
      madeConnection,
      pairingType,
      boardArray,
      rankSelected,
      fileSelected,
      playerSide,
      reversedBoardArray
    } = this.state;
    let myBoard = (playerSide === 1) ? reversedBoardArray: boardArray;
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
              this.squareClick(playerSide === 0 ? 8 - i : 8-(8-i)+1, playerSide === 0 ? j + 1 : 8 - (j+1) + 1, `${myBoard[i][j] !== '.' ? 'Piece' : 'Square'}`, myBoard[i][j]);
            }}
            onKeyDown={() => {
              this.squareClick(playerSide === 0 ? 8 - i : 8-(8-i)+1, playerSide === 0 ? j + 1 : 8 - (j+1) + 1, `${myBoard[i][j] !== '.' ? 'Piece' : 'Square'}`, myBoard[i][j]);
            }}
            // eslint-disable-next-line
            role="button"
            tabIndex="0"
          >
            {getHTMLChessPiece(myBoard[i][j])}
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
                    <div>&nbsp;Rapid&nbsp;</div>
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
