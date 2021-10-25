import { useState } from "react";
import { toast } from "react-toastify";
import auth from "services/authService";
import http from "services/httpService";

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
} from "components/styled";

import LoginImage from "../../assets/images/createimage.png";

const sideContent = {
  heading: " Welcome back, Pick up where you left off with your finances",
  hasImage: true,
  createImage: LoginImage,
};

const Login = () => {
  // const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((data) => ({ ...data, [name]: value }));
  };

  const apiError = (status, data) => status === "error" || !data.token;

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data: responseData } = await auth.login(
        formData.email,
        formData.password
      );
      const { status, message, data } = responseData;
      if (apiError(status, data)) {
        toast.error(message);
        setFormData({ email: "", password: "" });
      } else {
        auth.loginWithJwt(data.token);
        toast.success(message);
        window.location = "/home";
      }
    } catch (error) {
      if (http.expectedError(error, 400)) {
        const { Email, Password } = error.response.data.errors;
        const message = Email ? Email[0] : Password[0];
        toast.error(message);
        // setLoading(false);
      }

      // setLoading(false);
    }
  };

  return (
    <Wrapper className="process">
      <SideWrap {...sideContent} />
      <MainWrap {...sideContent}>
        <HeadingOne>Jump right back in!</HeadingOne>
        <Paragraph>Keep track of your credits</Paragraph>

        <FormBox onSubmit={handleSubmit}>
          <InputField
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
            required
          />
          <InputField
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Enter your password"
            // pattern="^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-`~]).{8,}$"
            required
          />
          <StyledLink to="/auth/forgotpassword" className="blue">
            Forgot Password?
          </StyledLink>
          <SubmitButton>Sign in</SubmitButton>
          <LabelText>
            Don’t have an account?
            <StyledLink to="/auth/signup" className="blue">
              Create Account
            </StyledLink>
          </LabelText>
        </FormBox>
      </MainWrap>
    </Wrapper>
  );
};

export default Login;
