import React, { useState } from "react";
import { Paragraph, Wrapper } from "styled";

import PinInput from "components/inputs/PinInput";
import { CreditButton } from "components/buttons/Button";
import SideWrap from "components/side/SideWrap";
import MainWrap from "components/side/MainWrap";
import Modal from "components/modals";
import UserIcon from "../../assets/images/user.png";

const VerifyEmail = ({ history, email }) => {
  const [show, setShow] = useState(false);
  const [otp, setOtp] = useState("");

  const handleOtpChange = (e) => {
    setOtp(e);
    console.log(e);
  };

  const verifyEmail = () => {
    if (otp.length !== 6) {
      alert("OTP Incomplete");
    } else {
      setShow(true);
    }
  };

  const sideContent = {
    heading: " Enter the Code sent to",
    text: "Don’t worry, it happens. Please enter the email address associated with your account",
  };
  const modalContent = {
    icon: UserIcon,
    heading: "Yaaay!!!",
    subheading: "Account successfully verified ",
    path: "/home",
    buttonText: "Proceed",
    showButton: true,
  };
  return (
    <Wrapper className="process">
      {show && <Modal {...modalContent} onClick={() => setShow(false)} />}

      <SideWrap {...sideContent}>
        <Paragraph>{email || "maryagatha@gmail.com"}</Paragraph>
        <Paragraph className="bold" onClick={() => history.goBack()}>
          Wrong email?
        </Paragraph>
      </SideWrap>
      <MainWrap>
        <Wrapper className="pinWrapper">
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
      </MainWrap>
    </Wrapper>
  );
};

export default VerifyEmail;
