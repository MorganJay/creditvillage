import React from "react";
import styled from "styled-components";
import { FormGroup, Input } from "reactstrap";
import { isEdge } from "react-device-detect";

const PasswordInput = ({ icon, showIcon, ...props }) => {
  return (
    <PasswordInputContainer>
      <Password {...props} />
      {!isEdge && showIcon && (
        <PasswordToggle className="password-toggle-icon">{icon}</PasswordToggle>
      )}
    </PasswordInputContainer>
  );
};

export default PasswordInput;

export const Password = styled(Input)`
  padding: 2rem;
  background: #fafcfc;
  box-shadow: inset 0px 4px 10px rgba(221, 221, 221, 0.12);
  border-radius: 10px;
  border: 2px solid var(--lightblue);
  outline: none;
  text-shadow: 0px 4px 10px rgba(78, 101, 128, 0.12);
  font-family: "Montserrat", san-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 21.94px;
  width: 100%;
  color: var(--darkblue) !important;

  &::placeholder {
    color: var(--lighterblue);
    opacity: 1;
  }

  &::-ms-input-placeholder {
    color: var(--lightblue);
  }
`;

const PasswordInputContainer = styled(FormGroup)`
  position: relative;
`;

const PasswordToggle = styled.span`
  position: absolute;
  right: 20px;
  top: 42%;
  transform: translateY(-50%);
  cursor: pointer;
`;
