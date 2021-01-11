import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import '../css/ExpEnvMainPage.css';
import exp_1 from '../photo/exp_img_1.png';
// import exp_2 from '../photo/exp_img_2.png';
// import exp_3 from '../photo/exp_img_3.png';
import exp_4 from '../photo/exp_flow.png';
import exp_5 from '../photo/exp_img_jan.png'
const ExpEnvMainPage = (props) => {
  const [type, setType] = useState('close');
  const handlePageChange = (stage,breakTime,expTime,type) => {
    console.log(type);
    props.history.push({pathname: '/expEnvPage', state: { test: stage ,breakTime: breakTime, expTime:expTime, type_stim:type}})
  };
  return (
    <div className="Container">
        <div className="exp_explain_wrapper">
            <p className="exp_explain_title">実験の説明</p>
            <p className='exp_explain'>実験にご参加いただきありがとうございます</p>
            <p className='exp_explain'>本実験では問題を解決するための創造的なアイデアを考えていただきます。</p>
            <p className='exp_explain'>実験は一時間程度を予定しています。</p>
            <p className='exp_explain'>実験の流れは以下になります</p>
            <figure>
              <img className='exp_image'src={exp_4} alt="スタート画面"></img>
              <figcaption>実験の流れ</figcaption>
            </figure>
            <p className='exp_explain'>今回のそれぞれの画面の説明は以下になります。</p>
            <figure>
              <img className='exp_image'src={exp_1} alt="スタート画面"></img>
              <figcaption>スタート画面</figcaption>
            </figure>
            <p className='exp_explain'>この画面は待機画面です。STARTを押すと、3秒間のカウントの後、テストが開始されます。</p>
            <figure>
              <img className='exp_image' src={exp_5} alt="刺激表示画面"></img>
              <figcaption>問題について考える画面</figcaption>
            </figure>
            <p className='exp_explain'>この画面では問題を考えてもらいます</p>
            <p className='exp_explain'>画面は4つ存在し、一つ目は刺激がない物、二から四つ目では思考を刺激するためにGif画像を提示します。このGIF画像を使ってアイデアを考えてもらいます。全ての画面では15分間考えてもらいます。</p>
            {/* <figure>
              <img className='exp_image' src={exp_3} alt="休憩画面"></img>
              <figcaption>休憩画面</figcaption>
            </figure>
            <p className='exp_explain'>この画面は休憩画面です。10秒間休憩していただきます。前の刺激で出しきれなかったアイデアはここで発言してください</p> */}
            {/* <p className='exp_explain'>問題の回答の例としては、「電池」というものに対して以下のような使い方を考えることができます。</p> */}
            <p className='exp_explain'>以下では刺激を使って考える方法の例を示します。</p>
            <p className='exp_explain'>問題例: 地域のビジネスコミュニティで高級ホテル施設の認知度を高めるにはどうしたらよいか？</p>
            <p className='exp_explain'>この問題に対して仮にテニスのGIF刺激が与えられたとします。その場合、以下のようなステップでアイデアが考えられるかもしれません</p>
            <ol className='exp_list'>
                <li className='exp_list_child'>
                  刺激の持っている属性を考えます
                </li>
                テニスはコートを走ります
                <li className='exp_list_child'>
                  問題の持っている属性を考えます
                </li>
                当ホテルには広々としたラウンジがあるとします
                <li className='exp_list_child'>
                  これらの属性を組み合わせてアイデアを生み出します
                </li>
                ホテルのラウンジを使ってスポーツの大会を開催する
            </ol>
            <p className='exp_explain bold'>この実験では、大学生のためのオンラインショッピングをするためのモバイルアプリの作成に関する創造的なアイデアを募集します。アイデアは、目新しさと有用性の両方である必要があります。</p>
            {/* <p className='exp_explain'>また、今回の評価では<span className='bold'>数と質</span>を見るため、質の良いものを出しながら数もこなすように、バランス良く考えることがベストとなります。</p>
            <p className='exp_explain'>アイデアは口に出し発言してもらいます。なお、記録の関係上、被験者の顔、声、操作画面を記録させていただきます。ご了承ください</p>
            <p className='exp_explain'>実験時間は30秒を一つの試行とし、それを20回繰り返すものを6回行ってもらいます。20回ごとに休憩を5分間行います</p>
            <p className='exp_explain'>まずはテストで一度やってみてください(テストでは時間を短縮しています)</p> */}
            {/* <div className='radio_content'>
              <input id='item-1' type='radio' className='radio-inline__input' name='type' value='close' checked={props.type === 'close'} onChange={() => setType('close')}/>
              <label className='radio-inline__label' htmlFor='item-1'>0</label>
              <input id='item-2' type='radio' className='radio-inline__input' name='type' value='remote' checked={props.type === 'remote'} onChange={() => setType('remote')}/>
              <label className='radio-inline__label' htmlFor='item-2'>1</label>
            </div> */}
            <div className='radio_box'>
            <p className='stimulusType'>グループ番号</p>
              <label class="ECM_RadioInput">
                <input class="ECM_RadioInput-Input" type="radio" name="radio" value='close' checked={type === 'close'} onChange={() => setType('close')}/>
                <span class="ECM_RadioInput-DummyInput"></span><span class="ECM_RadioInput-LabelText">0</span>
              </label>
              <label class="ECM_RadioInput">
                <input class="ECM_RadioInput-Input" type="radio" name="radio" value='remote' checked={type === 'remote'} onChange={() => setType('remote')}/>
                <span class="ECM_RadioInput-DummyInput"></span><span class="ECM_RadioInput-LabelText">1</span>
              </label>
            </div>
            <button className='exp_start_button' onClick={() => handlePageChange(true,5,5,'test')}>
                <span className='exp_start_button_text'>テストをする</span>
            </button>
            <button className='exp_start_button' onClick={() => handlePageChange(false,10,900,type)}>
                <span className='exp_start_button_text'>実験を始める</span>
            </button>
          　
        </div>
        <button  className='' onClick={() => handlePageChange(false,1,5,type)}>デバッグ用</button>
    </div>
  );
};

export default withRouter(ExpEnvMainPage);
