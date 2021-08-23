import React from 'react';
import styled from 'styled-components';

import DashboardHeader from '../components/headers/DashboardHeader';

const withDashboardView = Component => {
  return function withDashboardComponent({ ...props }) {
    return (
      <Container>
        <DashboardHeader />
        <Wrapper>
          <Component {...props} />
        </Wrapper>
      </Container>
    );
  };
};

export default withDashboardView;

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
