import React from "react";
import styled from "styled-components";

import { Container } from "./LinkAccount";
import ButtonLink from "components/buttons/ButtonLink";

import Score from "assets/images/creditscore.png";
import Button from './../../components/buttons/Button';

const CreditScore = () => {
  return (
    <Wrapper>
      <div className="px-5 text-center d-flex position-relative mb-5">
        <h1 className="mt-5 mb-2 pt-5 mr-4">
          Your <br /> Credit score is
        </h1>
        <img
          src={Score}
          alt="Credit Score"
          className="position-absolute"
          height="300"
        />
      </div>
      <Button className="mb-3">Useful links</Button>
      <h3>How do I improve my credit score ?</h3>
      <h3>How much loan can I take ?</h3>
      <h3>Which Financial institutions will give me a loan ?</h3>
      <ButtonLink path="/home" className="mt-2">
        View three month summary
      </ButtonLink>
    </Wrapper>
  );
};

export default CreditScore;

const Wrapper = styled(Container)`
  padding: 0 4rem;

  img {
    right: 0;
  }

  button {
    background: rgba(196, 196, 196, 0.3);
    border-radius: 10px;
    font-family: "Montserrat";
    padding: 1rem 1.8rem;
    font-size: 30px;
    line-height: 30px;
    color: black;
    font-weight: bold;
    &:hover {
      color: black;
      background-color: rgba(196, 196, 196, 0.7);
    }
  }
`;
