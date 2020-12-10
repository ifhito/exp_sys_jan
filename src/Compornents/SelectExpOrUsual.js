import React from 'react';
import { withRouter } from 'react-router-dom';
import '../css/selectExpOrUsual.css'
const SelectExpOrUsual = (props) => {
  function handlePageChange(page) {
        if (page == 'usual') {
            props.history.push('/intoIdeaProblem');
        } else {
            props.history.push('/expEnvMainPage');
        }
    }
  return (
    <div className="Container">
        <div className="inputPloblemWrapper">
            <p className="select_title">種類の選択</p>
            <p className='select_sub_title'>実験を行いたいですか?システムとして使いたいですか?</p>

            <button className="exp_button" onClick={() => handlePageChange('exp')}>
                <span className="exp_button_text">実験に用いる</span>
            </button>

            <button className='usual_button' onClick={() => handlePageChange('usual')}>
                <span className='usual_button_text'>普通に使う</span>
            </button>
        </div>
    </div>
  );
};

export default withRouter(SelectExpOrUsual);
