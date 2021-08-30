import React, { useState } from "react";
import styled from "styled-components";
import { Route, Switch, useRouteMatch } from "react-router-dom";

import withDashboardView from "hoc/withDashboard";
import NewDash from "views/dashboard/NewDash";

const DashboardHome = ({ setLinkAccountStep }) => {
  // let { path } = "/home";
  let { path } = useRouteMatch();
 
  return (
    <Switch>
      <Route
        exact
        path={path}
        render={props => (
          <Container>
            <h1>Coming soon...</h1>
          </Container>
        )}
      />
      <Route
        exact
        path={`${path}/new`}
        render={props => (
          <NewDash
            {...props}
            setStep={step => setLinkAccountStep(step)}
            activity
          />
        )}
      />
    </Switch>
  );
};

export default withDashboardView(DashboardHome);

export const Container = styled.div`
  width: 65%;
  display: grid;
  place-items: center;
  height: 100%;
`;
