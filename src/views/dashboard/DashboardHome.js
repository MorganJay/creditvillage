import React from "react";
import styled from "styled-components";
import { Route, Switch, Redirect } from "react-router-dom";

import NewDash from "./NewDash";
import CreditScore from "./CreditScore";
import AccountInfo from "./AccountInfo";
import UserDash from "components/dash/UserDash";
import Sidebar from "./../../components/dash/Sidebar";
import DashboardHeader from "./../../components/headers/DashboardHeader";

import auth from "services/authService";

const DashboardHome = ({ setLinkAccountStep, match }) => {
  let { path } = match;

  if (!auth.currentUser) return <Redirect to="/auth/login" />;

  return (
    <DashContainer className="d-flex">
      <Sidebar />
      <main>
        <DashboardHeader />
        <Switch>
          <Route
            exact
            path={`${path}/accountinformation`}
            render={(props) => <AccountInfo {...props} />}
          />
          <Route
            exact
            path={`${path}/creditscore`}
            render={(props) => <CreditScore {...props} />}
          />
          <Route
            exact
            path={`${path}/new`}
            render={(props) => (
              <NewDash
                {...props}
                setStep={(step) => setLinkAccountStep(step)}
              />
            )}
          />
          <Route
            exact
            path={path}
            render={(props) => <UserDash {...props} />}
          />
        </Switch>
      </main>
    </DashContainer>
  );
};

export default DashboardHome;

export const Container = styled.div`
  width: 65%;
  display: grid;
  place-items: center;
  height: 100%;
`;

const DashContainer = styled.div`
  width: 100%;
  height: 100vh;
  /* max-height: 900px; */
  main {
    width: 80%;
  }
`;
