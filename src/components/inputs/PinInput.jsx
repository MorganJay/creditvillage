import React from 'react';
import styled from 'styled-components';
import OtpInput from 'react-otp-input';

const PinInput = ({ ...props }) => {
  return (
    <>
      <StyledOtpInput
        shouldAutoFocus
        className='otp-input'
        otpType='password'
        autoComplete='off'
        disabled={false}
        secure={true}
        separator={<span> </span>}
        isInputSecure
        {...props}
      />
    </>
  );
};

export default PinInput;

const StyledOtpInput = styled(OtpInput)`
  input {
    width: 3em !important;
    text-align: center;
    color: var(--darkblue);
    border: none;
    margin: 10px 15px;
    height: 54px;
    outline: none;
    padding: 15px 20px;
    background: linear-gradient(
      275.85deg,
      #d9e8ef -22.37%,
      rgba(217, 232, 239, 0) 124.27%
    );
    box-shadow: inset 0px 4px 10px rgba(221, 221, 221, 0.12);
    border-radius: 4px;
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    line-height: 24px;
    text-shadow: 0px 4px 10px rgba(78, 101, 128, 0.12);
    
    &::placeholder {
      color: var(--darkblue);
      opacity: 1;
    }

    &::-ms-reveal,
    &::-ms-clear {
      display: none;
    }

    &::-ms-input-placeholder {
      color: var(--darkblue);
    }
  }
`;
