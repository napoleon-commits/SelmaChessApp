import check from '../images/check.png';
import castling from '../images/castling.gif';
import pawnPromotion from '../images/pawn_promotion.gif';

import createBoardArray from '../utils/CreateBoardArray';

export default [
  {
    move: 'Check',
    description: `When a king is under immediate attack by an opponent's piece,
        it is said to be in check.
        The only option is to remove the king from check.
        This can be capturing the attacking piece, placing a piece
        in between the attacker and the king, or move the king to a
        square where it is no longer in check. The king can not castle when it is in check.`,
    image: check,
    alt: 'Example of a check position',
    moves: [],
  },
  {
    move: 'Castling',
    description: `Castling is a move often made in the early parts of the game.
        In most cases, it moves the king to a safer position.
        Castling involves the moving of the king two squares to the left or
        two squares to the right, and placing the rook to the opposite side of the king.
        A player is only allowed to castle if the king and rook have not been moved.
        Also, castling can not happen if the king is in check,
        or if the king will pass through a check,
        or if the king will end up in check.`,
    image: castling,
    alt: 'Example of castling',
    moves: [],
  },
  {
    move: 'Pawn Promoting',
    description: `When a pawn reaches the end of the board, that pawn can be promoted.
        Then the pawn can be exchanged for a queen, rook, bishop, or knight.
        Usually, the pawn is promoted to a queen. In some strategies the pawn is
        promoted to a rook, bishop, or knight. This is called underpromiting.`,
    image: pawnPromotion,
    alt: 'Pawn Promotion',
    moves: [],
  },
  {
    move: 'En passant',
    description: `When a pawn moves forward two squares and there is an opponent's pawn next to it,
        the opponent can capture the pawn by moving to the square the first pawn skipped.
        This can be done only on the very next turn.`,
    alt: 'En passant',
    moves: [
      createBoardArray('rnbqkbnrppp.pppp...........P....................PPPP.PPPRNBQKBNR'),
      createBoardArray('rnbqkbnrppp..ppp...........Pp...................PPPP.PPPRNBQKBNR'),
      createBoardArray('rnbqkbnrppp..ppp....P...........................PPPP.PPPRNBQKBNR'),
    ],
  },
];
