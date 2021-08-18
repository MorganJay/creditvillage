import React from 'react';
import { Link } from 'react-router-dom';

import CreditButton from '../buttons/Button';
import Logo from '../../assets/images/Vlogo.svg';

const AuthHeader = () => {
  return (
    <header className='header'>
      <Link to='/'>
        <img src={Logo} alt='Credit Village Logo' />
      </Link>
      <Link to='/auth'>
        <CreditButton>Sign In</CreditButton>
      </Link>
    </header>
  );
};

export default AuthHeader;
