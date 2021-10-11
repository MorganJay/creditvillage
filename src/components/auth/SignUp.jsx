import { useState } from "react";
import { Link } from "react-router-dom";
import { Input } from "reactstrap";
import styled from "styled-components";

import CreditButton from "../buttons/Button";
import CustomInput from "../inputs/CustomInput";
import PasswordInput from "../inputs/PasswordInput";
import usePasswordToggle from "hooks/usePasswordToggle";

import Image from "assets/images/create-account-abstract.svg";

const SignUp = ({ history }) => {
  const [Type, Toggle] = usePasswordToggle();
  const [ConfirmType, ConfirmToggle] = usePasswordToggle();
  const [showIcon, setShowIcon] = useState(false);
  const [showConfirmIcon, setShowConfirmIcon] = useState(false);

  const handleSubmit = e => {
    e.preventDefault();
    console.log("submitting", e);
    history.replace("/auth/verifyemail");
  };

  const handlePasswordChange = ({ target }) => {
    const { value, name } = target;
    const hideIcon = value.length < 1 ? false : true;

    name === "password" ? setShowIcon(hideIcon) : setShowConfirmIcon(hideIcon);
  };

  return (
    <Wrapper className="d-flex">
      <Sidebar>
        <h1>Be in charge of your finance, know your credit score</h1>
      </Sidebar>
      <Content className="d-flex justify-content-center align-items-center flex-column">
        <h1>Create an Account!</h1>
        <p>Manage your credit!</p>
        <Form autoComplete="off" onSubmit={handleSubmit}>
          <CustomInput
            type="email"
            name="email"
            placeholder="Email"
            autoComplete="off"
            className="mb-3"
            required
          />
          <PasswordInput
            type={Type}
            name="password"
            placeholder="Password"
            autoComplete="off"
            onChange={handlePasswordChange}
            showIcon={showIcon}
            icon={Toggle}
            className="mb-3"
            required
          />
          <PasswordInput
            type={ConfirmType}
            name="confirm-password"
            placeholder="Confirm password"
            autoComplete="off"
            onChange={handlePasswordChange}
            showIcon={showConfirmIcon}
            icon={ConfirmToggle}
            className="mb-3"
            required
          />
          <PrivacyTerms className=" mb-4 d-flex">
            <Input
              type="checkbox"
              name="terms"
              className="rounded-0 mr-2"
              required
            />
            <p className="m-0">
              I have read and agree to the{" "}
              <a href="/auth/signup">Terms of Use</a> and{" "}
              <a href="/auth/signup">Privacy Policy</a>
            </p>
          </PrivacyTerms>
          <CreditButton
            styles={{
              fontSize: "20px",
              fontWeight: "600",
              borderRadius: "50px",
              maxWidth: "480px",
            }}
            className="w-100 my-1"
            type="submit"
            inverted
          >
            Register
          </CreditButton>
        </Form>
        <p>
          Already have an account?
          <Link to="/auth/login"> Login</Link>
        </p>
      </Content>
    </Wrapper>
  );
};

export default SignUp;

const Wrapper = styled.div`
  height: 800px;
`;

const Sidebar = styled.aside`
  background: var(--bg-primary) url(${Image}) no-repeat scroll 5% 100%;
  border-radius: 0px 50px 50px 0px;
  background-size: contain;
  max-width: 520px;
  max-height: 900px;
  width: 35%;
  padding: 9rem 3rem 0;
  h1 {
    font-style: normal;
    font-weight: 600;
    font-size: clamp(1.4rem, 2vw, 1.5rem);
    line-height: 28px;
    max-width: 283px;
    margin: 0 auto;
    color: var(--darkblue);
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

const Content = styled.main`
  width: 60%;
  text-align: center;
  color: var(--lightblue);

  h1 {
    line-height: 42px;
    font-weight: 600;
  }
  a {
    font-family: "CamptonLight";
    color: var(--darkblue);
    font-weight: 600;
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const Form = styled.form`
  width: 80%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin: 1.5rem;
  gap: 1rem;
  div {
    max-width: 480px;
    margin: 0 auto;
  }
`;

const PrivacyTerms = styled.div`
  p {
    font-size: clamp(1rem, 2vw, 1.13rem);
    white-space: nowrap;
  }
  max-width: 90% !important;
  margin-right: 1% !important;

  input {
    position: relative;
    border: 2px solid var(--lightblue);
    border-radius: 0px;
    background: #fafcfc;
    vertical-align: middle;
    cursor: pointer;
    margin-top: 3px;
    min-width: 24px;
    height: 24px;
    &:focus {
      border-color: var(--lightblue);
      box-shadow: 0 0 0 0.25rem var(--lightblue) / 25%;
    }

    &:checked {
      border-color: var(--lightblue);
      background-color: var(--lightblue);
    }
  }
`;
