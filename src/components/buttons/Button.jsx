import React from "react";
import styled, { css } from "styled-components";

const Button = ({ children, ...props }) => {
  return <CreditButton {...props}>{children}</CreditButton>;
};

export default Button;

const invertedStyles = css`
  background-color: grey;
  color: var(--darkblue);
  padding: 13px 50px;
  border-radius: 4px;
  background: linear-gradient(
    275.85deg,
    #d9e8ef -22.37%,
    rgba(217, 232, 239, 0) 124.27%
  );
  filter: drop-shadow(6px 6px 16px rgba(149, 149, 149, 0.08));
  &:hover {
    opacity: 0.8;
    color: var(--darkblue);
  }
`;

const getButtonStyles = (props) => {
  return props.inverted ? invertedStyles : null;
};

export const CreditButton = styled.button`
  background: var(--darkblue);
  box-shadow: 0px 10px 20px rgba(82, 117, 136, 0.12);
  border-radius: 20px;
  color: white;
  padding: 12px 24px;
  border: 1px solid var(--darkblue);
  font-weight: 500;
  cursor: pointer;
  user-select: none;
  transition: all ease 0.2s;
  &:hover {
    background-color: transparent;
    color: var(--darkblue);
    font-weight: 700;
  }
  &:focus,
  &:active {
    outline: none;
    opacity: 0.8;
  }
  ${(props) => props.styles}
  ${getButtonStyles}
`;
