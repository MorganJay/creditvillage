import { Route, Switch } from 'react-router-dom';

import Home from './views/Home';
import Auth from './views/auth/Auth';
import Profile from './views/dashboard/Profile';

import './App.css';

function App() {
  return (
    <div className='App'>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/auth' component={Auth} />
        <Route exact path='/profile' component={Profile} />
      </Switch>
    </div>
  );
}

export default App;
