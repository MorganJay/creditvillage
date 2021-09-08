import React, { useState } from "react";
import styled, { css } from "styled-components";

import { Container } from "./LinkAccount";
import AccountDetails from "components/accountinfo/AccountDetails";
import Transactions from "./../../components/accountinfo/Transactions";

const tabs = ["Rendered", "Json"];
const buttons = [
  "Account Details",
  "Transactions",
  "Credit",
  "Debit",
  "Income",
];

const AccountInfo = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [activeButton, setActiveButton] = useState(0);

  const pages = [<AccountDetails />, <Transactions />];

  return (
    <Container>
      <CardTab className="justify-content-xl-center ">
        <Header>
          {tabs.map((text, index) => (
            <Tab
              key={index}
              active={activeTab === index}
              onClick={() => setActiveTab(index)}
            >
              {text}
            </Tab>
          ))}
        </Header>
        <Body>
          <ButtonContainer className="mb-1">
            {buttons.map((text, index) => (
              <Button
                key={index}
                active={activeButton === index}
                onClick={() => setActiveButton(index)}
              >
                {text}
              </Button>
            ))}
          </ButtonContainer>
          {pages[activeButton]}
        </Body>
      </CardTab>
    </Container>
  );
};

export default AccountInfo;

const CardTab = styled.div`
  width: 80%;
  height: 90%;
  max-width: 746px;
  max-height: 500px;
  overflow: hidden;
  margin: 0 auto;
  border-radius: 50px;
  display: flex;
  flex-direction: column;
`;

const Header = styled.div`
  max-height: 13%;
  border-radius: 50px 50px 0 0;
  display: flex;
  width: 100%;

  div:first-child {
    border-radius: 50px 0 0 0;
  }
  div:last-child {
    border-radius: 0 50px 0 0;
  }
`;

const Body = styled.div`
  background-color: #f7fbff;
  border-radius: 0 0 50px 50px;
  font-family: "GraviticaMono", sans-serif;
  padding: 0.5rem 1rem 4rem;
  height: 93%;
  overflow: hidden;
  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    font-family: "GraviticaMono", sans-serif;
  }
`;

const activeStyles = css`
  color: #db982e;
  background-color: #0e1337;
  border-bottom: 2.5px solid #ffaf2c;
  font-family: "GraviticaMono", sans-serif;
`;

const Tab = styled.div`
  background-color: #111641;
  padding: 1rem;
  text-align: center;
  width: 50%;
  color: white;
  cursor: pointer;
  font-size: 0.8rem;
  font-family: "Inter", san-serif;
  font-weight: 500;
  ${props => props.active && activeStyles}
`;

const activeButtonStyles = css`
  background-color: #182cd1;
  color: #fafafe;
  box-shadow: 0px 5px 5px #182bd129;
  &:hover {
    transform: none;
  }
`;

const Button = styled.button`
  font-weight: 600;
  font-size: 0.8rem;
  color: #959799;
  border-radius: 15px;
  letter-spacing: 0.05em;
  border: none;
  outline: none;
  padding: 0.7rem 1rem;
  background-color: #fbfdff;
  font-family: "GraviticaMono", sans-serif;
  transition: all 0.2s ease;

  &:hover {
    transform: scale(0.8);
  }

  &:active,
  &:focus {
    outline: none;
  }
  ${props => props.active && activeButtonStyles}
`;

const ButtonContainer = styled.div`
  height: 18%;
  overflow: hidden;
  overflow-x: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
`;
