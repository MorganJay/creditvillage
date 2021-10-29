import React from "react";
import styled from "styled-components";
import { Switch, Route } from "react-router-dom";

// import withDashboardView from "../../hoc/withDashboard";
import ProfileScreen from "./../../components/profile/ProfileScreen";
import NewUser from "./../../components/profile/NewUser";

const Profile = () => {
  return (
    <Wrapper>
      <Switch>
        {/* <Redirect exact from="/profile" to="/profile" /> */}
        <Route path="/profile/new" component={NewUser} />
        <Route path="/profile" component={ProfileScreen} />
      </Switch>
    </Wrapper>
  );
};

export default Profile;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
`;
