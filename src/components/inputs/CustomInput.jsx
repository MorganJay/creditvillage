import React from "react";
import { FormGroup, Input } from "reactstrap";
import styled from "styled-components";

const CustomInput = ({ className, ...props }) => {
  return (
    <FormGroup className={className}>
      <FormInput {...props} />
    </FormGroup>
  );
};

export default CustomInput;

const FormInput = styled(Input)`
  color: var(--darkblue);
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

  &::placeholder {
    color: var(--lighterblue);
  }
  &::-ms-input-placeholder {
    color: var(--lighterblue);
  }
`;
