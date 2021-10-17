import React, { useState } from "react";
import axios from "axios";
import {
  CheckBox,
  FormBox,
  HeadingOne,
  InputField,
  LabelText,
  OutLink,
  Paragraph,
  StyledLink,
  SubmitButton,
  Wrapper,
} from "styled";
import CreateImage from "../../assets/images/signinimage.png";
import SideWrap from "components/side/SideWrap";
import MainWrap from "components/side/MainWrap";
import Modal from "components/modal";
import { Button } from "@material-ui/core";

const CreateAccount = ({ history }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirm_password, setConfirmPassword] = useState("");
  const [error, setError] = useState(false);
  const [checked, setChecked] = useState(false);
  const [show, setShow] = useState(false);
  const backend_url = process.env.REACT_APP_BASE_URL;
  const token = process.env.REACT_APP_BEARER_TOKEN;

  console.log(backend_url);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setShow(true);
    setError(false);
    history.replace("/auth/login")

    // try {
    //   const res = await axios.post(
    //     `${backend_url}/v1/register`,

    //     {
    //       username,
    //       password,
    //       confirm_password,
    //       checked,
    //     },
    //     {
    //       headers: {
    //         Authorization: `Bearer ${token}`,
    //         Accept: "application/json",
    //         "Content-Type": "application/json",
    //       },
    //     }
    //   );
    //   res.data && history.replace("/auth/verifyemail");
    //   console.log(res.data);
    // } catch (err) {
    //   setError(true);
    // }
  };
  const sideContent = {
    heading: " Be in charge of your finance, know your credit score",
    hasImage: true,
    createImage: CreateImage,
  };

  return (
    <Wrapper className="process">
      <SideWrap {...sideContent} />

      <MainWrap {...sideContent}>
        <HeadingOne>Create an Account!</HeadingOne>
        <Paragraph>Manage your credit!</Paragraph>
        <FormBox onSubmit={handleSubmit}>
          <InputField
            type="text"
            placeholder="Enter your email"
            required
            onChange={(e) => setUsername(e.target.value)}
          />
          <InputField
            type="password"
            placeholder="Enter your password"
            required
            onChange={(e) => setPassword(e.target.value)}
          />
          <InputField
            type="password"
            placeholder="Confirm your password"
            required
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <CheckBox type="checkbox" onChange={(e) => setChecked(!checked)} />
          <LabelText>
            I have read and agree to the
            <OutLink className="blue" href="/">
              Terms of Use
            </OutLink>
            and
            <OutLink className="blue" href="">
              Privacy Policy
            </OutLink>
          </LabelText>
          <SubmitButton>Register</SubmitButton>
          <LabelText>
            Already have an account?
            <StyledLink to="/auth/login" className="blue">
              Login
            </StyledLink>
          </LabelText>
        </FormBox>
        {error && (
          <span style={{ color: "red", marginTop: "10px" }}>
            Something went wrong!
          </span>
        )}
      </MainWrap>
    </Wrapper>
  );
};

export default CreateAccount;
