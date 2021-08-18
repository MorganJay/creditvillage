import React from 'react';
import { Link } from 'react-router-dom';

import GlassModal from './GlassModal';
import CreditButton from '../buttons/Button';

const SignUp = () => {
  return (
    <GlassModal>
      <h1>Register an Account</h1>
      <CreditButton styles={{ fontSize: '20px', fontWeight: '600' }} inverted>
        Register
      </CreditButton>
      <p>
        Already have an account?
        <Link to='/auth/login'> Log In</Link>
      </p>
    </GlassModal>
  );
};

export default SignUp;
