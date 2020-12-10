import React from 'react';
import Modal from 'react-overlays/Modal';
import styled from 'styled-components';
import Overlay from './Overlay.js';
import '../css/IntoIdeaProblem.css';
import { useState } from 'react';

import { withRouter } from 'react-router-dom';
// const url = 'https://stormy-bayou-25730.herokuapp.com';
const IntoIdeaProblem = (props) => {
  // const [problem, setProblem] = useState('');
  // const [keyword, setKeyword] = useState('');
  const [error, setError] = useState('');
  const [show, setShow] = useState(false);
  const handleChange = (event) => {
    switch (event.target.name) {
      case 'problem':
        props.setProblem(event.target.value);
        break;
      case 'keyword':
        props.setKeyword(event.target.value);
        break;
      default:
        console.log('key not found');
    }
  };
  const handleSubmit = () => {
    if (props.problem == '' || props.keyword == '' || props.type == '') {
      setError('全て入力してください');
    } else {
      props.history.push({
        pathname: '/thinkIdeaWithStimulus',
      });
    }
  };
  return (
    <div className="Container">
      <div className="inputPloblemWrapper">
        <p className="title">Creativity System</p>
        {/* <p>
          問題に対する刺激の表示をすることにより、あなたの創造を支援します。
        </p>
        <p>以下に問題とキーワードを入力してください</p> */}
        <p className='stimulusType'>刺激の種類</p>
        <div className='radio_content'>
        <input id='item-1' type='radio' className='radio-inline__input' name='type' value='word' checked={props.type === 'word'} onChange={() => props.setType('word')}/><label className='radio-inline__label' htmlFor='item-1'>Word</label>
        <input id='item-2' type='radio' className='radio-inline__input' name='type' value='image' checked={props.type === 'image'} onChange={() => props.setType('image')}/><label className='radio-inline__label' htmlFor='item-2'>Image</label>
        <input id='item-3' type='radio' className='radio-inline__input' name='type' value='video' checked={props.type === 'video'} onChange={() => props.setType('video')}/><label className='radio-inline__label' htmlFor='item-3'>Video</label>
        <input id='item-4' type='radio' className='radio-inline__input' name='type' value='random' checked={props.type === 'random'} onChange={() => props.setType('random')}/><label className='radio-inline__label' htmlFor='item-4'>Random</label>
        </div>
        <label className="problemTitle">問題</label>
        <textarea
          className="problemTextArea"
          name="problem"
          value={props.problem}
          onChange={handleChange}
        ></textarea>
        <label className="keywordTitle">問題のキーワード</label>
        <input
          className="keywordInputLayout"
          value={props.keyword}
          onChange={handleChange}
          name="keyword"
        />
        <div className="buttonContent">
          <div className="box">
            <span className="error">{error}</span>
            <span
              className="descriptionButtonText"
              onClick={() => setShow(true)}
            >
              説明を見る
            </span>
          </div>
          <button className="okButton" onClick={handleSubmit}>
            <span className="buttonText">決定</span>
          </button>
        </div>
      </div>
      <Overlay setShow={setShow} show={show} type={'IntoIdeaProblem'} />
    </div>
  );
};

export default withRouter(IntoIdeaProblem);
