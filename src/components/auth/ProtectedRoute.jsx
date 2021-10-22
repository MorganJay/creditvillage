import { Route, Redirect } from "react-router-dom";

import auth from "services/authService";

const ProtectedRoute = ({ component: Component, render, ...props }) => {
  return (
    <Route
      {...props}
      render={(props) =>
        !auth.currentUser ? (
          <Redirect
            to={{ pathname: "/auth/login", state: { from: props.location } }}
          />
        ) : Component ? (
          <Component {...props} />
        ) : (
          render(props)
        )
      }
    />
  );
};

export default ProtectedRoute;
