import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import GlassModal from "./GlassModal";
import CreditButton from "../buttons/Button";
import CustomInput from "./../inputs/CustomInput";
import PasswordInput from "../inputs/PasswordInput";
import usePasswordToggle from "hooks/usePasswordToggle";

const SignUp = ({ history }) => {
  const [Type, Toggle] = usePasswordToggle();
  const [showIcon, setShowIcon] = useState(false);

  const handleSubmit = e => {
    e.preventDefault();
    console.log("submitting");
    history.replace("/auth/verifyemail");
  };

  const handlePasswordChange = event => {
    const {
      target: { value },
    } = event;
    const hideIcon = value.length < 1 ? false : true;
    setShowIcon(hideIcon);
  };

  return (
    <GlassModal>
      <h1 style={{ margin: "24px 16px" }}>Register an Account</h1>
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
    </GlassModal>
  );
};

export default SignUp;

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
