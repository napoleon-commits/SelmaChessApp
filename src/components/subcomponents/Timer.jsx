import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const TimerJSXTags = (remainingTime, hours, minutes, seconds, remainder) => {
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

const Timer = (props) => {
  const { remainingTime } = props;
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
  return (
    <>
      {
            TimerJSXTags(remainingTime, hours, minutes, seconds, remainder)
        }
    </>
  );
};

Timer.propTypes = {
  remainingTime: PropTypes.number,
};

Timer.defaultProps = {
  remainingTime: 0,
};

const mapStateToProps = (state, ownProps) => {
  const { timer1RemainingTime, timer2RemainingTime } = state.Timer;
  return {
    remainingTime: (ownProps.id === 'timer1' ? timer1RemainingTime : timer2RemainingTime),
  };
};

export default connect(
  mapStateToProps,
  {},
)(Timer);
