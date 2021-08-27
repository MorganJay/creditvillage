import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { FiLock, FiShield, FiEyeOff } from "react-icons/fi";

import withDashboardView from "../../hoc/withDashboard";
import Button from "./../../components/buttons/Button";

const LinkAccount = () => {
  return (
    <Container>
      <AccountContainer>
        <h4>Link your account</h4>
        <CloseIcon>X</CloseIcon>
        <ListContainer>
          <ul>
            <li>
              <h5>
                <span>
                  <FiLock size="1rem" />
                </span>
                Secured
              </h5>
              <p>Your information is encrypted using bank grade security.</p>
            </li>
            <li>
              <h5>
                {/* <span className="material-icons-outlined">visibility_off</span> */}
                <span>
                  <FiEyeOff size="1rem" />
                </span>
                Private
              </h5>
              <p>Your credentials will never be made accessible to Demo.</p>
            </li>
            <li>
              <h5>
                <span>
                  <FiShield size="1rem" />
                </span>
                Protected
              </h5>
              <p>Demo or Mono doesn't have access to move your funds.</p>
            </li>
          </ul>
        </ListContainer>
        <small>
          By clicking the button below you agree to{" "}
          <Link
            to="#"
            style={{ textDecoration: "underline", color: "inherit" }}
          >
            Mono T&C
          </Link>
        </small>
        <Button
          style={{
            background: "white",
            boxShadow: "0px 10px 20px rgba(82, 117, 136, 0.12)",
            color: "black",
            fontSize: "16px",
            fontWeight: "500",
            fontFamily: "MontserratBold",
          }}
        >
          Link Accounts
        </Button>
      </AccountContainer>
    </Container>
  );
};

export default withDashboardView(LinkAccount);

const Container = styled.div`
  width: 65%;
  display: grid;
  place-items: center;
  height: 100%;
  align-content: baseline;
`;

const AccountContainer = styled.div`
  background: #1a1a1a;
  border-radius: 50px;
  padding: 4.5rem 1rem 2rem;
  position: relative;
  color: white;
  text-align: center;
  display: grid;
  place-items: center;
  h4 {
    font: normal normal 25px/30px "Montserrat", san-serif;
    margin-bottom: 2rem;
  }
  small {
    margin: 1rem 0 2rem;
    font-size: 12px;
  }
`;

const CloseIcon = styled.span`
  position: absolute;
  top: 30px;
  right: 50px;
  font-size: 35px;
  line-height: 41px;
  font-weight: normal;
  font-family: "Roboto", sans-serif;
`;

const ListContainer = styled.div`
  width: 80%;
  ul {
    width: 88%;
    li {
      text-align: left;
      h5 {
        margin-left: -2rem;
        font-family: "Montserrat", sans-serif;
        margin-bottom: 0;
        font-size: 0.8rem;
        font-weight: 700;
      }

      span {
        margin-right: 2rem;
      }

      p {
        font-size: 0.8rem;
        margin-left: 0.9rem;
        font-weight: normal;
        line-height: 1.3rem;
        font-family: "Montserrat", sans-serif;
      }
    }
  }
`;
