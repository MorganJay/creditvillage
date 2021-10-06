import React from "react";
import styled from "styled-components";

import ButtonLink from "components/buttons/ButtonLink";

const CtaSection = () => {
  return (
    <CtaCon id="cta" className="text-center p-5">
      <h1 className="mx-auto">
        Don't Leave your finances to chance. Let CreditVillage help you manage
        your credit needs
      </h1>
      <ButtonLink path="auth/signup">Sign Up</ButtonLink>
    </CtaCon>
  );
};

export default CtaSection;

const CtaCon = styled.section`
  background-color: var(--bg-primary);
  padding: 3rem 6rem;
  h1 {
    color: var(--lightblue);
    font-weight: 600;
    font-size: clamp(1.6rem, 4vw, 2.25rem);
    margin-bottom: 2rem;
    line-height: 41.9px;
    max-width: 1128px;
  }
  button {
    padding: 1.375rem 5rem;
    font-family: "CamptonLight";
  }
`;
