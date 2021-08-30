import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Button } from "reactstrap";

import withDashboardView from "hoc/withDashboard";

import LinkAccountButton from "components/buttons/LinkAccountButton";
import { ReactComponent as Image } from "assets/images/accountverification.svg";
import NewDashBox from "components/modals/NewDashBox";

const NewDash = ({ setStep }) => {
  return (
    <Container>
      <BoxWrapper className="mb-5 d-flex justify-content-between flex-wrap">
        <NewDashBox
          Image={Image}
          text="Account linked Successfully"
          buttonText="Check account info"
          linkTo="/home/accountDetails"
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

export default withDashboardView(NewDash);

const Container = styled.div`
  width: 65%;
  height: 100%;
  padding: 0 4rem;

  button {
    text-transform: none;
    font-family: "MontserratBold", san-serif;
  }
`;

const BoxWrapper = styled.div`
  gap: 1rem;
`;
