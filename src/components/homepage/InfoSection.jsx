import React from "react";
import styled from "styled-components";

import IPad from "assets/images/iPad-Pro-11.png";

const InfoContainer = styled.section`
  display: flex;
  padding: 3rem;
  flex-wrap: wrap;
  justify-content: space-around;
  img {
    max-width: 600px;
    width: 100%;
    height: auto;
    max-height: 831px;
    /* min-width: 60%; */
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
    font-size: 24px;
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
        <h2>
          One Account for <br /> Everything Credit
        </h2>
        <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem vestibulum, mauris rutrum pellentesque ipsum sed. Vel augue no
        </p>
      </TextContainer>
    </InfoContainer>
  );
};

export default InfoSection;
