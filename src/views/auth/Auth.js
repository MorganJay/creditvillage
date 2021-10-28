import { Switch, Redirect, Route } from "react-router-dom";

import auth from "services/authService";

import SignUp from "components/auth/SignUp";
import VerifyEmail from "components/auth/VerifyEmail";
import Login from "components/auth/Login";
import ForgotPassword from "components/auth/ForgotPassword";
import ResetPassword from "components/auth/ResetPassword";

const Auth = () => {
  if(auth.currentUser) return <Redirect to="/home" />

  return (
    <Switch>
      {/* {signin && <Redirect exact from="/auth/login" to="/home" />} */}
      <Redirect exact from="/auth" to="/auth/login" />
      <Route path="/auth/login" render={(props) => <Login {...props} />} />

      <Route path="/auth/signup" render={(props) => <SignUp {...props} />} />
      <Route
        path="/auth/verifyemail"
        render={(props) => <VerifyEmail {...props} />}
      />
      <Route path="/auth/forgotpassword" component={ForgotPassword} />
      <Route path="/auth/resetpassword" component={ResetPassword} />
    </Switch>
  );
};

export default Auth;
