import React from "react";
import styled from "styled-components";

import { FormGroup } from "../inputs/LabelledInput";

const LabelledSelect = ({ label, id, options, ...props }) => {
  return (
    <FormGroup>
      <label htmlFor={id}>{label}</label>
      <StyledSelect name={id} {...props}>
        {options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </StyledSelect>
    </FormGroup>
  );
};

export default LabelledSelect;

const StyledSelect = styled.select`
  background: #f8fdff;
  border: 1px solid #eff8fc;
  border-radius: 6px;
  padding: 0.5rem;
  width: 70%;
  font-size: 16px;
  height: 42.1875px;
`;
