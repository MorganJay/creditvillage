import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { isEdge } from "react-device-detect";
import { FormGroup } from "reactstrap";

import GlassModal from "./GlassModal";
import CreditButton from "../buttons/Button";
import CustomInput from "./../inputs/CustomInput";
import PasswordInput from "../inputs/PasswordInput";
import usePasswordToggle from "./../../hooks/usePasswordToggle";

const LogIn = ({ history }) => {
  const [Type, ToggleIcon] = usePasswordToggle();
  const [showIcon, setShowIcon] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submitting");
    history.replace("/home");
  };

  const handlePasswordChange = (event) => {
    const {
      target: { value },
    } = event;
    const isEmpty = value.length < 1 ? true : false;
    setShowIcon(isEmpty);
  };

  return (
    <GlassModal>
      <h1>Login</h1>
      <LogInForm autoComplete="off" onSubmit={handleSubmit}>
        <CustomInput
          type="email"
          name="email"
          placeholder="Email"
          autoComplete="off"
          required
        />
        <PasswordInputContainer>
          <PasswordInput
            type={Type}
            name="password"
            placeholder="Password"
            autoComplete="off"
            onChange={handlePasswordChange}
            required
          />
          {!isEdge && showIcon && (
            <PasswordToggle className="password-toggle-icon">
              {ToggleIcon}
            </PasswordToggle>
          )}
        </PasswordInputContainer>
        <CreditButton
          styles={{
            fontSize: "20px",
            fontWeight: "600",
          }}
          type="submit"
          inverted
        >
          Login
        </CreditButton>
      </LogInForm>
      <p>
        Don't have an account?
        <Link to="/auth/signup">
          {" "}
          <CreditButton
            styles={{
              marginLeft: "10px",
            }}
          >
            Signup
          </CreditButton>
        </Link>
      </p>
    </GlassModal>
  );
};

export default LogIn;

const LogInForm = styled.form`
  width: 80%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin: 1.5rem;
`;

const PasswordInputContainer = styled(FormGroup)`
  position: relative;
  margin-bottom: 3rem;
`;

const PasswordToggle = styled.span`
  position: absolute;
  right: 20px;
  top: 20px;
  cursor: pointer;
`;
