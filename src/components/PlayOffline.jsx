import React from 'react';

import '../styles/common.css';

import $ from 'jquery';
import CustomNav from './subcomponents/CustomNav';
import Footer from './subcomponents/Footer';

import { startBoard } from '../constants';
import {
  clickedPieceJSX,
  clickedSquareJSX,
  getJSXBoard,
  takeBack,
  newGame,
} from '../utils/engine';
import getHTMLChessPiece from '../utils/board';

class PlayOffline extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      boardArray: startBoard,
      rankSelected: null,
      fileSelected: null,
    };
    this.squareClick = this.squareClick.bind(this);
    this.takeBack = this.takeBack.bind(this);
    this.newGame = this.newGame.bind(this);
  }

  componentDidMount() {
    const myInterval = setInterval(() => {
      $('#chess-menu').width($('#chess-board').width());
    }, 1);
    setTimeout(() => {
      clearInterval(myInterval);
    }, 3000);
    window.addEventListener('resize', () => {
      $('#chess-menu').width($('#chess-board').width());
    });
  }

  squareClick(rank, file, type) {
    if (type === 'Piece') {
      clickedPieceJSX(file, rank);
    } else if (type === 'Square') {
      clickedSquareJSX(file, rank);
    }
    this.setState((currentState) => ({
      boardArray: getJSXBoard(),
      rankSelected: (currentState.rankSelected !== null || type === 'Square') ? null : 8 - rank,
      fileSelected: (currentState.fileSelected !== null || type === 'Square') ? null : file - 1,
    }));
  }

  takeBack() {
    takeBack();
    this.setState({
      boardArray: getJSXBoard(),
      fileSelected: null,
      rankSelected: null,
    });
  }

  newGame() {
    newGame();
    this.setState({
      boardArray: getJSXBoard(),
      fileSelected: null,
      rankSelected: null,
    });
  }

  render() {
    const { boardArray, rankSelected, fileSelected } = this.state;
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
      <>
        <div className="bg-primary text-white" style={{ minHeight: '100vh' }}>
          <CustomNav />
          <div className="mx-4 mt-2 text-dark">
            {jsxTags}
          </div>
          <div className="mt-2">
            <div id="chess-menu" className="mx-auto">
              <div className="row mx-0">
                <button onClick={this.takeBack} type="button" className="custom-button col">Take Back</button>
                <button onClick={this.newGame} type="button" className="custom-button col">New Game</button>
              </div>
            </div>
          </div>
          <div className="px-4">
            <Footer />
          </div>
        </div>
      </>
    );
  }
}

export default PlayOffline;
