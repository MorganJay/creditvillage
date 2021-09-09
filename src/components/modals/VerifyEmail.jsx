import React, { useState } from "react";
import styled from "styled-components";

import GlassModal from "./GlassModal";
import CreditButton from "../buttons/Button";
import PinInput from "./../inputs/PinInput";

const VerifyEmail = ({ history }) => {
  const [otp, setOtp] = useState("");

  const handleOtpChange = e => {
    setOtp(e);
    console.log(e);
  };

  const verifyEmail = () => {
    if (otp.length !== 6) alert("OTP Incomplete");
    else history.replace("/auth/verified");
  };

  return (
    <GlassModal style={{ padding: "3rem 1rem" }}>
      <h1
        style={{
          color: "white",
          WebkitTextFillColor: "white",
          marginBottom: "3rem",
        }}
      >
        Verify your email
      </h1>
      <Container>
        <PinInput
          name="emailOtp"
          value={otp}
          numInputs={6}
          placeholder="______"
          onChange={handleOtpChange}
        />
      </Container>
      <p>Enter 6-digit Pin sent to your email</p>
      <CreditButton
        styles={{ fontSize: "20px", fontWeight: "600", marginTop: '2rem' }}
        onClick={verifyEmail}
        inverted
      >
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
