import React from 'react';
import Modal from 'react-overlays/Modal';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faSpinner} from '@fortawesome/free-solid-svg-icons'
import '../css/overlay.css';
import ProgressBar from './ProgressBar.js'
import { useState } from 'react';
const Overlay = (props) => {
  // console.log(props.problem);
  const Backdrop = styled('div')`
    position: fixed;
    z-index: 1040;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: #000;
    opacity: 0.5;
  `;
  const renderBackdrop = (props) => <Backdrop />;
  const [text, setText] = useState('START');
  const MyModal = styled(Modal)`
      position: fixed;
      width: 85%;
      height: 80%;
      overflow: scroll;
      z-index: 1040;
      top: 50%;
      left: 50%;
      border: 1px solid #e5e5e5;
      background-color: white;
      box-shadow: 0 5px 15px rgba(0, 0, 0, 0.5);
      padding:  0px;
      transform: translateY(-50%) translateX(-50%);
    -webkit- transform: translateY(-50%) translateX(-50%);
    `;
  if (props.type == 'IntoIdeaProblem') {
    return (
      <MyModal
        show={props.show}
        onHide={() => props.setShow(false)}
        aria-labelledby="modal-label"
        renderBackdrop={renderBackdrop}
        className="modal"
      >
        <div className="dialog">
          <h2>説明</h2>
          <div className="fontBold">
            <p>使い方の説明です。</p>
            <p>
              初めのページでは問題とその問題に関連するキーワードを入力してください
            </p>
            <img
              src={`${process.env.PUBLIC_URL}/discription_image/display_into_idea_problem.jpg`}
              name={'display_into_idea_problem'}
            />
            <p>
              ページを移動すると、一定時間考えてもらう部分が現れます。問題のみが表示されるので、自由にアイデアを考えてください。
            </p>
            <img
              src={`${process.env.PUBLIC_URL}/discription_image/display_think_idea_free.jpg`}
              name={'display_think_idea_free'}
            />
            <p>
              次に、意味的に遠い刺激と問題が提示される部分が表示されます。このページでは意味的に遠い刺激を表示するようになっているので、刺激を参考に一定時間アイデアを考えてください。
            </p>
            <img
              src={`${process.env.PUBLIC_URL}/discription_image/display_think_idea_with_stimulus.jpg`}
              name={'display_think_idea_with_stimulus'}
            />
            <p>最後にシステムは終了となります。</p>
          </div>
        </div>
      </MyModal>
    );
  } else if(props.type == 'loading') {
    return (
      <MyModal
        show={props.show}
        onHide={() => props.setShow(false)}
        aria-labelledby="modal-label"
        renderBackdrop={renderBackdrop}
        className="modal"
      >
      <div className='overlayContainer'>
        <p className='loadingText'>Loading...</p>
        <FontAwesomeIcon className='fontAwesomeIcon' icon={faSpinner} pulse ></FontAwesomeIcon>
      </div>
      </MyModal>
    );
  } else if (props.type == 'error'){
    return (
      <MyModal
        show={props.show}
        onHide={() => props.setShow(false)}
        aria-labelledby="modal-label"
        renderBackdrop={renderBackdrop}
        className="modal"
      >
      <div className='overlayContainer'>
        <p className='errorText'>Error</p>
      </div>
      </MyModal>
    );
  } else if (props.type == 'expEnv'){
    const handleShow = async () => {
      for(let i=0;i<3;i++){
        setText(String(3-i));
        await new Promise(r => setTimeout(r, 1000));
      }
      props.setShow(false);
      props.setBreak(false);
      setText('START');
    }
    return (
      <MyModal
        show={props.show}
        onHide={() => props.setShow(false)}
        aria-labelledby="modal-label"
        renderBackdrop={renderBackdrop}
        className="modal"
      >
        <div className="readyBox">
          <div className="ready">
          {props.Id == 0 ? <div className='readyText'>次のセクションでは刺激なしで<br/>アイデアを考えていただきます</div>:<div className='readyText'>次のセクションではGIF刺激を使って<br/>アイデアを考えていただきます</div>}
            <div className="ready_box_sub">
              {text == 'START'?(
              <button className="goButton" onClick={handleShow}>
                <span className="goButtonText">{text}</span>
              </button>):(<span className="goButtonText">{text}</span>)}
            </div>
          </div>
          <ProgressBar bgcolor={"#323232"} numerator={props.roopTimes} denominator={props.rooping_num}/>
        </div>
      </MyModal>
    );
  } else {
    return (
      <MyModal
        show={props.show}
        onHide={() => props.setShow(false)}
        aria-labelledby="modal-label"
        renderBackdrop={renderBackdrop}
        className="modal"
      >
        <div className="readyBox">
          <div className="ready">
            <p className="readyText">Ready...</p>
            <button className="goButton" onClick={(event) => props.setShow(false)}>
              <span className="goButtonText">GO!!</span>
            </button>
          </div>
        </div>
      </MyModal>
    );
  }
};

export default Overlay;
