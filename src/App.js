import React from 'react';
import NavBar from './components/nav-bar/nav-bar.component.jsx';
import Home from './pages/home/home.page.jsx';
import Manage from './pages/manage/manage.page.jsx';
import Logs from './pages/log/log.page.jsx';
import Detail from './pages/detail/detail.page.jsx';
import SignIn from './pages/sign-in/sign-in.page.jsx';
import {Switch, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/manage"> 
          <Manage />
        </Route>
        <Route path="/logs">
          <Logs />
        </Route>
        <Route path="/signin">
          <SignIn />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
