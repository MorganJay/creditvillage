import React from "react";

import ButtonLink from "components/buttons/ButtonLink";
import Woman from "assets/images/landingwoman.png";
import { HeadingOne, HeroWrapper, Paragraph, Wrapper, Image } from "styled";

const HeroSection = () => {
  return (
    <HeroWrapper>
      <Wrapper className="hero-left">
        <HeadingOne>Know your Credit Score</HeadingOne>
        <Paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem
          vestibulum, mauris rutrum pellentesque ipsum sed. Vel augue non
          faucibus adipiscing euismod laoreet.
        </Paragraph>
        <ButtonLink path="/auth/signup">Get Started</ButtonLink>
      </Wrapper>
      <Wrapper className="hero-right">
        <Image src={Woman} alt="A woman holding her phone" />
      </Wrapper>
    </HeroWrapper>
  );
};

export default HeroSection;
<<<<<<< HEAD
=======

const Hero = styled.header`
  display: flex;
  width: 100%;
  height: 100vh;
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
>>>>>>> 5e9d9c2ca63188efdcfae976f42060e83e0b8d83
