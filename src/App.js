import { Route, Switch } from 'react-router-dom';

import Home from './views/Home';
import Auth from './views/auth/Auth';
import DashboardHome from './components/modals/DashboardHome';
import Profile from './components/modals/Profile';
import Result from './components/modals/Result';

import './App.css';

function App() {
  return (
    <div className='App'>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/auth' component={Auth} />
        <Route path='/home' component={DashboardHome} />
        <Route path='/profile' component={Profile} />
        <Route path='/result' component={Result} />
      </Switch>
    </div>
  );
}

export default App;
