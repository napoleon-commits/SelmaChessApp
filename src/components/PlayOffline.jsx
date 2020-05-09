import React from 'react';

// import { takeBack, newGame } from '../utils/engine';
// import '../styles/engine.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/common.css';
import '../styles/engineJSX.css';

// import $ from 'jquery';
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
} from '../utils/engine';


// const adjustBoardDimensions = () => {
//   const squareHeight = $('#BoardJSX').height() / 8;
//   const squareWidth = $('#BoardJSX').width() / 8;

//   $('.Square').height(squareHeight);
//   $('.Square').width(squareWidth);

//   $('.PieceJSX').height(squareHeight);
//   $('.PieceJSX').width(squareWidth);

//   $('.rank1').css('margin-top', squareHeight * 7);
//   $('.rank2').css('margin-top', squareHeight * 6);
//   $('.rank3').css('margin-top', squareHeight * 5);
//   $('.rank4').css('margin-top', squareHeight * 4);
//   $('.rank5').css('margin-top', squareHeight * 3);
//   $('.rank6').css('margin-top', squareHeight * 2);
//   $('.rank7').css('margin-top', squareHeight * 1);
//   $('.rank8').css('margin-top', squareHeight * 0);

//   $('.file8').css('margin-left', squareWidth * 7);
//   $('.file7').css('margin-left', squareWidth * 6);
//   $('.file6').css('margin-left', squareWidth * 5);
//   $('.file5').css('margin-left', squareWidth * 4);
//   $('.file4').css('margin-left', squareWidth * 3);
//   $('.file3').css('margin-left', squareWidth * 2);
//   $('.file2').css('margin-left', squareWidth * 1);
//   $('.file1').css('margin-left', squareWidth * 0);
// };

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
    };
    this.squareClick = this.squareClick.bind(this);
  }

  componentDidMount() {
    // adjustBoardDimensions();
    // window.addEventListener('resize', adjustBoardDimensions);
  }

  squareClick(rank, file, type) {
    if (type === 'Piece') {
      clickedPieceJSX(file, rank);
    } else if (type === 'Square') {
      clickedSquareJSX(file, rank);
    }
    this.setState({
      boardArray: getJSXBoard(),
    });
  }

  render() {
    const { boardArray } = this.state;
    const jsxTags = [];
    const rowTags = [];
    for (let i = 0; i < 8; i += 1) {
      const dataTags = [];
      for (let j = 0; j < 8; j += 1) {
        dataTags.push(
          // eslint-disable-next-line
          <td
            key={`${i}${j}`}
            className={(((i + j) % 2) === 0) ? 'bg-white' : 'darkSquare'}
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
    jsxTags.push(<table key={0}><tbody>{rowTags}</tbody></table>);
    return (
      <>
        <div className="bg-primary text-white" style={{ minHeight: '100vh' }}>
          <CustomNav />
          <div id="BoardJSX" className="mx-4 mt-2 text-dark">
            {jsxTags}
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
