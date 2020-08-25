import React from 'react';

import startingPosition from '../images/StartingPosition.png';

import ChessMovements from '../utils/ChessMovements';
import SpecialMoves from '../utils/SpecialMoves';

import CustomNav from './subcomponents/CustomNav';
import Footer from './subcomponents/Footer';

const Learn = () => (
  <div className="bg-primary text-white">
    <CustomNav />
    <div className="px-3">
      <div className="mb-3">
        <div className="h2">Getting Started</div>
      </div>
      <div className="mb-3">
        <button className="btn btn-secondary w-100 text-left mb-2" type="button" data-toggle="collapse" data-target="#GoalOfChess" aria-expanded="false" aria-controls="GoalOfChess">
          What is the goal of a chess game?
        </button>
        <div className="collapse" id="GoalOfChess">
          <div className="mb-3">
            The goal in chess is to checkmate your opponent&apos;s King.
            When a king cannot avoid capture, then it is checkmated and the game is over.
          </div>
        </div>
      </div>
      <div className="mb-3">
        <button className="btn btn-secondary w-100 text-left mb-2" type="button" data-toggle="collapse" data-target="#StartingPosition" aria-expanded="false" aria-controls="StartingPosition">
          Starting position
        </button>
        <div className="collapse" id="StartingPosition">
          <div className="mb-3">
            The chessboard is placed with the light square at the right-hand
            corner nearest to each player.
            The rows are referred to as ranks. The columns are referred to as files.
          </div>
          <div>
            <img src={startingPosition} alt="starting chess position" className="d-block mx-auto" style={{ maxWidth: '100%', height: '60vh' }} />
          </div>
        </div>
      </div>
      <hr />
      <div className="mb-3">
        <div className="h2">Moving the pieces</div>
      </div>
      {
        ChessMovements.map((obj) => (
          <div key={obj.piece} className="mb-3">
            <button className="btn btn-secondary w-100 text-left mb-2" type="button" data-toggle="collapse" data-target={`#${String(obj.piece).replace(' ', '')}`} aria-expanded="false" aria-controls={obj.piece}>
              {obj.piece}
            </button>
            <div className="collapse" id={String(obj.piece).replace(' ', '')}>
              <div className="mb-3">{obj.rules}</div>
              <div>
                <img src={obj.image} alt={obj.alt} className="d-block mx-auto" style={{ maxWidth: '100%', height: '60vh' }} />
              </div>
            </div>
          </div>
        ))
      }
      {/* <hr /> */}
      <div className="mb-3">
        <div className="h2">Special Moves</div>
      </div>
      {
        SpecialMoves.map((obj) => (
          <div key={obj.move} className="mb-3">
            <button className="btn btn-secondary w-100 text-left mb-2" type="button" data-toggle="collapse" data-target={`#${String(obj.move).replace(' ', '')}`} aria-expanded="false" aria-controls={obj.move}>
              {obj.move}
            </button>
            <div className="collapse" id={String(obj.move).replace(' ', '')}>
              <div className="mb-3">{obj.description}</div>
              <div>
                <img src={obj.image} alt={obj.alt} className="d-block mx-auto" style={{ maxWidth: '100%', height: '60vh' }} />
              </div>
            </div>
          </div>
        ))
      }
    </div>
    <div className="px-3">
      <Footer />
    </div>
  </div>
);

export default Learn;
