import React, { useState } from "react";
import { HeadingOne, Paragraph, SideWrapper, Wrapper } from "styled";

import PinInput from "components/inputs/PinInput";
import { CreditButton } from "components/buttons/Button";

const VerifyEmail = ({ history, email }) => {
  const [otp, setOtp] = useState("");

  const handleOtpChange = (e) => {
    setOtp(e);
    console.log(e);
  };

  const verifyEmail = () => {
    if (otp.length !== 6) alert("OTP Incomplete");
    else history.replace("/auth/verified");
  };
  return (
    <Wrapper
      style={{ display: "flex", alignItems: "flex-start", paddingTop: "8rem" }}
    >
      <SideWrapper className="start">
        <HeadingOne className="alternative">Enter the Code sent to</HeadingOne>
        <Paragraph>{email || "maryagatha@gmail.com"}</Paragraph>
        <Paragraph className="bold" onClick={() => history.goBack()}>
          Wrong email?
        </Paragraph>
        <Paragraph></Paragraph>
      </SideWrapper>
      <Wrapper
        style={{
          width: "calc(100% - 520px)",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Wrapper
          style={{
            width: "fit-content",
            textAlign: "center",
            padding: "5rem 2rem",
            boxShadow: "6px 6px 15px 0px #53768933",
            borderRadius: "10px",
          }}
        >
          <PinInput
            name="emailOtp"
            value={otp}
            numInputs={6}
            placeholder="______"
            onChange={handleOtpChange}
          />
          <Paragraph style={{ padding: "20px 0" }}>
            Enter the 6-digit OTP sent to your email
          </Paragraph>
          <Wrapper
            style={{
              // width: '100%',
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-end",
            }}
          >
            <Paragraph>Didn’t get the OTP? Resend</Paragraph>
            <CreditButton onClick={verifyEmail}>Verify</CreditButton>
          </Wrapper>
        </Wrapper>
      </Wrapper>
    </Wrapper>
  );
};

export default VerifyEmail;
