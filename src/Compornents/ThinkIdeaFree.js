import React from 'react';
import Timer from './Timer.js';
import Modal from 'react-overlays/Modal';
import styled from 'styled-components';
import Overlay from './Overlay.js';
import '../css/thinkIdeaFree.css';
import { useState } from 'react';

const ThinkIdeaFree = (props) => {
  // console.log(props.problem);
  const [show, setShow] = useState(true);
  return (
    <div className="ThinkIdeaFreeDocuments foldtl">
      {show == false ? (
        <Timer type={'free'} problem={props.problem} keyword={props.keyword} pass={'./ThinkIdeaWithStimullus'}/>
      ) : (
        <div></div>
      )}
      {/* <div>まず問題について普通に考えてもらいます。</div> */}
      {/* <div className="drawProblem">{props.location.state.problem}</div> */}
      <div className="drawProblem">
        <p className="problemText">{props.problem}</p>
      </div>
      <Overlay setShow={setShow} show={show} type={'ThinkIdeaFree'} />
    </div>
  );
};

export default ThinkIdeaFree;
