import React from 'react';
import styled from 'styled-components';

const LabelledInput = ({ label, type, id, children, ...props }) => {
  return (
    <FormGroup>
      <label htmlFor={id}>{label}</label>
      {type === 'textarea' ? (
        <textarea
          name={id}
          id={id}
          cols='30'
          rows='10'
          defaultValue={children}
        />
      ) : (
        <input type={type} name={id} defaultValue={children} {...props} />
      )}
    </FormGroup>
  );
};

export default LabelledInput;

LabelledInput.defaultProps = {
  type: 'text'
};

export const FormGroup = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;
  align-items: center;

  label {
    color: var(--darkblue);
  }

  input,
  textarea {
    background: #f8fdff;
    border: 1px solid #eff8fc;
    border-radius: 6px;
    padding: 1rem;
    width: 70%;
    font-size: 16px;
    height: 42.1875px;
  }

  textarea {
    height: 82px;
    resize: none;
  }
`;
