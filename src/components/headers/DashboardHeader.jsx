import React from "react";
// import styled from "styled-components";
import Button from "components/buttons/Button";

import { ReactComponent as Avi } from "assets/images/smallprofilepic.svg";

import auth from "services/authService";

const DashboardHeader = ({ user }) => {
  const handleLogOut = () => {
    auth.logout();
    window.location = "/auth/login";
  };

  return (
    <header className="header px-2 d-flex justify-content-between">
      <input
        type="search"
        name="search"
        id="search"
        placeholder="Search for offers, etc..."
      />
      <div className="d-flex justify-content-between gap-1 align-items-center">
        {/* <img src="" alt="" /> */}
        <Avi />
        {user.fullName}
      </div>
      <Button onClick={handleLogOut}>Sign Out</Button>
    </header>
  );
};

export default DashboardHeader;
