import React from 'react';
import styled from 'styled-components';
import { Switch, Redirect, Route } from 'react-router-dom';

import VerifyEmail from 'components/modals/VerifyEmail';
import AccountVerified from 'components/modals/AccountVerified';
import CreateAccount from 'views/pages/CreateAccount';
// import SignUp from 'components/modals/SignUp';
import Login from 'views/pages/Login';

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
      </Switch>
    </Container>
  );
};

export default Auth;
