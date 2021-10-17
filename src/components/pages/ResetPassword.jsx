import React, { useState } from "react";
import { FormBox, InputField, SubmitButton, Wrapper } from "styled";

import SideWrap from "components/side/SideWrap";
import MainWrap from "components/side/MainWrap";
import SecurityIcon from "../../assets/images/security.png";
import Modal from "components/modal";

const ResetPassword = ({ history, email }) => {
  const [show, setShow] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submitting", e);
    setShow(true);
  };

  const sideContent = {
    heading: " Reset Password?",
    text: "Don’t worry, it happens. Please enter the email address associated with your account",
  };
  const modalContent = {
    icon: SecurityIcon,
    heading: "Password changed successfully",
    text: "Password changed successfully ",
    path: "/auth/login",
    buttonText: "Login",
    showButton: true,
  };
  return (
    <Wrapper className="process">
      {show && (
        <Modal
          {...modalContent}
          onClick={() => {
            history.replace("/auth/login");
          }}
        />
      )}

      <SideWrap {...sideContent} />

      <MainWrap {...sideContent}>
        <FormBox autoComplete="off" onSubmit={handleSubmit} className="sub">
          <InputField
            type="password"
            name="password"
            placeholder="New Password"
          />
          <InputField
            type="password"
            name="confirm_password"
            placeholder="Confirm password"
          />
          <SubmitButton onClick={handleSubmit}>Submit</SubmitButton>
        </FormBox>
      </MainWrap>
    </Wrapper>
  );
};

export default ResetPassword;
