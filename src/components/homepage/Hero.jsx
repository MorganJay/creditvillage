import React from "react";
import styled from "styled-components";

import ButtonLink from "components/buttons/ButtonLink";
import Woman from "assets/images/landingwoman.png";

const HeroSection = () => {
  return (
    <Hero id="header">
      <div>
        <h1>Know your Credit Score</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem
          vestibulum, mauris rutrum pellentesque ipsum sed. Vel augue non
          faucibus adipiscing euismod laoreet.
        </p>
        <ButtonLink path="/auth/signup">Get Started</ButtonLink>
      </div>
      <img src={Woman} alt="A woman holding her phone" />
    </Hero>
  );
};

export default HeroSection;

const Hero = styled.header`
  display: flex;
  width: 100%;
  flex-direction: column;
  max-height: 655px;
  h1 {
    font-style: normal;
    font-weight: 600;
    font-size: clamp(2rem, 5vw, 45px);
    line-height: 52px;
    color: var(--darkblue);
    font-family: "CamptonMedium";
  }

  div {
    width: 100%;
    display: flex;
    background-color: #caebfd;
    flex-direction: column;
    padding: 9rem 5rem;
    justify-content: center;
    align-items: flex-start;
    height: 100%;
    gap: 1rem;
    user-select: none;

    p {
      max-width: 447px;
    }

    button {
      padding: 1.065rem 3rem;
    }
  }

  img {
    display: none;
  }

  @media screen and (min-width: 800px) {
    flex-direction: row;

    div {
      width: 55%;
    }

    img {
      width: 45%;
      display: block;
    }
  }
`;
