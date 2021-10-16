import { useState } from "react";
import { Switch, Redirect, Route } from "react-router-dom";

import SignUp from "components/auth/SignUp";
import Login from "components/modals/Login";
import VerifyEmail from "components/auth/VerifyEmail";

const Auth = ({ history }) => {
  const [userEmail, setUserEmail] = useState("");

  const setEmail = email => setUserEmail(email);

  const verifyEmail = path => history.replace(path);

  return (
    <Switch>
      <Redirect exact from="/auth" to="/auth/login" />
      <Route path="/auth/login" component={Login} />
      <Route
        path="/auth/signup"
        render={props => <SignUp {...props} setEmail={setEmail} />}
      />
      <Route
        path="/auth/verifyemail"
        render={props => (
          <VerifyEmail
            {...props}
            email={userEmail}
            verifyEmail={() => verifyEmail("/profile/new")}
          />
        )}
      />
    </Switch>
  );
};

export default Auth;
