import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import CreditButton from '../buttons/Button';
import Logo from '../../assets/images/Vlogo.svg';

const AuthHeader = () => {
  return (
    <header className='header'>
      <Link to='/'>
        <StyledLogo src={Logo} alt='Credit Village Logo' />
      </Link>
      <Link to='/auth'>
        <CreditButton>Sign In</CreditButton>
      </Link>
    </header>
  );
};

export default AuthHeader;

const StyledLogo = styled.img`
  margin: 10px auto 0;
  display: inline-block;
  max-width: 100%;
  height: auto;
`;
