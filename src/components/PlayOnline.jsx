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
      pairingType: null,
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

  initializeWebSocket(pairingType) {
    // console.log(e.target.id);
    // console.log(id);
    this.setState({
      pairingType,
    });
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
      foundOpponent, madeConnection, pairingType,
    } = this.state;
    return (
      <div className="bg-primary text-white" style={{ minHeight: '100vh' }}>
        <CustomNav />
        <div className="mx-3">
          <div className="w-75 m-auto text-center h1">
            Choose Your Time Limit
          </div>
          <div className="row w-50 mx-auto mt-4">
            <div
              className="col text-center game-select"
              onClick={() => { this.initializeWebSocket(1); }}
              onKeyDown={() => { this.initializeWebSocket(1); }}
              tabIndex={0}
              role="button"
            >
              <div className="mt-4">10+0</div>
              <div>Rapid</div>
              {
                madeConnection && !foundOpponent && pairingType === 1
                  ? (
                    <div className="spinner-border text-secondary" role="status" />
                  )
                  : (
                    <div className="spinner-border text-tertiary" role="status" />
                  )
              }
            </div>
            <div
              className="col text-center game-select"
              onClick={() => { this.initializeWebSocket(2); }}
              onKeyDown={() => { this.initializeWebSocket(2); }}
              tabIndex={0}
              role="button"
            >
              <div className="mt-4">30+0</div>
              <div>Classic</div>
              {
                madeConnection && !foundOpponent && pairingType === 2
                  ? (
                    <div className="spinner-border text-secondary" role="status" />
                  )
                  : (
                    <div className="spinner-border text-tertiary" role="status" />
                  )
              }
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
