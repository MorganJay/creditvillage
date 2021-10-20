import { useState } from "react";
import { Route, Switch } from "react-router-dom";
import styled from "styled-components";

import Home from "./views/Home";
import Auth from "./views/auth/Auth";
import DashboardHome from "./views/dashboard/DashboardHome";
import Profile from "./views/dashboard/Profile";

import Result from "./views/dashboard/Result";
import LinkAccount from "./views/dashboard/LinkAccount";
import LogoLink from "components/buttons/LogoLink";

import "./App.css";

function App() {
  const [linkAccountStep, setLinkAccountStep] = useState(0);

  const nextStep = () => setLinkAccountStep(linkAccountStep + 1);

  const prevStep = () => setLinkAccountStep(linkAccountStep - 1);

  return (
    <div className="App">
      <Logo />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/auth" component={Auth} />
        <Route
          path="/home"
          render={props => (
            <DashboardHome
              setLinkAccountStep={step => setLinkAccountStep(step)}
              {...props}
            />
          )}
        />
        <Route path="/profile" component={Profile} />
        <Route
          exact
          path="/result"
          render={props => <Result {...props} activity />}
        />
        <Route
          path="/linkaccount"
          render={props => (
            <LinkAccount
              step={linkAccountStep}
              nextStep={nextStep}
              prevStep={prevStep}
              {...props}
              activity
            />
          )}
        />
      </Switch>
    </div>
  );
}

export default App;

const Logo = styled(LogoLink)`
  left: 36px;
  top: 17px;
  width: 51px;
  z-index: 100;
  position: absolute;
`;
