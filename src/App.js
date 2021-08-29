import { Route, Switch } from "react-router-dom";

import Home from "./views/Home";
import Auth from "./views/auth/Auth";
import DashboardHome from "./views/dashboard/DashboardHome";
import Profile from "./views/dashboard/Profile";
import UpdatedProfile from "./views/dashboard/UpdatedProfile";
import Result from "./views/dashboard/Result";
import LinkAccount from "./views/dashboard/LinkAccount";
import NewDash from "views/dashboard/NewDash";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/auth" component={Auth} />
        <Route
          exact
          path="/home"
          render={props => <DashboardHome {...props} activity />}
        />
        <Route
          exact
          path="/home/new"
          render={props => <NewDash {...props} activity />}
        />
        <Route exact path="/profile" component={Profile} />
        <Route
          exact
          path="/profile/updated"
          render={props => <UpdatedProfile {...props} activity />}
        />
        <Route
          exact
          path="/result"
          render={props => <Result {...props} activity />}
        />
        <Route
          path="/linkaccount/:step"
          render={props => <LinkAccount {...props} activity />}
        />
      </Switch>
    </div>
  );
}

export default App;
