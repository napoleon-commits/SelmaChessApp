import React from 'react';
import CustomNav from './CustomNav';
import Footer from './Footer';

import { startBoard } from '../constants';

class PlayOnline extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      matchType: 'open',
      madeConnection: false,
      foundOpponent: false,
      board: startBoard,
    };
    this.handleSelectChange = this.handleSelectChange.bind(this);
    this.initializeWebSocket = this.initializeWebSocket.bind(this);
    this.send = this.send.bind(this);
  }

  handleSelectChange(e) {
    this.setState({
      matchType: e.target.value,
    });
  }

  initializeWebSocket() {
    this.ws = new WebSocket('ws://localhost:8080');

    this.ws.onopen = () => {
      this.setState({
        madeConnection: true,
      });
    };

    this.ws.onmessage = (evt) => {
      this.setState({
        board: evt.data.board,
      });
    };

    this.ws.onclose = () => {
      this.setState({
        madeConnection: false,
      });
    };
  }

  send() {
    this.ws.send({

    });
  }

  render() {
    const {
      matchType, board, foundOpponent, madeConnection,
    } = this.state;
    return (
      <div className="bg-primary text-white" style={{ minHeight: '100vh' }}>
        <CustomNav />
        <span>Match Type</span>
        <select id="matchType" value={matchType} onChange={this.handleSelectChange}>
          <option value="open">Open</option>
          <option value="direct">Direct</option>
        </select>
        <br />
        <label htmlFor="color">{'Play as: '}</label>
        {
          matchType === 'open'
            ? (
              <select name="" id="color">
                <option value="Black">Random</option>
              </select>
            )
            : (
              <select name="" id="color">
                <option value="Black">Black</option>
                <option value="Black">White</option>
                <option value="Black">Random</option>
              </select>
            )
        }
        <br />
        <input type="text" placeholder="yourID" />
        <br />
        <input type="text" placeholder="opponentID" disabled={matchType === 'open'} />
        <br />
        {board}
        <br />
        {'Connection Made: '}
        {String(madeConnection)}
        <br />
        {'Found Opponent: '}
        {String(foundOpponent)}
        <br />
        <button
          disabled={madeConnection}
          onClick={this.initializeWebSocket}
          type="button"
        >
          Initialize WebSocket
        </button>
        <div className="px-3">
          <Footer />
        </div>
      </div>
    );
  }
}

export default PlayOnline;
