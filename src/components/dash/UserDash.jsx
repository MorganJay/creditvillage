import React from "react";
import styled from "styled-components";

import { CardContainer, Card } from "components/homepage/Features";
import Button from "components/buttons/Button";

import Loan from "assets/images/Loangroup.svg";
import Increasing from "assets/images/increasing.svg";
import Process from "assets/images/process.svg";
import Graphs from "assets/images/dashboardgraphs.png";

const cardData = [
  {
    img: Loan,
    heading: "Apply for Loans",
    content: "View available loan options for you",
  },
  {
    img: Increasing,
    heading: "Increase your credit score",
    content: "Check out how",
  },
  {
    img: Process,
    heading: "Know what changed since the last time",
    button: "View full report",
  },
];

// const chartData = {
//   labels: ["March", "April", "May", "June", "July"],
//   datasets: [
//     {
//       backgroundColor: "rgba(178, 202, 214, 1)",
//       borderColor: "rgba(178, 202, 214, 1)",
//       borderWidth: 2,
//       data: [200, 500, 500, 490, 750],
//       borderRadius: 15,
//     },
//   ],
// };

const UserDash = ({ firstTimer, user }) => {
  return (
    <Container>
      {!firstTimer && <h3>Welcome back, {user?.firstName || "Mary"}</h3>}
      <div className="mb-4">
        <img src={Graphs} alt="Speedometer and Graph" />
      </div>
      <FinancesContainer>
        <h2 className="mb-5">Strengthen your Finances</h2>
        <CardCon>
          {cardData.map(({ img, heading, content, button }, index) => (
            <FinanceCard
              key={index}
              className="d-flex flex-column justify-content-center"
            >
              <img src={img} alt={heading} className="mb-4" width="48" />
              <h4 className="mb-3">{heading}</h4>
              <p className="pl-2">{content}</p>
              {button && <Button>{button} </Button>}
            </FinanceCard>
          ))}
        </CardCon>
      </FinancesContainer>
    </Container>
  );
};

export default UserDash;

const Container = styled.div`
  width: 100%;
  /* height: 100%; */
  padding: 2rem;

  h3 {
    font-weight: 500;
    font-size: 24px;
    line-height: 28px;
    color: var(--lightblue);
  }
`;

const FinancesContainer = styled.div`
  h2 {
    font-weight: 600;
    font-size: 36px;
    line-height: 42px;
    color: var(--lightblue);
  }
`;

const CardCon = styled(CardContainer)`
  min-height: 50%;
  height: auto;
  flex-wrap: nowrap;
`;

const FinanceCard = styled(Card)`
  height: 274px;
  padding: 2rem;
  &:nth-child(2) {
    align-self: auto;
  }
`;

// const GreetingText = styled.h4`
//   color: #5d5fef;
//   font-weight: bold;
//   line-height: 28px;
//   margin-left: 3rem;
//   margin-top: 1rem;
//   svg {
//     vertical-align: inherit;
//   }
// `;

// const CreditScoreDisplay = styled.div`
//   position: relative;
//   padding: 2rem 4rem;
//   display: flex;
//   justify-content: space-between;

//   h3 {
//     font-size: 30px;
//     font-weight: 700;
//   }

//   img {
//     top: -100px;
//     right: 100px;
//   }

//   button {
//     top: 80px;
//     right: -60px;
//     position: absolute;
//     width: 220px;
//     white-space: nowrap;
//   }
// `;

// const ChartDisplay = styled.div`
//   position: relative;
//   width: 80%;
//   margin: 0 auto;
//   border: 1px solid #f2f2f2;
//   border-radius: 40px;
//   margin-top: 4rem;
//   max-height: 332px;
//   height: 200px;

//   p {
//     font-weight: normal;
//     font-size: 30px;
//     line-height: 37px;
//     font-family: "Montserrat";
//     position: absolute;
//     left: 40%;
//     bottom: -50px;
//   }
// `;

// const Controls = styled.div`
//   position: absolute;
//   top: -60px;
//   font-weight: 600;
//   font-size: 16px;
//   line-height: 20px;
//   color: #828282;
//   left: 20px;
//   span {
//     cursor: pointer;
//   }
// `;
