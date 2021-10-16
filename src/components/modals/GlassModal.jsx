import React from "react";
import styled from "styled-components";

const GlassModal = ({ children, ...props }) => (
  <GlassContainer {...props}>{children}</GlassContainer>
);

export default GlassModal;

const GlassContainer = styled.div`
  background: #fafcfc;
  box-shadow: 6px 6px 15px rgba(83, 118, 137, 0.2);
  border-radius: 10px;
  display: grid;
  place-items: center;
  p {
    color: var(--lighterblue);
    font-size: 18px;
    font-weight: normal;
  }
`;
