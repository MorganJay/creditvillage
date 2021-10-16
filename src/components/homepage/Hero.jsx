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
