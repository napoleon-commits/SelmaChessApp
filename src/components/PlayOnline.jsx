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
        <div className="mx-3">
          {'Connection Made: '}
          {String(madeConnection)}
          <br />
          {'Found Opponent: '}
          {String(foundOpponent)}
          <br />
          <div className="w-50 m-auto text-center h1">
            Time Limit
          </div>
          <div className="row w-50 m-auto">
            <div 
              className="col text-center game-select"
              onClick={this.initializeWebSocket}
            >
              <div>10+0</div>
              <div>Rapid</div>
            </div>
            <div 
              className="col text-center game-select"
              onClick={this.initializeWebSocket}
            >
              <div>30+0</div>
              <div>Classic</div>
            </div>
          </div>
        </div>
        <div className="px-3">
          <Footer />
        </div>
      </div>
    );
  }
}

export default PlayOnline;
