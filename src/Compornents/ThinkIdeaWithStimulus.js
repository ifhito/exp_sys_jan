import React from 'react';
import Timer from './Timer.js';
import Stimulus from './Stimulus.js';
import Overlay from './Overlay.js';
import '../css/thinkIdeaWithStimulus.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
const url = 'http://0.0.0.0:5000';
axios.defaults.baseURL = 'http://0.0.0.0:5000';
axios.defaults.headers.post['Content-Type'] = 'application/json;charset=utf-8';
axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';

const ThinkIdeaWithStimulus = (props) => {
  const [Id, setId] = useState(0);
  const [show, setShow] = useState(true);
  const [loading, setLoading] = useState('loading');
  const [stimulusFlag, setStimulusFlag] = useState(false); 
  const [List, setList] = useState([]);
  const [breakFlag, setBreakFlag] = useState(false);


  useEffect(() => {
    console.log(props.type,props.keyword);
    const params = {
      "type": props.type,
      'label': props.keyword,
    } 
    let res;
    let stimulusList = [];
    const f = async (params) => {
      console.log(params);
        res = await fetch(url+'/getData',{
          method: 'POST',
          mode: 'cors',
          headers: {
            'Content-Type': 'application/json'
          },
          referrerPolicy: 'no-referrer',
          body: JSON.stringify(params)
        });
        console.log(res.ok);
        if (res.ok) { 
          let response = await res.json();
          stimulusList = response['entries'];
          console.log('stimulus',stimulusList['Third_stimulus']);
          setList(stimulusList['Third_stimulus'].slice(0,20));
          setLoading('ThinkIdeaWithStimulus');
          console.log('response',stimulusList);
        } else {
          setLoading('error');
        }
    };
    f(params);
  }, []);


  const handleNext = (event) => {
    console.log('test', Id, List.length);
    let tmpId = Id + 1;
    if(tmpId < List.length -1){
      if(breakFlag == true){
        setId(Id + 1);
        setBreakFlag(!breakFlag);
      }else{
        setBreakFlag(!breakFlag);
      }
    }else{
      setId(Id + 1);
      setStimulusFlag(true);
    }
  };


  return (
    <div className="ThinkIdeaWithStimulusDocuments foldtl">
      {show == false ? (
        <Timer
          breakFlag={breakFlag}
          type={'Stimulus'}
          pass={'./finish'}
          Id = {Id}
          All = {List.length}
          handleNext={handleNext}
        />
      ) : (
        <div></div>
      )}
      <div className="stimulusContainer">
        {breakFlag == false ?         
        <div className="wrapper">
          <div className="problemTitleStimulus">{props.problem}</div>
          <Stimulus
            className='image'
            content={List[Id]}
            name={List[Id]}
            type={props.type}
          />
          {/* {stimulusFlag == false ? <button className="stimulusButton" onClick={handleNext}>
            <span className="differentStimulusButton">Different</span>
          </button> : <div></div>} */}
        </div> 
        : 
        <div>test</div>}
      </div>
      <Overlay setShow={setShow} show={show} type={loading} />
    </div>
  );
};

export default ThinkIdeaWithStimulus;
