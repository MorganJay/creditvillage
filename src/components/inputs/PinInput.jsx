import React from "react";
import styled from "styled-components";
import OtpInput from "react-otp-input";

const PinInput = ({ ...props }) => (
  <StyledOtpInput
    shouldAutoFocus
    className="otp-input"
    otpType="password"
    autoComplete="off"
    disabled={false}
    secure={true}
    separator={<span> </span>}
    isInputSecure
    {...props}
  />
);

export default PinInput;

const StyledOtpInput = styled(OtpInput)`
  input {
    width: 4.25em !important;
    height: 4.8em !important;
    text-align: center;
    color: var(--darkblue);
    border: none;
    margin: 10px;
    height: 54px;
    outline: none;
    padding: 15px;
    background: linear-gradient(
      275.85deg,
      #d9e8ef -22.37%,
      rgba(217, 232, 239, 0) 124.27%
    );
    box-shadow: inset 0px 4px 10px rgba(221, 221, 221, 0.12);
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    line-height: 24px;
    text-shadow: 0px 4px 10px rgba(78, 101, 128, 0.12);

    @media (max-width: 500px) {
      width: 2rem !important;
      height: 2rem !important;
    }
  }
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
