import React, { useState } from "react";
import { FormBox, InputField, SubmitButton, Wrapper } from "styled";

import SideWrap from "components/side/SideWrap";
import MainWrap from "components/side/MainWrap";
import Modal from "components/modal";
import ArrowIcon from "../../assets/images/Vector.png";

const ForgotPassword = ({ history, email }) => {
  const [show, setShow] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submitting", e);
    setShow(true);
    setTimeout(() => {
      history.replace("/auth/resetpassword");
    }, 2000);
  };

  const sideContent = {
    heading: "Forgot Password",
    text: "Don’t worry, it happens. Please enter the email address associated with your account",
  };

  const modalContent = {
    icon: ArrowIcon,
    heading: "Recovery  has been initiated",
    text: "Your password recovery instructions is on its way to you. Check your mail ",
  };

  return (
    <Wrapper className="process">
      {show && <Modal {...modalContent} />}
      <SideWrap {...sideContent} />
      <MainWrap>
        <FormBox autoComplete="off" onSubmit={handleSubmit} className="sub">
          <InputField type="email" placeholder="Email" name="email" required />
          <SubmitButton onClick={handleSubmit}>Submit</SubmitButton>
        </FormBox>
      </MainWrap>
    </Wrapper>
  );
};

export default ForgotPassword;
