import React from "react";
import { FormBox, InputField, SubmitButton, Wrapper } from "styled";

import SideWrap from "components/side/SideWrap";
import MainWrap from "components/side/MainWrap";

const NewUser = ({ history, email }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submitting", e);
    history.replace("/auth/resetpassword");
  };
  const forgotPassword = () => {
    history.replace("/auth/resetpassword");
  };
  const sideContent = {
    heading: "Welcome to the CreditVillage Family",
    text: "Let’s get to know you",
  };
  return (
    <Wrapper className="process">
      <SideWrap {...sideContent} />
      <MainWrap {...sideContent}>
        <FormBox autoComplete="off" onSubmit={handleSubmit} className="sub">
          <Wrapper style={{ display: "flex", gap: "10px" }}>
            <InputField
              type="text"
              name="first_name"
              placeholder="First name"
            />
            <InputField type="text" name="last_name" placeholder="Last name" />
          </Wrapper>

          <InputField
            type="tel"
            name="phone_number"
            placeholder="Phone number"
          />
          <SubmitButton onClick={forgotPassword}>Submit</SubmitButton>
        </FormBox>
      </MainWrap>
    </Wrapper>
  );
};

export default NewUser;
