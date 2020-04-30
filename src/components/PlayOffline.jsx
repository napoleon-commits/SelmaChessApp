import React from 'react';

import { takeBack, newGame } from '../utils/engine';
import '../styles/engine.css';
import '../styles/common.css';
import CustomNav from './CustomNav';
import Footer from './Footer';

const PlayOffline = () => (
  <>
    <div className="bg-primary text-white" style={{ minHeight: '100vh' }}>
      <CustomNav />
      <div id="Board" />
      <div id="EngineOutput">
        <button type="button" id="NewGameButton" onClick={newGame}>New Game</button>
        <br />
        <button type="button" id="TakeButton" onClick={takeBack}>Take Back</button>
        <br />
        <br />
        <br />
        <span id="GameStatus" />
      </div>
      <div className="px-3">
        <Footer />
      </div>
    </div>
  </>
);

export default PlayOffline;
