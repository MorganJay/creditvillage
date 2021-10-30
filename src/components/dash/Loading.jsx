import React from "react";
import styled, { keyframes } from "styled-components";

import PropTypes from "prop-types";

const Loading = ({ text }) => {
  return (
    <LoadingText>
      {text.split().map((letter, index) => (
        <span key={index}>{letter}</span>
      ))}
    </LoadingText>
  );
};

export default Loading;

Loading.propTypes = {
  text: PropTypes.string,
};

Loading.defaultProps = {
  text: "Loading...",
};

const scaleYIn = keyframes`
    from {
        transform: perspective(400px) rotateY(90deg);
        opacity: 0;
    }
    50% { opacity: 1 }
`;

const LoadingText = styled.h1`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  span {
    animation-name: ${scaleYIn};
    animation-iteration-count: infinite;
    animation-duration: 2s;
    /* font-size: 2rem; */
  }
`;
