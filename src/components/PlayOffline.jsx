import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/common.css';
import '../styles/engineJSX.css';

import $ from 'jquery';
import CustomNav from './CustomNav';
import Footer from './Footer';

import blackBishop from '../images/bB.png';
import blackKing from '../images/bK.png';
import blackKnight from '../images/bN.png';
import blackPawn from '../images/bP.png';
import blackQueen from '../images/bQ.png';
import blackRook from '../images/bR.png';
import whiteBishop from '../images/wB.png';
import whiteKing from '../images/wK.png';
import whitePawn from '../images/wP.png';
import whiteQueen from '../images/wQ.png';
import whiteKnight from '../images/wN.png';
import whiteRook from '../images/wR.png';

import blankSquare from '../images/blankSquare.png';

import { startBoard } from '../constants';

import {
  clickedPieceJSX,
  clickedSquareJSX,
  getJSXBoard,
  takeBack,
  newGame,
} from '../utils/engine';


const imagesStyleObject = {
  display: 'block', maxWidth: '100%', maxHeight: '100%', margin: 'auto',
};

const getHTMLChessPiece = (letter) => {
  const className = '';
  let imageSrc = null;
  switch (letter) {
    case 'r':
      imageSrc = blackRook; break;
    case 'n':
      imageSrc = blackKnight; break;
    case 'b':
      imageSrc = blackBishop; break;
    case 'q':
      imageSrc = blackQueen; break;
    case 'k':
      imageSrc = blackKing; break;
    case 'p':
      imageSrc = blackPawn; break;
    case 'R':
      imageSrc = whiteRook; break;
    case 'N':
      imageSrc = whiteKnight; break;
    case 'B':
      imageSrc = whiteBishop; break;
    case 'Q':
      imageSrc = whiteQueen; break;
    case 'K':
      imageSrc = whiteKing; break;
    case 'P':
      imageSrc = whitePawn; break;
    case '.':
      imageSrc = blankSquare; break;
    default:
  }

  return (
    <>
      <img
        className={className}
        alt={letter}
        style={imagesStyleObject}
        src={imageSrc}
      />
    </>
  );
};

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

  squareClick(rank, file, type) {
    if (type === 'Piece') {
      clickedPieceJSX(file, rank);
    } else if (type === 'Square') {
      clickedSquareJSX(file, rank);
    }
    this.setState({
      boardArray: getJSXBoard(),
      rankSelected: 8 - rank,
      fileSelected: file - 1,
    });
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

  componentDidMount(){
    const equalSize = () => {
      $("#chess-menu").width($('#chess-board').width());
      if($("#chess-menu").width() === $("#chess-board").width()){
        clearInterval(myInterval);
      }
    }
    const myInterval = setInterval(equalSize, 1)
    window.addEventListener('resize', function(){
      $("#chess-menu").width($('#chess-board').width());
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
          <div id="BoardJSX" className="mx-4 mt-2 text-dark">
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
