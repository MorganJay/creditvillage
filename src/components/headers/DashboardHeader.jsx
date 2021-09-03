import React from "react";
import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";

import CreditButton from "../buttons/Button";

import Logo from "../../assets/images/Vlogo.svg";

const DashboardHeader = () => {
  return (
    <header className="header">
      <Link to="/">
        <StyledLogo src={Logo} alt="Credit Village Logo" />
      </Link>
      <StyledNav>
        <ul>
          <li>
            <NavLink to="/home" activeStyle={{ fontWeight: "bold" }}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/profile" activeStyle={{ fontWeight: "bold" }}>
              Profile
            </NavLink>
          </li>
          <li>
            <NavLink to="/result" activeStyle={{ fontWeight: "bold" }}>
              Result
            </NavLink>
          </li>
          <li>
            <Link to="/auth/login">
              <CreditButton>Log out</CreditButton>
            </Link>
          </li>
        </ul>
      </StyledNav>
    </header>
  );
};

export default DashboardHeader;

const StyledLogo = styled.img`
  margin: 10px auto 0;
  display: inline-block;
  max-width: 100%;
  height: auto;
`;

const StyledNav = styled.nav`
  ul {
    list-style: none;
    display: flex;
    align-items: center;
    gap: 1rem;
    margin: 0;
    a {
      color: black;
      font-weight: 500;
    }
  }
`;
