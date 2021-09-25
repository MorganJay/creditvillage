import React from "react";
import styled from "styled-components";

import AuthHeader from "components/headers/AuthHeader";
import HeroSection from "components/homepage/Hero";
import InfoSection from "components/homepage/InfoSection";
import FeaturesSection from "components/homepage/Features";
import WorksSection from "components/homepage/Works";

const Home = () => {
  return (
    <Container>
      <AuthHeader />
      <HeroSection />
      <InfoSection />
      <FeaturesSection />
      <WorksSection />
    </Container>
  );
};

export default Home;

const Container = styled.div`
  width: 100%;

  p {
    color: var(--lightblue);
    font-size: 1.125rem;
    font-weight: normal;
    line-height: 21px;
  }
`;
