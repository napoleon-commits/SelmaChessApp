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

const adjustBoardDimensions = () => {
  const squareHeight = $('#BoardJSX').height() / 8;
  const squareWidth = $('#BoardJSX').width() / 8;

  $('.Square').height(squareHeight);
  $('.Square').width(squareWidth);

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

const imagesStyleObject = { display: 'block', maxWidth: '100%', maxHeight: '100%' };

const getHTMLChessPiece = (letter) => {
  switch (letter) {
    case 'r':
      return <><img alt={letter} style={imagesStyleObject} src={blackRook} /></>;
    case 'n':
      return <><img alt={letter} style={imagesStyleObject} src={blackKnight} /></>;
    case 'b':
      return <><img alt={letter} style={imagesStyleObject} src={blackBishop} /></>;
    case 'q':
      return <><img alt={letter} style={imagesStyleObject} src={blackQueen} /></>;
    case 'k':
      return <><img alt={letter} style={imagesStyleObject} src={blackKing} /></>;
    case 'p':
      return <><img alt={letter} style={imagesStyleObject} src={blackPawn} /></>;
    case 'R':
      return <><img alt={letter} style={imagesStyleObject} src={whiteRook} /></>;
    case 'N':
      return <><img alt={letter} style={imagesStyleObject} src={whiteKnight} /></>;
    case 'B':
      return <><img alt={letter} style={imagesStyleObject} src={whiteBishop} /></>;
    case 'Q':
      return <><img alt={letter} style={imagesStyleObject} src={whiteQueen} /></>;
    case 'K':
      return <><img alt={letter} style={imagesStyleObject} src={whiteKing} /></>;
    case 'P':
      return <><img alt={letter} style={imagesStyleObject} src={whitePawn} /></>;
    default:
      return '';
  }
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
        jsxTags.push(
          <div
            key={`${i}${j}`}
            className={`Square position-absolute rank${i} file${j} ${((i + j) % 2 === 0) ? 'darkSquare' : 'bg-white'}`}
          >
            {getHTMLChessPiece(boardArray[8 - i][j - 1])}
          </div>,
        );
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
