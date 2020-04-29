import React from 'react';

import startingPosition from '../images/StartingPosition.png';

const Learn = () => (
  <div className="px-3">
    <div className="h1">Rules of chess</div>
    <hr />
    <div className="mb-3">
      <div className="h2 text-secondary">What is the goal of a chess game?</div>
      <div>
        The goal in chess is to checkmate your opponent&apos;s King.
        When a king cannot avoid capture then it is checkmated and the game is over.
      </div>
    </div>
    <div className="mb-3">
      <div className="h2 text-secondary">Starting position</div>
      <div className="mb-3">
        The chessboard is placed with the light square at the right-hand
        corner nearest to each player.
        The rows are referred to as ranks. The columns are referred to as files.
      </div>
      <div>
        <img src={startingPosition} alt="starting chess position" style={{ width: '100%' }} />
      </div>
    </div>
    <div className="mb-3">
      <div className="h2 text-secondary">Moving the chess pieces</div>
    </div>
    <div className="mb-3">
      <div className="h3 text-white">Bishop</div>
      <div>
        The bishops can move any number of squares diagonally but
        cannot leap over other pieces.
      </div>
    </div>
    <div className="mb-3">
      <div className="h3 text-white">Knight</div>
      <div>
        The knights are the only pieces that can leap over other pieces.
        The knights move in an &quot;L&quot; shape. They can move two
        squares along the file and one square along the rank,
        or two squares along the rank and one square along the file.
      </div>
    </div>
    <div className="mb-3">
      <div className="h3 text-white">Rook</div>
      <div>
        The rooks can move any number of squares along a rank or file,
        but cannot leap over other pieces.
        Along with the king, a rook is involved in castling.
      </div>
    </div>
    <div className="mb-3">
      <div className="h3 text-white">King</div>
      <div>
        The king can move one square in any direction. The king also has
        a special move called castling.
      </div>
    </div>
    <div className="mb-3">
      <div className="h3 text-white">Queen</div>
      <div>
        The queen combines the power of a rook and bishop and can move
        any number of squares along a rank,
        file, or diagonal, but cannot leap over other pieces.
      </div>
    </div>
    <div className="mb-3">
      <div className="h3 text-white">Pawn</div>
      <div>
        The pawns move forward and attack diagonally.
        If the pawn is on its first move it can move forward two squares.
        Otherwise, a pawn can only move forward one square.
        A pawn has two special moves: the en passant and promotion.
      </div>
    </div>
    <div className="mb-3">
      <div className="h2 text-secondary">Special Moves</div>
    </div>
  </div>
);

export default Learn;
