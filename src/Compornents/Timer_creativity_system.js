import React from 'react';
import '../css/timer.css';
import { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
const Timer = withRouter((props) => {
  let now = 5
  const [startTime, setStartTime] = useState(0);
  const [time, setTime] = useState(0);
  useEffect(() => {
    setStartTime(Math.floor(new Date().getTime() / 1000));
  }, []);
  useEffect(() => {
    const timerId = setInterval(
      () => setTime(Math.floor(new Date().getTime() / 1000)),
      1000
    );
    return () => clearInterval(timerId);
  }, []);
  now -= (time - startTime);
  let min = Math.floor(now / 60);
  let sec = now % 60;
  console.log(min, sec);
  if (min == 0 && sec <= 0) {
    props.history.push({
      pathname: props.type == 'free' ? '/thinkIdeaWithStimulus' : '/Finish',
    });
  }
  return (
    <div className="timer">
      <p className="time">{300 < now ? '5:00' : min + ':' + sec}</p>
    </div>
  );
});

export default Timer;