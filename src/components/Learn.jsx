import React from 'react';

import startingPosition from '../images/StartingPosition.png';

import ChessMovements from '../static/ChessMovements';
import SpecialMoves from '../static/SpecialMoves';
import GettingStarted from '../static/GettingStarted';
import textToSpeech from '../utils/TextToSpeech';
import LandingPageHeader from '../static/LandingPageHeader';

import CustomNav from './subcomponents/CustomNav';
import Footer from './subcomponents/Footer';

const Learn = () => (
  <div className="bg-primary text-white">
    <CustomNav />
    <div className="px-3">
      <div className="mb-3">
        <div className="h1">An Introduction to Chess</div>
      </div>
      <div className="mb-3">
        {/* <div className="h1">{LandingPageHeader.header}</div> */}
        <div>
          {LandingPageHeader.description}
          {/* eslint-disable-next-line */}
          <span onClick={() => { textToSpeech(LandingPageHeader.speech); }} className="ml-2 c-pointer" role="img" aria-label="Speaker">&#128264;</span>
        </div>
      </div>
      <div className="mb-3">
        <button className="btn btn-secondary w-100 text-left mb-2" type="button" data-toggle="collapse" data-target="#GoalOfChess" aria-expanded="false" aria-controls="GoalOfChess">
          What is the goal of a chess game?
        </button>
        <div className="collapse" id="GoalOfChess">
          <div className="mb-3">
            {GettingStarted[0]}
            {/* eslint-disable-next-line */}
            <span onClick={() => { textToSpeech(GettingStarted[0]); }} className="ml-3 c-pointer" role="img" aria-label="Speaker">&#128264;</span>
          </div>
        </div>
      </div>
      <div className="mb-3">
        <button className="btn btn-secondary w-100 text-left mb-2" type="button" data-toggle="collapse" data-target="#StartingPosition" aria-expanded="false" aria-controls="StartingPosition">
          Starting position
        </button>
        <div className="collapse" id="StartingPosition">
          <div className="mb-3">
            {GettingStarted[1]}
            {/* eslint-disable-next-line */}
            <span onClick={() => { textToSpeech(GettingStarted[1]); }} className="ml-3 c-pointer" role="img" aria-label="Speaker">&#128264;</span>
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
              <div className="mb-3">
                {obj.rules}
                {/* eslint-disable-next-line */}
                <span onClick={() => { textToSpeech(obj.rules); }} className="ml-3 c-pointer" role="img" aria-label="Speaker">&#128264;</span>
              </div>
              <div>
                <img src={obj.image} alt={obj.alt} className="d-block mx-auto" style={{ maxWidth: '100%', height: '60vh' }} />
              </div>
            </div>
          </div>
        ))
      }
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
              <div className="mb-3">
                {obj.description}
                {/* eslint-disable-next-line */}
                <span onClick={() => { textToSpeech(obj.description); }} className="ml-3 c-pointer" role="img" aria-label="Speaker">&#128264;</span>
              </div>
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
