import React from "react";
import styled from "styled-components";

const ManageSection = () => {
  return (
    <Container id="manage" className="text-center">
      <h1>Manage your credit, connect your bank account</h1>
      <p>
        Monitor your credit when you connect your bank account to the app and
        get better financial advice
      </p>
    </Container>
  );
};

export default ManageSection;

const Container = styled.section`
  padding: 3rem 2rem 15rem;

  h1 {
    font-family: "Montserrat";
    font-size: clamp(1.5rem, 3.5vw, 3rem);
    color: var(--lightblue);
    font-weight: 600;
    margin-bottom: 2rem;
  }

  p {
    color: var(--lighterblue);
    font-size: clamp(1rem, 2vw, 18px);
  }
`;
