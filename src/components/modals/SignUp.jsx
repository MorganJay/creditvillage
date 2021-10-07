import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import CreditButton from "../buttons/Button";
import CustomInput from "./../inputs/CustomInput";
import PasswordInput from "../inputs/PasswordInput";
import usePasswordToggle from "hooks/usePasswordToggle";

import Image from "assets/images/create-account-abstract.svg";

const SignUp = ({ history }) => {
  const [Type, Toggle] = usePasswordToggle();
  const [showIcon, setShowIcon] = useState(false);

  const handleSubmit = e => {
    e.preventDefault();
    console.log("submitting");
    history.replace("/auth/verifyemail");
  };

  const handlePasswordChange = ({ target }) => {
    const { value } = target;
    const hideIcon = value.length < 1 ? false : true;
    setShowIcon(hideIcon);
  };

  return (
    <Wrapper className="d-flex h-100">
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
            required
          />
          <Password
            type={Type}
            name="password"
            placeholder="Password"
            autoComplete="off"
            onChange={handlePasswordChange}
            showIcon={showIcon}
            icon={Toggle}
            required
          />
          <CreditButton
            styles={{
              fontSize: "20px",
              fontWeight: "600",
            }}
            type="submit"
            inverted
          >
            Register
          </CreditButton>
        </Form>
        <p>
          Already have an account?
          <Link to="/auth/login"> Log In</Link>
        </p>
      </Content>
    </Wrapper>
  );
};

export default SignUp;

const Wrapper = styled.div`
  height: 900px;
`;

const Sidebar = styled.aside`
  background: var(--bg-primary) url(${Image}) no-repeat fixed 0% 380%;
  border-radius: 0px 50px 50px 0px;
  background-size: contain;
  max-width: 520px;
  max-height: 900px;
  background-attachment: fixed;
  width: 40%;
  height: 100%;
  padding: 6rem;
  padding-top: 9rem;
  h1 {
    font-style: normal;
    font-weight: 600;
    font-size: clamp(1.5rem, 2vw, 2rem);
    line-height: 28px;
    max-width: 283px;
    color: var(--darkblue);
  }
`;

const Content = styled.main`
  width: 60%;
  text-align: center;
`;

export const Form = styled.form`
  width: 80%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin: 1.5rem;
`;

export const Password = styled(PasswordInput)`
  color: var(--darkblue);
  padding: 15px 20px;
  background: linear-gradient(
    275.85deg,
    #d9e8ef -22.37%,
    rgba(217, 232, 239, 0) 124.27%
  ) !important;
  box-shadow: inset 0px 4px 10px rgba(221, 221, 221, 0.12);
  border-radius: 4px;
  border: none;
  outline: none;
  text-shadow: 0px 4px 10px rgba(78, 101, 128, 0.12);
  font-family: "Montserrat", san-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 24px;
  width: 100%;
  color: var(--darkblue) !important;
  &::placeholder {
    color: var(--darkblue);
    opacity: 1;
  }

  &::-ms-input-placeholder {
    color: var(--darkblue);
  }
`;
