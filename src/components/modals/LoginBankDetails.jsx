import React, { useState } from "react";
import styled from "styled-components";
import { BiArrowBack } from "react-icons/bi";
import { MdClose } from "react-icons/md";
import { Button, FormGroup, Input } from "reactstrap";

import PasswordInput from "components/inputs/PasswordInput";
import usePasswordToggle from "hooks/usePasswordToggle";

const LoginBankDetails = ({ bank, handleNextStep, handlePrevStep }) => {
  const [Type, ToggleIcon] = usePasswordToggle();
  const [showIcon, setShowIcon] = useState(false);

  const handleSubmit = e => {
    e.preventDefault();
    handleNextStep();
  };

  const handlePasswordChange = event => {
    const {
      target: { value },
    } = event;
    const hideIcon = value.length < 1 ? false : true;
    setShowIcon(hideIcon);
  };
  return (
    <LoginContainer>
      <LoginHeader className="d-flex justify-content-between flex-column text-muted p-3">
        <div className="d-flex justify-content-between align-items-center px-3">
          <span onClick={handlePrevStep}>
            <BiArrowBack size="1.5rem" />
          </span>
          <img
            src={bank.logo}
            alt="Bank Logo"
            height="50"
            width="50"
            className="rounded-circle"
          />
          <span>
            <MdClose size="1.5rem" />
          </span>
        </div>
        <h6 className="text-center d-block">
          Log In
          <span
            className="ml-2 px-2 py-1 rounded"
            style={{ backgroundColor: "#F4F5F7" }}
          >
            PERSONAL
          </span>
        </h6>
      </LoginHeader>
      <LoginBody>
        <Form onSubmit={handleSubmit}>
          <Button
            color="#FFB53E"
            className="my-3"
            style={{
              backgroundColor: "#ffb53e",
              borderRadius: "13px",
              textTransform: "none",
              color: "white",
            }}
            type="button"
          >
            Click here to fill in sandbox credentials
          </Button>
          <FormGroup>
            <CustomInput
              inputMode="numeric"
              name="userId"
              placeholder="UserID or Account Number"
              required
            />
          </FormGroup>
          <CustomPasswordInput
            type={Type}
            name="password"
            placeholder="Password"
            className="m-0"
            autoComplete="off"
            onChange={handlePasswordChange}
            showIcon={showIcon}
            icon={ToggleIcon}
            required
          />
          <Button
            color="#E55A24"
            className="py-3"
            style={{
              borderRadius: "10px",
              textTransform: "none",
              backgroundColor: "#E55A24",
              color: "white",
            }}
          >
            Log in
          </Button>
        </Form>
      </LoginBody>
    </LoginContainer>
  );
};

export default LoginBankDetails;

const LoginContainer = styled.div`
  margin: 0 auto;
  border-radius: 50px;
  height: 100%;
  width: 60%;
  @media (max-width: 768px) {
    width: 100%;
  }
`;

const LoginHeader = styled.div`
  border-radius: 50px 50px 0 0;
  background: white;
  height: 30%;
  div {
    span {
      cursor: pointer;
    }
  }
  h6 {
    font-family: "EquitanSansBold", san-serif;
    font-size: 1.2rem;
    span {
      font-family: "EquitanSansBold", san-serif;
    }
  }
`;

const LoginBody = styled.div`
  background-color: #fcece5;
  height: 70%;
  border-radius: 0 0 50px 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  button {
    font-family: "EquitanSansBold", san-serif;
    font-size: 1.1rem;
    &:first-child {
      width: 100%;
      &:active {
        background-color: #e0a038 !important;
      }
    }

    &:last-child {
      padding: 3rem 40%;
      &:active {
        background-color: #c04f22 !important;
      }
    }
  }
`;

const Form = styled.form`
  width: 83%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin: 1.5rem;
`;

const CustomInput = styled(Input)`
  padding: 1.7rem 1.7rem;
  border-radius: 13px;
  background-color: #fef8f6;
  border-color: #fef8f6;
  font-family: "EquitanSansRegular", san-serif;
  &::placeholder {
    color: #ababba;
  }
`;

const CustomPasswordInput = styled(PasswordInput)`
  padding: 1.7rem 1.7rem;
  border-radius: 13px;
  border-color: #fef8f6;
  background-color: #fef8f6;
  font-family: "EquitanSansRegular", san-serif;
  &::placeholder {
    color: #ababba;
  }
`;
