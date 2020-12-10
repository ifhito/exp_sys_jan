import React from 'react';
import { useState, useEffect } from 'react';
import logo from '../logo.svg';
// import '../css/App.css';
import '../css/allStyle.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import IntoIdeaProblem from './IntoIdeaProblem.js';
import ThinkIdeaFree from './ThinkIdeaFree.js';
import ThinkIdeaWithStimulus from './ThinkIdeaWithStimulus.js';
import ExpEnvMainPage from './ExpEnvMainPage.js';
import ExpEnvPage from './ExpEnvPage';
import SelectExpOrUsual from './SelectExpOrUsual.js';
import Finish from './Finish.js';
function App(props) {
  const [problem, setProblem] = useState('');
  const [keyword, setKeyword] = useState('');
  const [type, setType] = useState('word');
  return (
    <Router>
      <Switch>
        <Route
          path="/"
          render={(props) => (
            <SelectExpOrUsual {...props} exact />
          )}
          exact
        />
        <Route
          path='/intoIdeaProblem'
          render={(props) => (
            <IntoIdeaProblem
              setProblem={setProblem}
              setKeyword={setKeyword}
              setType={setType}
              problem={problem}
              keyword={keyword}
              type={type}
            />
          )}
        />
        <Route
          path="/thinkIdeaFree"
          render={(props) => (
            <ThinkIdeaFree problem={problem} keyword={keyword} />
          )}
          exact
        />
        <Route
          path="/thinkIdeaWithStimulus"
          render={(props) => (
            <ThinkIdeaWithStimulus problem={problem} keyword={keyword} type={type}/>
          )}
          exact
        />
        <Route
          path='/expEnvMainPage'
          render={(props) => (
            <ExpEnvMainPage {...props} />
          )}
        exact />
        <Route
          path='/expEnvPage'
          render={(props) => (
            <ExpEnvPage />
          )}
        exact />
        <Route path="/finish" render={(props) => <Finish />} exact />
      </Switch>
    </Router>
  );
}

export default App;
