import React from 'react';
import { Switch, Redirect, Route } from 'react-router-dom';

import AuthHeader from './../../components/headers/AuthHeader';
import SignUp from './../../components/modals/SignUp';
import Login from './../../components/modals/Login';

import '../../assets/css/auth.styles.css'

const Auth = () => {
  return (
    <div className='home'>
      <AuthHeader />
      <div className='auth-container'>
        <Switch>
          <Redirect exact from='/auth' to='/auth/login' />
          <Route path='/auth/login' component={Login} />
          <Route path='/auth/signup' component={SignUp} />
        </Switch>
      </div>
    </div>
  );
};

export default Auth;
