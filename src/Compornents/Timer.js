import React from 'react';
import '../css/timer.css';
import { useState, useEffect } from 'react';

import { withRouter } from 'react-router-dom';
const Timer = (props) => {
  let now = props.basicTime;
  let basicTime = props.basicTime;
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
  if (min <= 0 && sec <= 0 && props.type == 'Stimulus') {
    setStartTime(Math.floor(new Date().getTime() / 1000));
    props.handleNext();
    // props.history.push({
    //   pathname: props.pass,
    // });
  }else if(min <= 0 && sec <= 0 && props.type == 'free') {
    props.history.push({pathname: props.pass});
  }
  return (
    <>
    <div className="timer">
      <p className="time">{ basicTime <= now ? '15:00' : min + ':' + sec}</p>
    </div>

    </>
  );
};

export default withRouter(Timer);
