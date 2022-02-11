
import React from 'react';
import './App.css';
import MainHeader from './MainHeader';

import {
  HashRouter,
  Route,
  // Link,
  Switch
} from "react-router-dom";

import MainView from './MainView';
import UserTweets from './UserTweets';
import Login from './Login';

class App extends React.Component {

  render() {
    return (
      <HashRouter>
        <div className="App">
          <MainHeader/>

          <Switch>
            <Route path="/tweets/:user" component={UserTweets} />
            <Route path="/tweets" component={MainView} />
            <Route path="/login" component={Login} />
          </Switch>
        </div>
      </HashRouter>
    );
  }
}

export default App;