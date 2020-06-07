import React from 'react';
import CustomNav from './CustomNav';
import Footer from './Footer';

class PlayOnline extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      madeConnection: false,
      foundOpponent: false,
      gameID: null,
    };
    this.initializeWebSocket = this.initializeWebSocket.bind(this);
    this.send = this.send.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(e) {
    this.setState({
      [e.target.id]: e.target.value,
    });
  }

  initializeWebSocket() {
    this.ws = new WebSocket(
      `ws://localhost:8999/opensearch/${new Date().toLocaleString()}`,
    );

    this.ws.onopen = () => {
      this.setState({
        madeConnection: true,
      });
    };

    this.ws.onmessage = (evt) => {
      const obj = JSON.parse(evt.data);
      this.setState((prevState) => ({
        foundOpponent: (
          obj.foundOpponent
            ? obj.foundOpponent
            : prevState.foundOpponent
        ),
        gameID: (
          obj.gameID
            ? obj.gameID
            : prevState.gameID
        ),
      }));
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
      foundOpponent, madeConnection,
    } = this.state;
    return (
      <div className="bg-primary text-white" style={{ minHeight: '100vh' }}>
        <CustomNav />
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
