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
    `
      <img 
        class=${className}
        alt=${letter}
        style=${imagesStyleObject}
        src=${imageSrc}
      />
    `
  );
};

export default getHTMLChessPiece;
