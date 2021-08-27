import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import GlassModal from "./GlassModal";
import CreditButton from "../buttons/Button";

import { ReactComponent as Image } from "../../assets/images/accountverficationcircle.svg";

const AccountVerified = () => {
  return (
    <GlassModal>
      <Container>
        <div style={{ width: "229px", height: "230px" }}></div>
        <Image />
        <h1>Account Verified Successfully</h1>
        <Link to="/profile">
          <CreditButton>Proceed</CreditButton>
        </Link>
      </Container>
    </GlassModal>
  );
};

export default AccountVerified;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 70%;
  position: relative;
  h1 {
    -webkit-text-fill-color: white;
    margin-bottom: 1.5rem;
  }

  svg {
    position: absolute;
    top: 25px;
  }
`;
