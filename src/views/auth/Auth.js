import { useState } from "react";
import { Switch, Redirect, Route } from "react-router-dom";

import SignUp from "components/auth/SignUp";
import VerifyEmail from "components/auth/VerifyEmail";
import Login from "components/auth/Login";
import ForgotPassword from "components/auth/ForgotPassword";
import ResetPassword from "components/auth/ResetPassword";

const Auth = ({ history }) => {
  const [userEmail, setUserEmail] = useState("");
  const setEmail = (email) => setUserEmail(email);

  return (
    <Switch>
      {/* {signin && <Redirect exact from="/auth/login" to="/home" />} */}
      <Redirect exact from="/auth" to="/auth/login" />
      <Route path="/auth/login" render={(props) => <Login {...props} />} />

      <Route
        path="/auth/signup"
        render={(props) => <SignUp {...props} setEmail={setEmail} />}
      />
      <Route
        path="/auth/verifyemail"
        render={(props) => <VerifyEmail {...props} email={userEmail} />}
      />
      <Route path="/auth/forgotpassword" component={ForgotPassword} />
      <Route path="/auth/resetpassword" component={ResetPassword} />
    </Switch>
  );
};

export default Auth;
