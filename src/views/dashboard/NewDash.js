import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Button } from "reactstrap";

import withDashboardView from "hoc/withDashboard";

import { ReactComponent as Image } from "assets/images/accountverification.svg";
import NewDashBox from "./../../components/modals/NewDashBox";

const NewDash = ({ history }) => {
  return (
    <Container>
      <div>
        <NewDashBox
          image={Image}
          text="Account linked successfully"
          buttonText="Check account info"
          linkTo="/home/accountDetails"
        />
        <NewDashBox
          image={Image}
          text="Link account"
          buttonText="Proceed"
          linkTo="/linkaccount/1"
        />
      </div>
      <div>
        For a more accurate credit score link all your accounts through the mono
        secure portal.
        <Link to="/home">
          <Button color="white">Check your credit score</Button>
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
`;
