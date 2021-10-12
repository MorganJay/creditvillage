import React from 'react';
import {
  HeadingOne,
  InputField,
  Paragraph,
  SideWrapper,
  Wrapper,
} from 'styled';

import { CreditButton } from 'components/buttons/Button';

const ForgotPassword = ({ history, email }) => {
  const handleSubmit = e => {
    e.preventDefault();
    console.log('submitting', e);
    history.replace('/auth/resetpassword');
  };
  const forgotPassword = () => {
    history.replace('/auth/resetpassword');
  };
  return (
    <Wrapper
      className='process'
      style={{ display: 'flex', alignItems: 'flex-start', paddingTop: '8rem' }}
    >
      <SideWrapper className='start'>
        <HeadingOne className='alternative'>Forgot Password?</HeadingOne>
        <Paragraph>
          Don’t worry, it happens. Please enter the email address associated
          with your account
        </Paragraph>

        <Paragraph></Paragraph>
      </SideWrapper>
      <Wrapper
        style={{
          width: 'calc(100% - 520px)',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Wrapper
          style={{
            textAlign: 'center',
            padding: '5rem 2rem',
            boxShadow: '6px 6px 15px 0px #53768933',
            borderRadius: '10px',
          }}
          className='process-content'
        >
          <form
            autoComplete='off'
            onSubmit={handleSubmit}
            style={{ width: '440px' }}
          >
            <InputField type='text' placeholder='Email' name='email' required />
            <CreditButton onClick={forgotPassword}>Submit</CreditButton>
          </form>
        </Wrapper>
      </Wrapper>
    </Wrapper>
  );
};

export default ForgotPassword;
