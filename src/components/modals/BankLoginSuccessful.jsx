import React from "react";
import styled from "styled-components";
import { Button } from "reactstrap";
import { FiCheck } from "react-icons/fi";
import { Link } from "react-router-dom";

const BankLoginSuccessful = () => {
  return (
    <Container>
      <div>
        <FiCheck color="#E24407" size="3rem" />
      </div>
      <div>
        <h4>Logged in successfully</h4>
        <p>Click on the continue button below to proceed with Demo.</p>
      </div>
      <Link to="/home/new" className="d-block w-100">
        <Button color="white" block>
          Continue
        </Button>
      </Link>
    </Container>
  );
};

export default BankLoginSuccessful;

const Container = styled.div`
  margin: 0 auto;
  border-radius: 50px;
  height: 100%;
  width: 50%;
  background-color: #e24407;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  padding: 1.5rem;
  text-align: center;
  color: #f2fbff;
  padding-top: 5rem;

  div:first-child {
    background-color: #f2fbff;
    border-radius: 50%;
    width: 100px;
    height: 100px;
    display: grid;
    place-items: center;
  }

  div:last-child {
    text-align: center;
  }

  h4 {
    font-family: "EquitanSansBold", san-serif;
    font-size: 2rem;
  }

  p {
    font-family: "EquitanSansRegular", san-serif;
    width: 80%;
    text-align: center;
    margin: 0 auto;
  }
  button {
    border-radius: 13px;
    text-transform: none;
    font-size: 1rem;
    color: #575555;
    font-family: "EquitanSansBold", san-serif;
  }

  @media (max-width: 768px) {
    width: 90%;
  }
`;
