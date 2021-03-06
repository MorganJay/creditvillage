import React from "react";
import styled from "styled-components";

import IPad from "assets/images/iPad-Pro-11.png";

const InfoContainer = styled.section`
  display: flex;
  padding: 3rem;
  flex-wrap: wrap;
  justify-content: space-around;
  img {
    width: 100%;
    max-width: 600px;
    max-height: 831px;
  }
`;

const TextContainer = styled.div`
  padding: 1rem;
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 0.5rem;

  h2 {
    color: var(--darkblue);
    font-style: normal;
    font-weight: 600;
    font-size: clamp(1.5rem, 4vw, 24px);
    line-height: 28px;
    font-family: "CamptonBold";
  }

  p {
    max-width: 225px;
  }
`;

const InfoSection = () => {
  return (
    <InfoContainer>
      <img src={IPad} alt="iPad Pro 11" />
      <TextContainer>
        <h2 className="text-center text-lg-left">
          One Account for <br /> Everything Credit
        </h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem
          vestibulum, mauris rutrum pellentesque ipsum sed. Vel augue no
        </p>
      </TextContainer>
    </InfoContainer>
  );
};

export default InfoSection;
