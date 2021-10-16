import React, { useState } from "react";
import { Link } from "react-router-dom";

import CreditButton from "../buttons/Button";
import CustomInput from "./../inputs/CustomInput";
import PasswordInput from "./../inputs/PasswordInput";
import usePasswordToggle from "./../../hooks/usePasswordToggle";
import { Form, Password } from "./SignUp";
import Image from "../../assets/images/signinimage.png";
import { Wrapper } from "./SignUp";
import styled from "styled-components";
import { Content } from "./SignUp";

const LogIn = ({ history }) => {
  const [Type, Toggle] = usePasswordToggle();
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
    const hideIcon = value.length < 1 ? false : true;
    setShowIcon(hideIcon);
  };

  return (
    <Wrapper className="d-flex h-100">
      <Sidebar>
        <h1>Welcome back, Pick up where you left off with your finances</h1>
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
    // <GlassModal>
    //   <h1>Login</h1>
    //   <Form onSubmit={handleSubmit}>
    //     <CustomInput type='email' name='email' placeholder='Email' required />
    //     <Password
    //       type={Type}
    //       name='password'
    //       placeholder='Password'
    //       onChange={handlePasswordChange}
    //       icon={ToggleIcon}
    //       showIcon={showIcon}
    //       required
    //     />
    //     <CreditButton
    //       className='mt-2'
    //       styles={{
    //         fontSize: '20px',
    //         fontWeight: '600',
    //       }}
    //       type='submit'
    //       inverted
    //     >
    //       Login
    //     </CreditButton>
    //   </Form>
    //   <p>
    //     Don't have an account?
    //     <Link to='/auth/signup'>
    //       {' '}
    //       <CreditButton
    //         styles={{
    //           marginLeft: '10px',
    //         }}
    //       >
    //         Signup
    //       </CreditButton>
    //     </Link>
    //   </p>
    // </GlassModal>
  );
};

export default LogIn;

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
