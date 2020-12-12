import React from 'react';
import Timer from './Timer.js';
import Stimulus from './Stimulus.js';
import Overlay from './Overlay.js';
// import '../css/thinkIdeaWithStimulus.css';
import '../css/ExpEnvPage.css';
import { useState, useEffect } from 'react';
// import axios from 'axios';
// import Ratio from './Ratio.js';
// import StimulusDataVideo from '../Json/stimulus_video.json';
// import StimulusDataImage from '../Json/stimulus_image.json';
// import StimulusDataWord from '../Json/stimulus_word.json';
// import StimulusDataPlane from '../Json/stimulus_not_stimulus.json'
import StimulusData from '../Json/stimulus_test.json';
import StimulusTestData from '../Json/test.json'
import { withRouter } from 'react-router-dom';
import ProgressBar from './ProgressBar.js';
function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }
  console.log(array)
  return array;
}
function shuffleProperties(obj) {
  var new_obj = {};
  var keys = getKeys(obj);
  keys = shuffle(keys);
  for (var key in keys){
      if (key == "shuffle") continue; // skip our prototype method
      new_obj[keys[key]] = obj[keys[key]];
  }
  return new_obj;
}

function getKeys(obj){
  var arr = new Array();
  for (var key in obj)
      arr.push(key);
  return arr;
}
//Input type is Json.Data structure↓.
//input = {0:{{type:'word',problem:'brick(煉瓦)', name:'xxx', url:'http://xxxxx'},...},...}

const ExpEnvPage = (props) => {
  const [Id, setId] = useState(0);
  const [show, setShow] = useState(true);
  const [loading, setLoading] = useState('loading');
  const [stimulusFlag, setStimulusFlag] = useState(false);//刺激があるかどうかのflag
  const [stimulus, setStimulus] = useState([{"type":"word","problem":"煉瓦","name":"xxx","url_or_data":"革命"}]);
  const [breakFlag, setBreakFlag] = useState(false);//休憩するかどうか
  const [roopTimes, setRoopTimes] = useState(0);
  const [stims, setStims] = useState([]);
  const basicTime = props.location.state.test ? (breakFlag ? 5:10):(breakFlag ? 15:30);
//   const StimulusData = {"0":{"0":{"type":"word","problem":"煉瓦","name":"xxx","url_or_data":"革命"}}}
//   const stimulus = StimulusData[roopNum]
    //const stim_size = Object.keys(props.stimulus).length;
    let stim_size = 0;
    const rooping_num = props.location.state.test == true ? 1:10;
    let stims_dum =[]
    const slice_num = 50;
    // Object.entries(obj).slice(0,2).map(entry => entry[1])
    useEffect(async () => {
      // let stimulus_data_image = shuffleProperties(StimulusDataImage);
      // let stimulus_data_plane = shuffleProperties(StimulusDataPlane);
      // let stimulus_data_video = shuffleProperties(StimulusDataVideo);
      // let stimulus_data_word = shuffleProperties(StimulusDataWord);
      // // let stimulus_data_video = shuffleProperties(Object.entries(StimulusDataVideo).slice(0,slice_num).map(entry => entry[1]));
      // // let stimulus_data_image = shuffleProperties(Object.entries(StimulusDataImage).slice(0,slice_num).map(entry => entry[1]));
      // // let stimulus_data_word = shuffleProperties(Object.entries(StimulusDataWord).slice(0,slice_num).map(entry => entry[1]));
      // // let stimulus_data_plane = shuffleProperties(Object.entries(StimulusDataPlane).slice(0,slice_num).map(entry => entry[1]));
      // const select_obj = [stimulus_data_video,stimulus_data_image,stimulus_data_word,stimulus_data_plane];
      // let num_list = [0,1,2,3];
      // let stim = []
      // for (const key in stimulus_data_word) {
      //   num_list = await shuffle(num_list);
      //   for(let n=0; n < num_list.length; n++){
      //     console.log(n);
      //     stim.push(select_obj[num_list[n]][key])
      //   }
      //   console.log(stim);
      //   console.log('test',Object.keys(stimulus_data_word).length*4);
      //   if(stim.length == Object.keys(stimulus_data_word).length*4/rooping_num){
      //     stims_dum.push(stim)
      //     stim = []
      //   }
      //   setStims(stims_dum);
      // }
      let stimulus_data = props.location.state.test == true ? StimulusTestData['stimulus']:StimulusData['stimulus'];
      console.log(stimulus_data);
      setStims(stimulus_data);
      setStimulusFlag(!stimulusFlag);
      setLoading('expEnv')
      // setStims(stims_dummy)
      console.log(stims);
    },[]);
    console.log(stims)
    if(stimulusFlag == true){
        stim_size = stims.length/rooping_num*(roopTimes+1);
    }
    const handleNext = (event) => {
      console.log('test', Id, stim_size);
      if(show == false){
        let tmpId = Id + 1;
        if(breakFlag == true){
        if(tmpId <= stim_size -1){
            setId(Id + 1);
            setBreakFlag(!breakFlag);
        }else{
          if(roopTimes + 1 >= rooping_num){
            if(props.location.state.test){
              props.history.push({
                pathname: '/expEnvMainPage'
              });
            }else{
              props.history.push({
                pathname: '/finish',
              });

            }
          }
          setId(Id + 1);
          setShow(true);
          setRoopTimes(roopTimes + 1);
        }
      }else{
        setBreakFlag(!breakFlag);
      }
      }
    };


  return (
    <div className="ThinkIdeaWithStimulusDocuments foldtl">
        {show == false ? (
            <Timer
          basicTime={basicTime}
          type={'Stimulus'}
          pass={'./finish'}
          Id = {Id}
          All = {stim_size}
          handleNext={handleNext}
        />
      ) : (
        <div></div>
      )}
      {show == false ? (
        <div className="stimulusContainer">
        {breakFlag == false ?         
        <div className="wrapper">
          <div className="problemTitleStimulus">{stims[Id].problem}</div>
          <Stimulus
            className='image'
            content={stims[Id].url}
            name={stims[Id].name}
            type={stims[Id].type}
          />
          {/* {stimulusFlag == false ? <button className="stimulusButton" onClick={handleNext}>
            <span className="differentStimulusButton">Different</span>
          </button> : <div></div>} */}
        </div> 
        : 
        <div className='break_text'>紙を変更してください</div>}
      </div>
      ) :(
            <div></div>
        )}    
        {show == false ? (
        <ProgressBar bgcolor={"grey"} numerator={Id - stims.length/rooping_num*roopTimes} denominator={stim_size/(roopTimes+1)}/>
      ) : (
        <div></div>
      )}
      <Overlay setShow={setShow} roopTimes={roopTimes} rooping_num={rooping_num} show={show} type={loading} />
    </div>
  );
};

export default withRouter(ExpEnvPage);
