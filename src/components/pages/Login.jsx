import MainWrap from "components/side/MainWrap";
import SideWrap from "components/side/SideWrap";
import React from "react";
import {
  FormBox,
  HeadingOne,
  InputField,
  LabelText,
  Paragraph,
  StyledLink,
  SubmitButton,
  Wrapper,
} from "styled";
import LoginImage from "../../assets/images/createimage.png";

const Login = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("logged in", e);
  };
  const sideContent = {
    heading: " Welcome back, Pick up where you left off with your finances",
    hasImage: true,
    createImage: LoginImage,
  };
  return (
    <Wrapper className="process">
      <SideWrap {...sideContent} />
      <MainWrap {...sideContent}>
        <HeadingOne>Jump right back in!</HeadingOne>
        <Paragraph>Keep track of your credits</Paragraph>

        <FormBox onSubmit={handleSubmit}>
          <InputField type="text" placeholder="Enter your email" />
          <InputField type="password" placeholder="Enter your password" />
          <StyledLink to="/auth/forgotpassword" className="blue">
            Forgot Password?
          </StyledLink>
          <SubmitButton>Sign in</SubmitButton>
          <LabelText>
            Don’t have an account?
            <StyledLink to="/auth/signup" className="blue">
              Create Account{" "}
            </StyledLink>
          </LabelText>
        </FormBox>
      </MainWrap>
    </Wrapper>
  );
};

export default Login;
