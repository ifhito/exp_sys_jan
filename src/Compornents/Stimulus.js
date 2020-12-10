import React, { Component } from 'react';
import '../css/stimulus.css';
const url = 'http://0.0.0.0:5000';

const Image = (props) => {
  return (
    <React.Fragment>
      <img src={props.content} alt={props.name} className="image"></img>
    </React.Fragment>
  );
}

const Word = (props) => {
  console.log(props.content);
  return (
    <div className='stimulus_word'>{props.content}</div>
  );
}

const Video = (props) => {
  return (
      <React.Fragment>
        <img src={props.content} alt={props.name} className="image"></img>
      </React.Fragment>
  );
}
const Stimulus_Change = (props) => {
  console.log(props.type);
  if(props.type == 'image'){
    return <Image type={props.type} content={props.content}/>;
  }else if(props.type == 'word'){
    return <Word type={props.type} content={props.content}/>;
  }else if(props.type == 'video'){
    return <Video type={props.type} content={props.content}/>;
  }else{
    return <div></div>
  }
};

const Stimulus = (props) => {
  console.log(props.content);
  return <Stimulus_Change type={props.type} content={props.content}/>;
}

export default Stimulus;