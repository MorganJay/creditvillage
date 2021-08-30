import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import Image from "assets/images/greycircle.png";

const LinkAccountButton = ({ path, setstep }) => {
  const handleClick = () => setstep(1);
  return (
    <StyledLink to={path}>
      <img src={Image} alt="Circle" onClick={handleClick} />
      <span onClick={handleClick}>+</span>
    </StyledLink>
  );
};

export default LinkAccountButton;

const StyledLink = styled(Link)`
  position: relative;
  span {
    position: absolute;
    font-family: "Montserrat", san-sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 70px;
    line-height: 85px;
    color: #000000;
    left: 0;
    transform: translate(85%, 15%);
  }
`;
