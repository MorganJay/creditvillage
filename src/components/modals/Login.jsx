import React from 'react';
import { Link } from 'react-router-dom';
import GlassModal from './GlassModal';

const Login = () => {
  return (
    <GlassModal>
      This is the Login
      <Link to='/auth/signup'>
        <button>Sign Up</button>
      </Link>
    </GlassModal>
  );
};

export default Login;
