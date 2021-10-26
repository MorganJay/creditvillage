import React from 'react'
import { Route, Switch } from "react-router-dom";

import Home from "views/Home";
import Auth from "views/auth/Auth";
import DashboardHome from "views/dashboard/DashboardHome";
import Profile from "views/dashboard/Profile";
import Result from "views/dashboard/Result";
import LinkAccount from "views/dashboard/LinkAccount";

const MainRoutes = () => {
    return (
        <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/auth" component={Auth} />
        <Route
          path="/home"
          render={(props) => (
            <DashboardHome
            //   setLinkAccountStep={(step) => setLinkAccountStep(step)}
              {...props}
            />
          )}
        />
        <Route path="/profile" component={Profile} />
        <Route
          exact
          path="/result"
          render={(props) => <Result {...props} activity />}
        />
        <Route
          path="/linkaccount"
          render={(props) => (
            <LinkAccount
            //   step={linkAccountStep}
            //   nextStep={nextStep}
            //   prevStep={prevStep}
              {...props}
              activity
            />
          )}
        />
      </Switch>
    )
}

export default MainRoutes;
