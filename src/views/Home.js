import React from "react";
import styled from "styled-components";

import AuthHeader from "components/headers/AuthHeader";
import HeroSection from "components/homepage/Hero";
import InfoSection from "components/homepage/InfoSection";
import FeaturesSection from "components/homepage/Features";
import WorksSection from "components/homepage/Works";
import ManageSection from "components/homepage/Manage";
import CtaSection from "components/homepage/Cta";

const Home = () => {
  return (
    <Container>
      <AuthHeader />
      <HeroSection />
      <InfoSection />
      <FeaturesSection />
      <WorksSection />
      <ManageSection />
      <CtaSection />
    </Container>
  );
};

export default Home;

const Container = styled.div`
  width: 100%;

  p {
    color: var(--lighterblue);
    font-size: 1.125rem;
    font-weight: normal;
    line-height: 21px;
  }
`;
