import React from 'react';
import NavBar from './components/nav-bar/nav-bar.component.jsx';
import Home from './pages/home/home.page.jsx';
import Manage from './pages/manage/manage.page.jsx';
import Logs from './pages/log/log.page.jsx';
import SignIn from './pages/sign-in/sign-in.page.jsx';
import {Switch, Route} from 'react-router-dom';

function App() {
  const [plants, setPlantsData] = React.useState([]);
  const [needsRefresh, setNeedsRefresh] = React.useState(true);
  const [user, setUser] = React.useState('ekonine');

  const handlePlantRequest = () => {
    fetch(`http://localhost:3001/plants/${user}`, {
      method: 'get'
    }) 
      .then(promise => promise.json())
      .then(plants => {
        setNeedsRefresh(false);
        setPlantsData(plants);
        console.log('retrieved data')
      })
  }

  React.useEffect(() => {
    if (needsRefresh) {
      handlePlantRequest();
    }
    console.log('used effect', needsRefresh)
  })

  return (
    <div className="App">
      <NavBar user={user}/>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path={`/manage/`}> 
          <Manage plants={plants} user={user}/>
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
