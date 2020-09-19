import bishopMovements from '../images/BishopMovements.png';
import rookMovements from '../images/RookMovements.png';
import queenMovements from '../images/QueenMovements.png';
import kingMovements from '../images/KingMovements.png';
import pawnMovements from '../images/PawnMovements.png';

import createBoardArray from '../utils/CreateBoardArray';

export default [
  {
    piece: 'Knight',
    rules: `The knights are the only pieces that can leap over other pieces.
        The knights move in an "L" shape. They can move two
        squares along the file and one square along the rank,
        or two squares along the rank and one square along the file.`,
    alt: 'Knight Movements',
    board: createBoardArray(`${'.'.repeat(16)}..o.o....o...o.....N.....o...o....o.o...........`),
  },
  {
    piece: 'Bishop',
    rules: `The bishops can move any number of squares diagonally but
        cannot leap over other pieces.`,
    image: bishopMovements,
    alt: 'Bishop Movements',
    board: [],
  },
  {
    piece: 'Rook',
    rules: `The rooks can move any number of squares along a rank or file,
        but cannot leap over other pieces.
        Along with the king, a rook is involved in castling.`,
    image: rookMovements,
    alt: 'Rook Movements',
    board: [],
  },
  {
    piece: 'King',
    rules: `The king can move one square in any direction. The king has
        a special move called castling.`,
    image: kingMovements,
    alt: 'King Movements',
    board: [],
  },
  {
    piece: 'Queen',
    rules: `The queen combines the power of a rook and bishop and can move
        any number of squares along a rank,
        file, or diagonal, but cannot leap over other pieces.`,
    image: queenMovements,
    alt: 'Queen Movements',
    board: [],
  },
  {
    piece: 'Pawn',
    rules: `The pawns move forward and attack diagonally.
        If the pawn is on its first move it can move forward two squares.
        Otherwise, a pawn can only move forward one square.
        A pawn has two special moves: the en passant and promotion.`,
    image: pawnMovements,
    alt: 'Pawn Movements',
    board: [],
  },
];
