import React from 'react';
import styled from 'styled-components';
import { Switch, Redirect, Route } from 'react-router-dom';

import AccountVerified from 'components/modals/AccountVerified';
import CreateAccount from 'components/pages/CreateAccount';
import VerifyEmail from 'components/pages/VerifyEmail';
// import SignUp from 'components/modals/SignUp';
import Login from 'components/pages/Login';
import ForgotPassword from 'components/pages/ForgotPassword';
import ResetPassword from 'components/pages/ResetPassword';
import NewUser from 'components/pages/NewUser';

const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

const Auth = () => {
  return (
    <Container>
      <Switch>
        <Redirect exact from='/auth' to='/auth/login' />
        <Route path='/auth/login' component={Login} />
        <Route path='/auth/signup' component={CreateAccount} />
        <Route path='/auth/verifyemail' component={VerifyEmail} />
        <Route path='/auth/verified' component={AccountVerified} />
        <Route path='/auth/forgotpassword' component={ForgotPassword} />
        <Route path='/auth/resetpassword' component={ResetPassword} />
        <Route path='/auth/newuser' component={NewUser} />
      </Switch>
    </Container>
  );
};

export default Auth;
