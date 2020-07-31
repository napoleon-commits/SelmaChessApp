import React from 'react';

import startingPosition from '../images/StartingPosition.png';
import bishopMovements from '../images/BishopMovements.png';
import knightMovements from '../images/KnightMovements.png';
import rookMovements from '../images/RookMovements.png';
import queenMovements from '../images/QueenMovements.png';
import kingMovements from '../images/KingMovements.png';
import pawnMovements from '../images/PawnMovements.png';

import check from '../images/check.png';
import castling from '../images/castling.gif';
import enPassant from '../images/en_passant.gif';
import pawnPromotion from '../images/pawn_promotion.gif';

import CustomNav from './subcomponents/CustomNav';
import Footer from './subcomponents/Footer';

const Learn = () => (
  <div className="bg-primary text-white">
    <CustomNav />
    <div className="px-3">
      <div className="h1">Rules of chess</div>
      <hr />
      <div className="mb-3">
        <div className="h1 text-secondary">What is the goal of a chess game?</div>
        <div>
          The goal in chess is to checkmate your opponent&apos;s King.
          When a king cannot avoid capture then it is checkmated and the game is over.
        </div>
      </div>
      <hr />
      <div className="mb-3">
        <div className="h1 text-secondary">Starting position</div>
        <div className="mb-3">
          The chessboard is placed with the light square at the right-hand
          corner nearest to each player.
          The rows are referred to as ranks. The columns are referred to as files.
        </div>
        <div>
          <img src={startingPosition} alt="starting chess position" className="d-block mx-auto" style={{ maxWidth: '100%', height: '60vh' }} />
        </div>
      </div>
      <hr />
      <div className="mb-3">
        <div className="h1 text-secondary">Moving the pieces</div>
      </div>
      <div className="mb-3">
        <div className="h3 text-white">Knight</div>
        <div className="mb-3">
          The knights are the only pieces that can leap over other pieces.
          The knights move in an &quot;L&quot; shape. They can move two
          squares along the file and one square along the rank,
          or two squares along the rank and one square along the file.
        </div>
        <div>
          <img src={knightMovements} alt="Knight Movements" className="d-block mx-auto" style={{ maxWidth: '100%', height: '60vh' }} />
        </div>
      </div>
      <div className="mb-3">
        <div className="h3 text-white">Bishop</div>
        <div className="mb-3">
          The bishops can move any number of squares diagonally but
          cannot leap over other pieces.
        </div>
        <div>
          <img src={bishopMovements} alt="Bishop Movements" className="d-block mx-auto" style={{ maxWidth: '100%', height: '60vh' }} />
        </div>
      </div>
      <div className="mb-3">
        <div className="h3 text-white">Rook</div>
        <div className="mb-3">
          The rooks can move any number of squares along a rank or file,
          but cannot leap over other pieces.
          Along with the king, a rook is involved in castling.
        </div>
        <div>
          <img src={rookMovements} alt="Rook Movements" className="d-block mx-auto" style={{ maxWidth: '100%', height: '60vh' }} />
        </div>
      </div>
      <div className="mb-3">
        <div className="h3 text-white">King</div>
        <div className="mb-3">
          The king can move one square in any direction. The king has
          a special move called castling.
        </div>
        <div>
          <img src={kingMovements} alt="King Movements" className="d-block mx-auto" style={{ maxWidth: '100%', height: '60vh' }} />
        </div>
      </div>
      <div className="mb-3">
        <div className="h3 text-white">Queen</div>
        <div className="mb-3">
          The queen combines the power of a rook and bishop and can move
          any number of squares along a rank,
          file, or diagonal, but cannot leap over other pieces.
        </div>
        <div>
          <img src={queenMovements} alt="Queen Movements" className="d-block mx-auto" style={{ maxWidth: '100%', height: '60vh' }} />
        </div>
      </div>
      <div className="mb-3">
        <div className="h3 text-white">Pawn</div>
        <div className="mb-3">
          The pawns move forward and attack diagonally.
          If the pawn is on its first move it can move forward two squares.
          Otherwise, a pawn can only move forward one square.
          A pawn has two special moves: the en passant and promotion.
        </div>
        <div>
          <img src={pawnMovements} alt="Pawn Movements" className="d-block mx-auto" style={{ maxWidth: '100%', height: '60vh' }} />
        </div>
      </div>
      <hr />
      <div className="mb-3">
        <div className="h1 text-secondary">Special Moves</div>
      </div>
      <div className="mb-3">
        <div className="h3 text-white">Check</div>
        <div className="mb-3">
          When a king is under immediate attack by an opponent&apos;s piece,
          it is said to be in check.
          The only option is to remove the king from check.
          This can be capturing the attacking piece, placing a piece
          in between the attacker and the king, or move the king to a
          square where it is no longer in check. The king can not castle when it is in check.
        </div>
        <div>
          <img src={check} alt="Check" className="d-block mx-auto" style={{ maxWidth: '100%', height: '60vh' }} />
        </div>
      </div>
      <div className="mb-3">
        <div className="h3 text-white">Castling</div>
        <div className="mb-3">
          Castling is a move often made in the early parts of the game.
          In most cases, it moves the king to a safer position.
          Castling involves the moving of the king two squares to the left or
          two squares to the right, and placing the rook to the opposite side of the king.
          A player is only allowed to castle if the king and rook have not been moved.
          Also, castling can not happen if the king is in check,
          or if the king will pass through a check,
          or if the king will end up in check.
        </div>
        <div>
          <img src={castling} alt="Castle Movement" className="d-block mx-auto" style={{ maxWidth: '100%', height: '60vh' }} />
        </div>
      </div>
      <div className="mb-3">
        <div className="h3 text-white">Pawn Promoting</div>
        <div className="mb-3">
          When a pawn reaches the end of the board, that pawn can be promoted.
          Then the pawn can be exchanged for a queen, rook, bishop, or knight.
          Usually, the pawn is promoted to a queen. In some strategies the pawn is
          promoted to a rook, bishop, or knight. This is called underpromiting.
        </div>
        <div>
          <img src={pawnPromotion} alt="Pawn Promotion" className="d-block mx-auto" style={{ maxWidth: '100%', height: '60vh' }} />
        </div>
      </div>
      <div className="mb-3">
        <div className="h3 text-white">En passant</div>
        <div className="mb-3">
          When a pawn moves forward two squares and there is an opponent&apos;s pawn next to it,
          the opponent can capture the pawn by moving to the square the first pawn skipped.
          This can be done only on the very next turn.
        </div>
        <div>
          <img src={enPassant} alt="En passant" className="d-block mx-auto" style={{ maxWidth: '100%', height: '60vh' }} />
        </div>
      </div>
    </div>
    <div className="px-3">
      <Footer />
    </div>
  </div>
);

export default Learn;
