import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
// import Button from "components/buttons/Button";

import { ReactComponent as Avi } from "assets/images/smallprofilepic.svg";
import { ReactComponent as Dropdown } from "assets/images/MenuVector.svg";

// import auth from "services/authService";

const DashboardHeader = ({ user }) => {
  // const handleLogOut = () => {
  //   auth.logout();
  //   window.location = "/auth/login";
  // };

  return (
    <Header className="header px-3 pr-5 d-flex justify-content-between">
      <Search
        type="text"
        name="search"
        id="search"
        placeholder="Search for offers, etc..."
      />
      <div className="d-flex justify-content-between gap-1 align-items-center">
        {/* <img src="" alt="" /> */}
        <Link
          to="/profile"
          className="d-flex justify-content-between gap-1 align-items-center"
        >
          <Avi />
          {user?.fullName || "Mary Agatha"} <Dropdown className="ml-2"/>
        </Link>
      </div>
      {/* <Button onClick={handleLogOut}>Sign Out</Button> */}
    </Header>
  );
};

export default DashboardHeader;

DashboardHeader.defaultProps = {
  user: {
    fullName: "Mary Agatha",
  },
};

const Header = styled.header`
  border-bottom: 1px solid #537689;
  padding-bottom: 2rem;
  color: var(--darkblue);
  font-weight: 600;
`;

const Search = styled.input`
  border: none;
  color: var(--darkblue);
  padding: 1rem 2rem;
  outline: none;
  width: 50%;
  &::placeholder {
    color: var(--lighterblue);
  }
  &::-ms-input-placeholder {
    color: var(--lighterblue);
  }
`;
