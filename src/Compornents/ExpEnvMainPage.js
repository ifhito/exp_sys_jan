import React from 'react';
import { withRouter } from 'react-router-dom';
import '../css/ExpEnvMainPage.css';
import exp_1 from '../photo/exp_img_1.png';
import exp_2 from '../photo/exp_img_2.png';
import exp_3 from '../photo/exp_img_3.png';
const ExpEnvMainPage = (props) => {
  const handlePageChange = (stage) => {
    props.history.push({pathname: '/expEnvPage', state: { test: stage }})
  };
  return (
    <div className="Container">
        <div className="exp_explain_wrapper">
            <p className="exp_explain_title">実験の説明</p>
            <p className='exp_explain'>実験にご参加いただきありがとうございます</p>
            <p className='exp_explain'>本実験ではアイデアを考えてもらうことを目的としています</p>
            <p className='exp_explain'>実験では以下のような画面を見ながらアイデアを考えてもらいます</p>
            <p className='exp_explain'>それぞれの画面の説明は以下になります。</p>
            <figure>
              <img className='exp_image'src={exp_1} alt="スタート画面"></img>
              <figcaption>スタート画面</figcaption>
            </figure>
            <figure>
              <img className='exp_image' src={exp_2} alt="刺激表示画面"></img>
              <figcaption>刺激表示画面</figcaption>
            </figure>
            <figure>
              <img className='exp_image' src={exp_3} alt="休憩画面"></img>
              <figcaption>刺激表示画面</figcaption>
            </figure>
            <p className='exp_explain'>上記の問題では基本的に簡単な「物体」の言葉が表示されます。実験では「物体」について「新しい使い方」を考えていただきます。</p>
            <p className='exp_explain'>例としては、「電池」というものに対して以下のような使い方を考えることができます。</p>
            <ol className='exp_list'>
                <li className='exp_list_child'>
                  転がして遊ぶ
                </li>
                <li className='exp_list_child'>
                  いっぱい集めて袋の中に入れて人を殴る道具にする
                </li>
            </ol>
            <p className='exp_explain bold'>実験では、なるべく創造的なアイデアを出してください。本当に思いつかない場合は上記のようなくだらないアイデアでも一向に構いません。また、実現の可能性や倫理観などは気にせず、自由に考えてください</p>
            <p className='exp_explain'>また、今回の評価では<span className='bold'>数と質</span>を見るため、バランス良く考えることがベストとなります。</p>
            <p className='exp_explain'>実験時間は30秒を一つの試行とし、それを20回繰り返すものを10回行ってもらいます。20回ごとに休憩を5分間行います</p>
            <p className='exp_explain'>まずはテストで一度やってみてください(テストでは時間を短縮しています)</p>
            <button className='exp_start_button' onClick={() => handlePageChange(true)}>
                <span className='exp_start_button_text'>テストをする</span>
            </button>
            <button className='exp_start_button' onClick={() => handlePageChange(false)}>
                <span className='exp_start_button_text'>実験を始める</span>
            </button>
        </div>
    </div>
  );
};

export default withRouter(ExpEnvMainPage);
