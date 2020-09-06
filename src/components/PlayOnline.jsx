import React, { Suspense } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import CustomNav from './subcomponents/CustomNav';
import Footer from './subcomponents/Footer';

import { startBoard } from '../constants';
import { reverseBoard, hasBoardChanged } from '../utils';
import { clickedPieceJSX, clickedSquareJSX, getJSXBoard } from '../utils/engine';
import {
  SET_TIMER_1, SET_TIMER_2, SET_TIMER1_STATUS, SET_TIMER2_STATUS,
} from '../redux/ActionTypes';


const LiveBoard = React.lazy(() => import('./subcomponents/LiveBoard'));
const Timer = React.lazy(() => import('./subcomponents/Timer'));

class PlayOnline extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      webSocket: null,
      boardArray: startBoard,
      reversedBoardArray: reverseBoard(startBoard),
      madeConnection: false,
      yourTurn: false,
      foundOpponent: false,
      playerSide: null,
      initConnection: false,
    };
    this.createWebSocket = this.createWebSocket.bind(this);
    this.initializeWebSocket = this.initializeWebSocket.bind(this);
    this.updateBoard = this.updateBoard.bind(this);
    this.stopTimer = this.stopTimer.bind(this);
  }

  initializeWebSocket() {
    const { initConnection } = this.state;
    if (!initConnection) {
      this.setState({ initConnection: true });
      this.createWebSocket();
    }
  }

  createWebSocket() {
    this.ws = new WebSocket('wss://as4r4pfx8l.execute-api.us-east-1.amazonaws.com/dev');
    this.ws.onopen = () => {
      this.setState({
        madeConnection: true,
      });
    };
    this.ws.onmessage = (evt) => {
      const obj = JSON.parse(evt.data);

      if (obj.foundOpponent) {
        this.setState({
          foundOpponent: obj.foundOpponent,
        });
      }

      if (obj.side === 0 || obj.side === 1) {
        this.setState({
          playerSide: obj.side,
          yourTurn: (obj.side === 0),
        });
        const { dispatch } = this.props;
        dispatch({ type: SET_TIMER_1, payload: { timer1RemainingTime: 180000 } });
        dispatch({ type: SET_TIMER_2, payload: { timer2RemainingTime: 180000 } });
      }

      if (obj.method === 'init') {
        this.ws.send(JSON.stringify({
          action: 'message',
          method: 'init',
          message: '',
        }));
      }

      if (obj.move) {
        if (obj.move.type === 'Piece') clickedPieceJSX(obj.move.file, obj.move.rank);
        else if (obj.move.type === 'Square') clickedSquareJSX(obj.move.file, obj.move.rank);
        const tempBoard = getJSXBoard();
        const { boardArray } = this.state;
        const boardChange = hasBoardChanged(boardArray, tempBoard);
        if (boardChange) {
          /* start the timer for receiving an incoming move */
          const { dispatch } = this.props;
          if (obj.move.playerSide === 0) {
            dispatch({ type: SET_TIMER2_STATUS, payload: { isTimer2Running: true } });
          } else if (obj.move.playerSide === 1) {
            dispatch({ type: SET_TIMER1_STATUS, payload: { isTimer1Running: true } });
          }
          const { yourTurn } = this.state;
          this.setState({
            boardArray: tempBoard,
            reversedBoardArray: reverseBoard(tempBoard),
            yourTurn: !yourTurn,
          });
        }
      }

      if (typeof obj.remaingTime === 'number') { /* remaining time could hit '0' */
        const { dispatch } = this.props;
        if (obj.timerId === 'timer1') {
          dispatch({ type: SET_TIMER_1, payload: { timer1RemainingTime: obj.remaingTime } });
        } else if (obj.timerId === 'timer2') {
          dispatch({ type: SET_TIMER_2, payload: { timer2RemainingTime: obj.remaingTime } });
        }
      }
    };
    this.ws.onclose = () => {
      this.setState({
        madeConnection: false,
      });
    };
    this.setState({
      webSocket: this.ws,
    });
  }

  stopTimer() {
    const { isTimer1Running, isTimer2Running, dispatch } = this.props;
    if (isTimer1Running) dispatch({ type: SET_TIMER1_STATUS, payload: { isTimer1Running: false } });
    if (isTimer2Running) dispatch({ type: SET_TIMER2_STATUS, payload: { isTimer2Running: false } });
  }

  updateBoard() {
    const tempBoard = getJSXBoard();
    const { boardArray } = this.state;
    const boardChange = hasBoardChanged(boardArray, tempBoard);
    if (boardChange) {
      this.stopTimer();
      const { yourTurn } = this.state;
      this.setState({
        boardArray: tempBoard,
        reversedBoardArray: reverseBoard(tempBoard),
        yourTurn: !yourTurn,
      });
    }
  }

  render() {
    const {
      foundOpponent,
      madeConnection,
      playerSide,
      boardArray,
      reversedBoardArray,
      webSocket,
      yourTurn,
    } = this.state;
    return (
      <div className="bg-primary text-white" style={{ minHeight: '100vh' }}>
        <CustomNav />
        {
          foundOpponent && madeConnection
            ? (
              <Suspense fallback={<div className="bg-primary" style={{ minHeight: '100vh' }} />}>
                <div className="text-center py-3 h4">
                  <span>{playerSide === 0 ? 'Player2' : 'Player1'}</span>
                  <span className="mx-4"><Timer id={playerSide === 0 ? 'timer2' : 'timer1'} webSocket={webSocket} /></span>
                </div>
                <LiveBoard
                  boardArray={
                    playerSide === 0
                      ? boardArray
                      : reversedBoardArray
                  }
                  webSocket={webSocket}
                  yourTurn={yourTurn}
                  playerSide={playerSide}
                  updateBoard={this.updateBoard}
                />
                <div className="text-center py-3 h4">
                  <span className="mx-4">{playerSide === 0 ? 'Player1' : 'Player2'}</span>
                  <span className="mx-4"><Timer id={playerSide === 0 ? 'timer1' : 'timer2'} webSocket={webSocket} /></span>
                </div>
              </Suspense>
            )
            : (
              <div className="mx-3">
                <div className="w-75 m-auto h1 text-center">Choose Your Time Limit</div>
                <div className="w-50 mx-auto mt-4">
                  <div
                    className="text-center game-select"
                    onClick={this.initializeWebSocket}
                    onKeyDown={this.initializeWebSocket}
                  >
                    <div className="mt-4">30+0</div>
                    <div>Classic</div>
                    {
                            madeConnection && !foundOpponent
                              ? <div className="spinner-border text-secondary" role="status" />
                              : <div className="spinner-border text-tertiary" role="status" />
                        }
                  </div>
                </div>
              </div>
            )
        }
        <div className="px-3"><Footer /></div>
      </div>
    );
  }
}

PlayOnline.propTypes = {
  dispatch: PropTypes.func,
  isTimer1Running: PropTypes.bool,
  isTimer2Running: PropTypes.bool,
};

PlayOnline.defaultProps = {
  dispatch: () => {},
  isTimer1Running: false,
  isTimer2Running: false,
};

const mapDispatchToProps = (dispatch) => ({
  dispatch,
});

const mapStateToProps = (state /* , */ /* ownProps */) => {
  const { isTimer1Running, isTimer2Running } = state.Timer;
  return {
    isTimer1Running,
    isTimer2Running,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PlayOnline);
