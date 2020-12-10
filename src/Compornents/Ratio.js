import React from 'react';
import '../css/timer.css';
import { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
const Ratio = (props) => {
  console.log('Ratios', props.Id, props.All)
  if(props.Id >= props.All){
    console.log('roopTimes', props.roopTimes);
    if(props.type=='free'){
      props.history.push({
      pathname: '/thinkIdeaWithStimulus',
      });
    }
  }
  return (
    <div className="">
      <p className="">{props.Id+1}/{props.All}</p>
    </div>
  );
};

export default withRouter(Ratio);
