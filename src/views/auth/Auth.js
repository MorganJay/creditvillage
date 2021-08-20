import React from 'react';
import { Switch, Redirect, Route } from 'react-router-dom';

import AuthHeader from './../../components/headers/AuthHeader';
import SignUp from './../../components/modals/SignUp';
import Login from './../../components/modals/Login';
import VerifyEmail from './../../components/modals/VerifyEmail';

import '../../assets/css/auth.styles.css';
import AccountVerified from '../../components/modals/AccountVerified';

const Auth = () => {
  return (
    <div className='home'>
      <AuthHeader />
      <div className='auth-container'>
        <Switch>
          <Redirect exact from='/auth' to='/auth/login' />
          <Route path='/auth/login' component={Login} />
          <Route path='/auth/signup' component={SignUp} />
          <Route path='/auth/verifyemail' component={VerifyEmail} />
          <Route path='/auth/verified' component={AccountVerified} />
        </Switch>
      </div>
    </div>
  );
};

export default Auth;
