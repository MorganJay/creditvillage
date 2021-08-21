import { Route, Switch } from 'react-router-dom';

import Home from './views/Home';
import Auth from './views/auth/Auth';
import Dashboard from './views/dashboard/Dashboard';

import './App.css';

function App() {
  return (
    <div className='App'>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/auth' component={Auth} />
        <Route path='/home' component={Dashboard} />
        <Route path='/profile' component={Dashboard} />
        <Route path='/result' component={Dashboard} />
      </Switch>
    </div>
  );
}

export default App;
