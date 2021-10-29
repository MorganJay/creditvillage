import { useState } from "react";
import { Switch, Redirect, Route } from "react-router-dom";

import SignUp from "components/auth/SignUp";
import VerifyEmail from "components/auth/VerifyEmail";
import Login from "components/auth/Login";
import ForgotPassword from "components/auth/ForgotPassword";
import ResetPassword from "components/auth/ResetPassword";

const Auth = ({ history }) => {
  const [userEmail, setUserEmail] = useState("");
  const [signin, setSignin] = useState(false);
  const setEmail = (email) => setUserEmail(email);

  const verifyEmail = (path) => history.replace(path);

  return (
    <Switch>
      {signin && <Redirect exact from="/auth/login" to="/home" />}
      <Redirect exact from="/auth" to="/auth/login" />
      <Route
        path="/auth/login"
        render={(props) => (
          <Login
            handleSigninSubmit={(e) => {
              e.preventDefault();
              console.log("submitted", e);
              setSignin(true);
            }}
          />
        )}
      />

      <Route
        path="/auth/signup"
        render={(props) => <SignUp {...props} setEmail={setEmail} />}
      />
      <Route
        path="/auth/verifyemail"
        render={(props) => (
          <VerifyEmail
            {...props}
            email={userEmail}
            verifyEmail={() => verifyEmail("/profile/new")}
          />
        )}
      />
      <Route path="/auth/forgotpassword" component={ForgotPassword} />
      <Route path="/auth/resetpassword" component={ResetPassword} />
    </Switch>
  );
};

export default Auth;
