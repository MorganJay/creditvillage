import React from 'react';
import styled from 'styled-components';

const PasswordInput = ({ ...props }) => <Input {...props} />;

export default PasswordInput;

const Input = styled.input`
  color: var(--darkblue);
  padding: 15px 20px;
  background: linear-gradient(
    275.85deg,
    #d9e8ef -22.37%,
    rgba(217, 232, 239, 0) 124.27%
  ) !important;
  box-shadow: inset 0px 4px 10px rgba(221, 221, 221, 0.12);
  border-radius: 4px;
  border: none;
  outline: none;
  text-shadow: 0px 4px 10px rgba(78, 101, 128, 0.12);
  font-family: 'Montserrat', san-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 24px;
  width: 100%;

  &::placeholder {
    color: var(--darkblue);
    opacity: 1;
  }

  &::-ms-input-placeholder {
    color: var(--darkblue);
  }
`;
