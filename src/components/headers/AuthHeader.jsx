import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import ButtonLink, { ListItemLink } from "components/buttons/ButtonLink";

const AuthHeader = () => {
  return (
    <Header id="nav">
      <Link to="/">
        <StyledV>V</StyledV>
      </Link>
      <LinkList>
        <LinkItem path="#home" active>
          Home
        </LinkItem>
        <LinkItem path="#features">Features</LinkItem>
        <LinkItem path="#how">How it works</LinkItem>
      </LinkList>
      <AuthLinks>
        <Link to="/auth/login">Login</Link>
        <ButtonLink path="/auth/signup">Signup</ButtonLink>
      </AuthLinks>
    </Header>
  );
};

export default AuthHeader;

const Header = styled.nav`
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

const LinkList = styled.ul`
  display: flex;
  gap: 1.5rem;
`;

const LinkItem = styled(ListItemLink)`
  font-family: "Campton", san-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 21px;
  color: var(--lightblue);
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
