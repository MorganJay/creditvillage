import { useEffect, useCallback } from "react";
import { Route, Switch } from "react-router-dom";
import styled from "styled-components";
import { toast } from "react-toastify";

import Loading from "components/dash/Loading";
import UserDash from "components/dash/UserDash";
// import CreditScore from "./CreditScore";
// import AccountInfo from "./AccountInfo";
import Sidebar from "./../../components/dash/Sidebar";
import DashboardHeader from "./../../components/headers/DashboardHeader";

import auth from "services/authService";
import userService from "services/userService";
import { useUserContext } from "hooks";

const DashboardHome = ({ match, history }) => {
  let { path } = match;
  const userLoggedIn = auth.currentUser;
  const { isFirstTimeUser, user, updateUserInfo, enableFirstTimeUser } =
    useUserContext();
  // const [loading, setLoading] = useState(true);

  const fetchUserDetails = useCallback(async () => {
    if (!userLoggedIn || user) {
      // setLoading(false);
      return null;
    }
    try {
      const { data } = await userService.getUserInfo();
      if (!data) toast.error("Error fetching user data");

      updateUserInfo(data);
      // setLoading(false);
    } catch (error) {
      toast.error(error);
    }
  }, [updateUserInfo, userLoggedIn, user]);

  const redirectUser = useCallback(async () => {
    if (!user.firstName) {
      enableFirstTimeUser();
      history.replace("/profile/new");
    }
  }, [user, enableFirstTimeUser, history]);

  useEffect(() => {
    // fetchUserDetails();
    // user && redirectUser();
  }, [fetchUserDetails, redirectUser, user]);

  // if (!userLoggedIn) return <Redirect to="/auth/login" />;

  // if (loading) return <Loading  />;

  return (
    <DashContainer className="d-flex">
      <Sidebar name={user?.firstName} />
      <MainContent>
        <DashboardHeader user={user} />
        <Switch>
          <Route
            exact
            path={`${path}/contactus`}
            render={(props) => <Loading />}
          />
          <Route exact path={`${path}/share`} render={(props) => <Loading />} />
          <Route
            exact
            path={`${path}/settings`}
            render={(props) => <Loading />}
          />
          <Route
            exact
            path={`${path}/activity`}
            render={(props) => <Loading />}
          />
          <Route
            exact
            path={`${path}/linkaccounts`}
            render={(props) => <Loading />}
          />
          <Route
            exact
            path={`${path}/report`}
            render={(props) => <Loading />}
          />
          <Route
            exact
            path={path}
            render={(props) => (
              <UserDash user={user} firstTimer={isFirstTimeUser} {...props} />
            )}
          />
        </Switch>
      </MainContent>
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
  /* width: 100%; */
  height: auto;
  position: relative;
  overflow-x: hidden;
  main {
    width: 80%;
  }
`;

const MainContent = styled.main`
  padding: 1rem 0;
`;
