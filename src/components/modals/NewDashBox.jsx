import React from "react";
import styled from "styled-components";

import CreditButton from "components/buttons/Button";

import { flexCenter } from "utils/styles";
import { Link } from "react-router-dom";

const NewDashBox = ({ image, text, buttonText, linkTo }) => {
  return (
    <Box>
      {image}
      <p>{text}</p>
      <Link to={linkTo}>
        <CreditButton>{buttonText}</CreditButton>
      </Link>
    </Box>
  );
};

export default NewDashBox;

const Box = styled.div`
  border-radius: 50px;
  background: #ebd3f4;
  ${flexCenter}
  padding: 2rem 2rem 1rem;
`;
