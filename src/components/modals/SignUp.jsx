import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { isEdge } from 'react-device-detect';

import GlassModal from './GlassModal';
import CreditButton from '../buttons/Button';
import CustomInput from './../inputs/CustomInput';
import PasswordInput from '../inputs/PasswordInput';
import usePasswordToggle from './../../hooks/usePasswordToggle';
import { FormGroup } from 'reactstrap';

const SignUp = ({ history }) => {
  const [Type, ToggleIcon] = usePasswordToggle();
  const [showIcon, setShowIcon] = useState(false);

  const handleSubmit = e => {
    e.preventDefault();
    console.log('submitting');
    setTimeout(() => {
      history.replace('/auth/verifyemail');
    }, 2000);
  };

  const handlePasswordChange = event => {
    const {
      target: { value }
    } = event;
    const hideIcon = value.length < 1 ? false : true;
    setShowIcon(hideIcon);
  };

  return (
    <GlassModal>
      <h1 style={{ margin: '24px 16px' }}>Register an Account</h1>
      <SignUpForm autoComplete='off' onSubmit={handleSubmit}>
        <CustomInput
          type='email'
          name='email'
          placeholder='Email'
          autoComplete='off'
          required
        />
        {/* TODO: Extract password input */}
        <PasswordInputContainer>
          <PasswordInput
            type={Type}
            name='password'
            placeholder='Password'
            autoComplete='off'
            onChange={handlePasswordChange}
            required
          />
          {!isEdge && showIcon && (
            <PasswordToggle className='password-toggle-icon'>
              {ToggleIcon}
            </PasswordToggle>
          )}
        </PasswordInputContainer>
        <CreditButton
          styles={{
            fontSize: '20px',
            fontWeight: '600',
            marginBottom: '-1rem'
          }}
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
  width: 80%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin: 1.5rem;
`;

const PasswordInputContainer = styled(FormGroup)`
  position: relative;
  margin-bottom: 4rem;
`;

const PasswordToggle = styled.span`
  position: absolute;
  right: 20px;
  top: 20px;
  cursor: pointer;
`;
