import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { START_TIMER_1, START_TIMER_2 } from '../../redux/ActionTypes';

const TimerJSXTags = (remainingTime) => {
  const hours = Math.floor(remainingTime / 360000);
  const minutes = Math.floor(
    (
      remainingTime
      - (hours * 360000)
    ) / 6000,
  );
  const seconds = Math.floor(
    (
      remainingTime
      - (hours * 360000)
      - (minutes * 6000)
    ) / 100,
  );
  const remainder = (
    remainingTime
    - (hours * 360000)
    - (minutes * 6000)
    - (seconds * 100)
  );
  if (remainingTime >= 360000) {
    return (
      <>
        {String(hours).padStart(2, '0')}
        :
        {String(minutes).padStart(2, '0')}
        .
        {String(seconds).padStart(2, '0')}
      </>
    );
  } if (remainingTime >= 6000) {
    return (
      <>
        {String(hours).padStart(2, '0')}
        :
        {String(minutes).padStart(2, '0')}
        .
        {String(seconds).padStart(2, '0')}
      </>
    );
  }
  return (
    <>
      {String(minutes).padStart(2, '0')}
      :
      {String(seconds).padStart(2, '0')}
      .
      {String(remainder).padStart(2, '0')}
    </>
  );
};

class Timer extends React.Component {
  componentDidMount() {
    setInterval(() => {
      const {
        isTimer1Running, isTimer2Running, dispatch, webSocket,
      } = this.props;
      if (isTimer1Running) {
        /* decrement timer 1 */
        dispatch({ type: START_TIMER_1 });
        /* send time over websocket */
        const { timer1RemainingTime: remaingTime } = this.props;
        webSocket.send(JSON.stringify({
          action: 'message',
          method: 'updateTimer',
          timerId: 'timer1',
          remaingTime,
        }));
      } else if (isTimer2Running) {
        /* decrement timer 2 */
        dispatch({ type: START_TIMER_2 });
        /* send time over websocket */
        const { timer2RemainingTime: remaingTime } = this.props;
        webSocket.send(JSON.stringify({
          action: 'message',
          method: 'updateTimer',
          timerId: 'timer2',
          remaingTime,
        }));
      }
    }, 20);
  }

  render() {
    const { remainingTime } = this.props;
    return (
      <>{TimerJSXTags(remainingTime)}</>
    );
  }
}

Timer.propTypes = {
  remainingTime: PropTypes.number,
  dispatch: PropTypes.func,
  isTimer1Running: PropTypes.bool,
  isTimer2Running: PropTypes.bool,
  webSocket: PropTypes.shape({
    send: PropTypes.func,
  }),
  timer1RemainingTime: PropTypes.number,
  timer2RemainingTime: PropTypes.number,
};

Timer.defaultProps = {
  remainingTime: 0,
  dispatch: () => {},
  isTimer1Running: false,
  isTimer2Running: false,
  webSocket: {
    send: () => {},
  },
  timer1RemainingTime: 0,
  timer2RemainingTime: 0,
};

const mapDispatchToProps = (dispatch) => ({ dispatch });

const mapStateToProps = (state, ownProps) => {
  const {
    timer1RemainingTime, timer2RemainingTime, isTimer1Running, isTimer2Running,
  } = state.Timer;
  return {
    remainingTime: (ownProps.id === 'timer1' ? timer1RemainingTime : timer2RemainingTime),
    timer1RemainingTime,
    timer2RemainingTime,
    isTimer1Running,
    isTimer2Running,
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Timer);
