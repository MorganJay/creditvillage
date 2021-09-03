import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Button } from "reactstrap";

import LinkAccountButton from "components/buttons/LinkAccountButton";
import NewDashBox from "components/modals/NewDashBox";
import { ReactComponent as Image } from "assets/images/accountverification.svg";

const NewDash = ({ setStep }) => {
  return (
    <Container>
      <BoxWrapper className="mb-5 d-flex justify-content-between flex-wrap flex-column align-items-center flex-lg-row">
        <NewDashBox
          Image={Image}
          text="Account linked Successfully"
          buttonText="Check account info"
          linkTo="/home/accountinformation"
        />
        <NewDashBox
          setStep={setStep}
          Image={LinkAccountButton}
          text="Link account"
          buttonText="Proceed"
          linkTo="/linkaccount"
        />
      </BoxWrapper>
      <div className="px-4 w-50">
        <p>
          For a more accurate credit score link all your accounts through the
          mono secure portal.
        </p>
        <Link to="/home/creditscore">
          <Button
            color="white"
            style={{
              fontSize: "17px",
            }}
          >
            Check your credit score
          </Button>
        </Link>
      </div>
    </Container>
  );
};

export default NewDash;

const Container = styled.div`
  width: 65%;
  height: 100%;
  padding: 0 4rem;
  p {
    font-size: 20px;
  }
  button {
    text-transform: none;
    font-family: "MontserratBold", san-serif;
  }
`;

const BoxWrapper = styled.div`
  gap: 1rem;
  margin: 0 auto;
`;
