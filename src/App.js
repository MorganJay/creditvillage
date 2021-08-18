import { Route, Switch } from 'react-router-dom';

import Home from './views/Home';
import Auth from './views/auth/Auth';

import './App.css';

function App() {
  return (
    <div className='App'>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/auth' component={Auth} />
      </Switch>
    </div>
  );
}

export default App;
