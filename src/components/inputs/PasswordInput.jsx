import React from "react";
import styled from "styled-components";
import { FormGroup, Input } from "reactstrap";
import { isEdge } from "react-device-detect";

const PasswordInput = ({ icon, showIcon, ...props }) => {
  return (
    <PasswordInputContainer>
      <Input {...props} />
      {!isEdge && showIcon && (
        <PasswordToggle className="password-toggle-icon">
          {icon}
        </PasswordToggle>
      )}
    </PasswordInputContainer>
  );
};

export default PasswordInput;

const PasswordInputContainer = styled(FormGroup)`
  position: relative;
`;

const PasswordToggle = styled.span`
  position: absolute;
  right: 20px;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
`;
