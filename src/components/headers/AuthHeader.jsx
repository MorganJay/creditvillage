import React from "react";
import { Link, withRouter } from "react-router-dom";
import styled from "styled-components";

import ButtonLink, { ListItemLink } from "components/buttons/ButtonLink";

const AuthHeader = ({ location }) => {
  const getActiveHash = hash => location.hash === hash;

  return (
    <Navbar id="nav" className="navbar navbar-expand-md">
      <Link to="/">
        <StyledV>V</StyledV>
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNavDropdown"
        aria-controls="navbarNavDropdown"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavDropdown">
        <LinkList className="navbar-nav m-auto mb-4 align-items-center">
          <LinkItem
            path="#home"
            active={getActiveHash("#home") || getActiveHash("")}
          >
            Home
          </LinkItem>
          <LinkItem path="#features" active={getActiveHash("#features")}>
            Features
          </LinkItem>
          <LinkItem path="#how" active={getActiveHash("#how")}>
            How it works
          </LinkItem>
        </LinkList>
        <AuthLinks className="flex-column flex-md-row">
          <Link to="/auth/login">Login</Link>
          <ButtonLink path="/auth/signup">Signup</ButtonLink>
        </AuthLinks>
      </div>
    </Navbar>
  );
};

export default withRouter(AuthHeader);

const Navbar = styled.nav`
  display: flex;
  justify-content: space-between;
  padding: 2rem 4rem;
  text-align: center;
  align-items: center;
  /* position: sticky; */
  top: 0;
  background-color: white;
  box-shadow: 0 0 10px rgb(0 0 0 / 15%);
`;

export const LinkList = styled.ul`
  display: flex;
  gap: 1.5rem;
`;

export const LinkItem = styled(ListItemLink)`
  font-family: "Campton", san-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 21px;
  color: var(--lighterblue);
  transition: all ease-out 0.2s;
  ${props => props.active && `border-bottom: 2px solid var(--darkblue);`};
  &:hover,
  &:focus {
    color: var(--darkblue);
  }
`;

const AuthLinks = styled.div`
  display: flex;
  gap: 4rem;
  align-items: center;
  justify-content: center;
  a {
    font-family: "Campton", san-serif;
    color: var(--lighterblue);
    font-size: 18px;
    &:hover,
    &:focus {
      color: var(--darkblue);
    }
  }

  button {
    font-size: 1.125rem;
    font-weight: normal;
    font-family: "CamptonLight", san-serif;
    padding: 0.98rem 2.2rem;
    color: #fafcfc;
  }
`;

export const StyledV = styled.h1`
  margin: 0;
  font-size: 3rem;
  font-weight: 600;
  line-height: 56px;
  font-style: normal;
  color: var(--darkblue);
  user-select: none;
  font-family: "CamptonBold", sans-serif;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;
