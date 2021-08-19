import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import GlassModal from './GlassModal';
import CreditButton from '../buttons/Button';
import CustomInput from './../inputs/CustomInput';

const SignUp = () => {
  const handleSubmit = e => {
    e.preventDefault();
    console.log('submitting');
  };

  return (
    <GlassModal>
      <h1>Register an Account</h1>
      <SignUpForm onSubmit={handleSubmit}>
        <CustomInput type='email' name='email' placeholder='Email' required />
        <CustomInput
          name='password'
          placeholder='Password'
          type='password'
          required
        />
        <CreditButton
          styles={{ fontSize: '20px', fontWeight: '600' }}
          type='submit'
          inverted>
          Register
        </CreditButton>
      </SignUpForm>
      <p>
        Already have an account?
        <Link to='/auth/login'> Log In</Link>
      </p>
    </GlassModal>
  );
};

export default SignUp;

const SignUpForm = styled.form`
  width: 70%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin: 1.5rem;
`;
