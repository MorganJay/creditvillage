import React, { useState } from "react";
import { Link } from "react-router-dom";

import GlassModal from "./GlassModal";
import CreditButton from "../buttons/Button";
import CustomInput from "./../inputs/CustomInput";
import PasswordInput from "./../inputs/PasswordInput";
import usePasswordToggle from "./../../hooks/usePasswordToggle";
import { Form } from "./SignUp";

const LogIn = ({ history }) => {
  const [Type, ToggleIcon] = usePasswordToggle();
  const [showIcon, setShowIcon] = useState(false);

  const handleSubmit = e => {
    e.preventDefault();
    console.log("submitting");
    history.replace("/home");
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
      <h1>Login</h1>
      <Form onSubmit={handleSubmit}>
        <CustomInput type="email" name="email" placeholder="Email" required />
        <PasswordInput
          type={Type}
          name="password"
          placeholder="Password"
          onChange={handlePasswordChange}
          icon={ToggleIcon}
          showIcon={showIcon}
          required
        />
        <CreditButton
          className="mt-2"
          styles={{
            fontSize: "20px",
            fontWeight: "600",
          }}
          type="submit"
          inverted
        >
          Login
        </CreditButton>
      </Form>
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
