import React from 'react';
import styled from 'styled-components';
import { Switch, Route } from 'react-router-dom';

import DashboardHeader from '../../components/headers/DashboardHeader';
import DashboardHome from './../../components/modals/DashboardHome';
import Profile from './../../components/modals/Profile';
import Result from './../../components/modals/Result';

const Dashboard = () => {
  return (
    <Container>
      <DashboardHeader />
      <Wrapper>
        <Switch>
          <Route to='/home' component={DashboardHome} />
          <Route to='/profile' component={Profile} />
          <Route to='/result' component={Result} />
        </Switch>
      </Wrapper>
    </Container>
  );
};

export default Dashboard;

const Container = styled.div`
  background-color: var(--whiteblue);
  width: 100%;
  display: flex;
  flex-direction: column;
  height: 100vh;
  padding: 1rem;
`;

const Wrapper = styled.div`
  width: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  height: 100%;
`;
