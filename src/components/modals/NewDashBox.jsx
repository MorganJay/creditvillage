import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import CreditButton from "components/buttons/Button";

import { flexCenter } from "utils/styles";

const NewDashBox = ({ Image, text, buttonText, linkTo, setStep }) => {
  const handleClick = () => setStep(1);
  return (
    <Box>
      <Image path={linkTo} setstep={setStep} />
      <p className="text-center w-75">{text}</p>
      <Link to={linkTo}>
        <CreditButton onClick={buttonText === "Proceed" ? handleClick : null}>
          {buttonText}
        </CreditButton>
      </Link>
    </Box>
  );
};

export default NewDashBox;

const Box = styled.div`
  border-radius: 50px;
  background: #ebd3f4;
  ${flexCenter}
  flex-direction: column;
  gap: 1rem;
  padding: 2rem;
  width: 335px;

  button {
    background: rgba(2, 45, 69, 0.7);
    box-shadow: 0px 10px 20px rgba(82, 117, 136, 0.12);
  }
`;
