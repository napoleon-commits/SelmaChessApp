import React from 'react';

// import { takeBack, newGame } from '../utils/engine';
// import '../styles/engine.css';
import '../styles/common.css';
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

import { startBoard } from '../constants';

import '../utils/engine';

const adjustBoardDimensions = () => {
  const squareHeight = $('#BoardJSX').height() / 8;
  const squareWidth = $('#BoardJSX').width() / 8;

  $('.Square').height(squareHeight);
  $('.Square').width(squareWidth);

  $('.PieceJSX').height(squareHeight);
  $('.PieceJSX').width(squareWidth);

  $('.rank1').css('margin-top', squareHeight * 7);
  $('.rank2').css('margin-top', squareHeight * 6);
  $('.rank3').css('margin-top', squareHeight * 5);
  $('.rank4').css('margin-top', squareHeight * 4);
  $('.rank5').css('margin-top', squareHeight * 3);
  $('.rank6').css('margin-top', squareHeight * 2);
  $('.rank7').css('margin-top', squareHeight * 1);
  $('.rank8').css('margin-top', squareHeight * 0);

  $('.file8').css('margin-left', squareWidth * 7);
  $('.file7').css('margin-left', squareWidth * 6);
  $('.file6').css('margin-left', squareWidth * 5);
  $('.file5').css('margin-left', squareWidth * 4);
  $('.file4').css('margin-left', squareWidth * 3);
  $('.file3').css('margin-left', squareWidth * 2);
  $('.file2').css('margin-left', squareWidth * 1);
  $('.file1').css('margin-left', squareWidth * 0);
};

const imagesStyleObject = {
  display: 'block', maxWidth: '100%', maxHeight: '100%', margin: 'auto',
};

const getHTMLChessPiece = (letter, rank, file) => {
  const className = `PieceJSX position-absolute rank${
    rank} file${file} ${((rank + file) % 2 === 0) ? 'darkSquare' : 'bg-white'}`;
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
    };
  }

  componentDidMount() {
    adjustBoardDimensions();
    window.addEventListener('resize', adjustBoardDimensions);
  }

  render() {
    const { boardArray } = this.state;
    const jsxTags = [];
    for (let i = 8; i >= 1; i -= 1) {
      for (let j = 1; j <= 8; j += 1) {
        if (
          boardArray[8 - i][j - 1] === '.'
        ) {
          jsxTags.push(
            <div
              key={`${i}${j}`}
              className={`Square position-absolute rank${i} file${j} ${((i + j) % 2 === 0) ? 'darkSquare' : 'bg-white'}`}
            />,
          );
        } else {
          jsxTags.push(
            <div key={`${i}${j}`}>{getHTMLChessPiece(boardArray[8 - i][j - 1], i, j)}</div>,
          );
        }
      }
    }
    return (
      <>
        <div className="bg-primary text-white" style={{ minHeight: '100vh' }}>
          <CustomNav />
          <div id="BoardJSX" style={{ height: '60vh' }} className="mx-3 mt-2 text-dark">
            {jsxTags}
          </div>
          <div className="px-3">
            <Footer />
          </div>
        </div>
      </>
    );
  }
}

export default PlayOffline;
