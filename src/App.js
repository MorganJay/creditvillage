import { Route, Switch, Redirect } from 'react-router-dom';

import Home from './views/auth/Home';

import './App.css';

function App() {
  return (
    <div className='App'>
      <Switch>
        <Route exact path='/' component={Home} />
      </Switch>
    </div>
  );
}

export default App;
