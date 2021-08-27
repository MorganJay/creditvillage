import React from "react";
import styled from "styled-components";

import DashboardHeader from "../components/headers/DashboardHeader";
import ActivityFeed from "./../components/feed/ActivityFeed";

const withDashboardView = (Component) => {
  return function withDashboardComponent({ ...props }) {
    return (
      <Container>
        <DashboardHeader />
        <Wrapper>
          <Component {...props} />
          {props.activity ? <ActivityFeed>Activity Feed</ActivityFeed> : null}
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
  padding: 0 0 2rem;
  overflow: hidden;
  `;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  /* overflow-y: visible; */
`;
