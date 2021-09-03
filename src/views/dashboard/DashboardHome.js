import React from "react";
import styled from "styled-components";
import { Route, Switch } from "react-router-dom";

import withDashboardView from "hoc/withDashboard";
import NewDash from "./NewDash";
import CreditScore from "./CreditScore";
import AccountInfo from "./AccountInfo";

const DashboardHome = ({ setLinkAccountStep, match }) => {
  let { path } = match;

  return (
    <Switch>
      <Route
        exact
        path={`${path}/accountinformation`}
        render={props => <AccountInfo {...props} />}
      />
      <Route
        exact
        path={`${path}/creditscore`}
        render={props => <CreditScore {...props} />}
      />
      <Route
        exact
        path={`${path}/new`}
        render={props => (
          <NewDash {...props} setStep={step => setLinkAccountStep(step)} />
        )}
      />
      <Route
        path={path}
        render={props => (
          <Container>
            <h1>Coming soon...</h1>
          </Container>
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
