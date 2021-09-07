import React from "react";
import styled from "styled-components";

import Chart from "./../charts/Chart";
import ButtonLink from "components/buttons/ButtonLink";

import { ReactComponent as Waving } from "assets/images/waving-hand-sign.svg";
import { ReactComponent as SelectPeriod } from "assets/images/select-month.svg";
import Score from "assets/images/creditscore.png";

const chartData = {
  labels: ["March", "April", "May", "June", "July"],
  datasets: [
    {
      backgroundColor: "rgba(178, 202, 214, 1)",
      borderColor: "transparent",
      borderWidth: 2,
      data: [200, 500, 500, 490, 750],
      borderRadius: "10px",
    },
  ],
};

const UserDash = () => {
  return (
    <Container>
      <GreetingText>
        <span>
          <Waving />
        </span>{" "}
        Hey Mary!
      </GreetingText>
      <CreditScoreDisplay>
        <h3 className="ml-4">
          Your <br /> Credit Score
        </h3>
        <div className="position-relative h-100">
          <img
            src={Score}
            alt="Credit Score"
            className="position-absolute"
            height="250"
            width="250"
          />
          <ButtonLink path="/linkaccount">Link another account</ButtonLink>
        </div>
      </CreditScoreDisplay>
      <ChartDisplay>
        <Controls>
          Last 6 months{" "}
          <span className="ml-3">
            <SelectPeriod />
          </span>
        </Controls>
        <Chart className="px-5" data={chartData} />
        <p className="my-2">Summary</p>
      </ChartDisplay>
    </Container>
  );
};

export default UserDash;

const Container = styled.div`
  width: 65%;
  height: 100%;
`;

const GreetingText = styled.h4`
  color: #5d5fef;
  font-weight: bold;
  line-height: 28px;
  margin-left: 3rem;
  margin-top: 1rem;
  svg {
    vertical-align: inherit;
  }
`;

const CreditScoreDisplay = styled.div`
  position: relative;
  padding: 2rem 4rem;
  display: flex;
  justify-content: space-between;

  h3 {
    font-size: 30px;
    font-weight: 700;
  }

  img {
    top: -100px;
    right: 100px;
  }

  button {
    top: 80px;
    right: -60px;
    position: absolute;
    width: 220px;
    white-space: nowrap;
  }
`;

const ChartDisplay = styled.div`
  position: relative;
  width: 80%;
  margin: 0 auto;
  /* padding: 2rem 4rem; */
  border: 1px solid #f2f2f2;
  border-radius: 40px;
  margin-top: 3rem;
  max-height: 332px;
  height: 200px;

  p {
    font-weight: normal;
    font-size: 30px;
    line-height: 37px;
    font-family: "Montserrat";
    position: absolute;
    left: 40%;
    bottom: -50px;
  }
`;

const Controls = styled.div`
  position: absolute;
  top: -60px;
  font-weight: 600;
  font-size: 16px;
  line-height: 20px;
  color: #828282;

  span {
    cursor: pointer;
  }
`;
