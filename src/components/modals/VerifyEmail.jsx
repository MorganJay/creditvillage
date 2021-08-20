import React, { useState } from 'react';
import styled from 'styled-components';

import GlassModal from './GlassModal';
import CreditButton from '../buttons/Button';
import PinInput from './../inputs/PinInput';

const VerifyEmail = ({ history }) => {
  const [otp, setOtp] = useState('');

  const handleOtpChange = e => {
    setOtp(e);
    console.log(e);
  };

  const verifyEmail = () => {
    if (otp.length !== 6) alert('OTP Incomplete');
    else history.replace('/auth/verified');
  };

  return (
    <GlassModal>
      <h1 style={{ color: 'white', WebkitTextFillColor: 'white' }}>
        Verify your email
      </h1>
      <Container>
        <PinInput
          name='emailOtp'
          value={otp}
          numInputs={6}
          placeholder='______'
          onChange={handleOtpChange}
        />
      </Container>
      <p>Enter 6-digit Pin sent to your email</p>
      <CreditButton
        styles={{ fontSize: '20px', fontWeight: '600' }}
        onClick={verifyEmail}
        inverted>
        Verify Email
      </CreditButton>
      <br />
    </GlassModal>
  );
};

export default VerifyEmail;

const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;
