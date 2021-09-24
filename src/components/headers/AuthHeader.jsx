import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import ButtonLink, { ListItemLink } from "components/buttons/ButtonLink";

const AuthHeader = () => {
  return (
    <Header>
      <Link to="/">
        <StyledV>V</StyledV>
      </Link>
      <LinkList>
        <LinkItem path="/" active>
          Home
        </LinkItem>
        <LinkItem path="#features">Features</LinkItem>
        <LinkItem path="#how">How it works</LinkItem>
      </LinkList>
      <AuthLinks>
        <Link to="/auth/login">Login</Link>
        <ButtonLink path="/auth/signup">Sign Up</ButtonLink>
      </AuthLinks>
    </Header>
  );
};

export default AuthHeader;

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 2rem 3rem;
  text-align: center;
  align-items: center;
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
`;

const AuthLinks = styled.div`
  display: flex;
  gap: 4rem;
  align-items: center;

  a {
    color: var(--lightblue);
  }

  button {
    border-radius: 20px;
  }
`;

const StyledV = styled.h1`
  margin: 0;
  font-size: 3rem;
  font-weight: 600;
  line-height: 56px;
  font-style: normal;
  color: var(--darkblue);
  font-family: "CamptonBold", sans-serif;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;
