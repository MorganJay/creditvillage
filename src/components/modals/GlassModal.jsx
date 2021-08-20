import React from 'react';
import styled from 'styled-components';

const GlassModal = ({ children }) => {
  return <GlassContainer>{children}</GlassContainer>;
};

export default GlassModal;

const GlassContainer = styled.div`
  min-width: 45%;
  padding: 1rem;
  min-height: 70%;
  background: radial-gradient(
    128.14% 132.58% at 0% 19.79%,
    rgba(178, 202, 214, 0.7) 0%,
    rgba(178, 202, 214, 0) 100%
  );
  filter: drop-shadow(-10px 10px 24px rgba(0, 0, 0, 0.12));
  border-radius: 8px;
  display: grid;
  place-items: center;

  h1 {
    text-align: center;
    background: linear-gradient(180deg, #001521 0%, #80afca 100%);
    text-shadow: 0px 4px 10px rgba(78, 101, 128, 0.12);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-weight: 600;
    font-size: 36px;
    text-align: center;
  }

  p {
    color: white;
    font-size: 16px;
    font-weight: normal;
    font-family: 'Montserrat', san-serif;
    a {
      color: white;
    }
  }
`;
