import React from "react";
import styled from "styled-components";

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
     {!firstTimer && <h3>Welcome Back {user.firstName}</h3>}
    </Container>
  );
};

export default UserDash;

const Container = styled.div`
  width: 100%;
  min-height: 100%;
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
