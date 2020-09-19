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
    alt: 'Bishop Movements',
    board: createBoardArray('o.....o..o...o....o.o......B......o.o....o...o..o.....o........o'),
  },
  {
    piece: 'Rook',
    rules: `The rooks can move any number of squares along a rank or file,
        but cannot leap over other pieces.
        Along with the king, a rook is involved in castling.`,
    alt: 'Rook Movements',
    board: createBoardArray('...o....'.repeat(3)+'oooRoooo'+'...o....'.repeat(4)),
  },
  {
    piece: 'King',
    rules: `The king can move one square in any direction. The king has
        a special move called castling.`,
    alt: 'King Movements',
    board: createBoardArray('.'.repeat(16)+'....ooo.....oKo.....ooo.'+'.'.repeat(24)),
  },
  {
    piece: 'Queen',
    rules: `The queen combines the power of a rook and bishop and can move
        any number of squares along a rank,
        file, or diagonal, but cannot leap over other pieces.`,
    alt: 'Queen Movements',
    board: createBoardArray('...o...oo..o..o..o.o.o....ooo...oooQoooo..ooo....o.o.o..o..o..o.'),
  },
  {
    piece: 'Pawn',
    rules: `The pawns move forward and attack diagonally.
        If the pawn is on its first move it can move forward two squares.
        Otherwise, a pawn can only move forward one square.
        A pawn has two special moves: the en passant and promotion.`,
    alt: 'Pawn Movements',
    board: createBoardArray('.'.repeat(24)+'xox......P...o......xox......P..........'),
  },
];
