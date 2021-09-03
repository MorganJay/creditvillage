import React, { useState } from "react";
import styled, { css } from "styled-components";

import { Container } from "./LinkAccount";

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

  return (
    <Wrapper>
      <CardTab>
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
          <ButtonContainer className="mb-3 px-1">
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
          <div className="px-4 h-100 justify-content-space-between">
            <ul>
              <li>
                Account Currency<span>Naira</span>
              </li>
              <li>
                Bank<span>GTBank</span>
              </li>
              <li>
                Account No.<span>0018709596</span>
              </li>
              <li>
                Account Name<span>OGUNGBEFUN OLADUNNI KHADIJAH</span>
              </li>
              <li>
                Balance<span style={{ color: "#2B3ED5" }}>NGN 35,365.53</span>
              </li>
            </ul>
          </div>
        </Body>
      </CardTab>
    </Wrapper>
  );
};

export default AccountInfo;

const Wrapper = styled(Container)``;

const CardTab = styled.div`
  width: 80%;
  height: 90%;
  margin: 0 auto;
  border-radius: 50px;
  display: flex;
  flex-direction: column;
`;

const Header = styled.div`
  height: 13%;
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
  height: fit-content;
  font-family: "GraviticaMono", sans-serif;
  padding: 1rem 0 2.5rem;

  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    font-family: "GraviticaMono", sans-serif;

    ul {
      margin: 0;
      padding: 0;
      height: 100%;
      width: 100%;
      li {
        display: flex;
        width: 100%;
        justify-content: space-between;
        padding: 1rem 0;
        background-image: repeating-linear-gradient(
            0deg,
            #dbdbeb,
            #dbdbeb 10px,
            transparent 10px,
            transparent 20px,
            #dbdbeb 20px
          ),
          repeating-linear-gradient(
            90deg,
            #dbdbeb,
            #dbdbeb 10px,
            transparent 10px,
            transparent 20px,
            #dbdbeb 20px
          ),
          repeating-linear-gradient(
            180deg,
            #dbdbeb,
            #dbdbeb 10px,
            transparent 10px,
            transparent 20px,
            #dbdbeb 20px
          ),
          repeating-linear-gradient(
            270deg,
            #dbdbeb,
            #dbdbeb 10px,
            transparent 10px,
            transparent 20px,
            #dbdbeb 20px
          );
        background-size: 0px 0%, 100% 0px, 0px 100%, 100% 2px;
        background-position: 0 0, 0 0, 100% 0, 0 100%;
        background-repeat: no-repeat;
        align-items: center;
        color: #28306fb3;
        font-weight: 600;
        letter-spacing: 0.01em;
        font-family: "GraviticaMono", sans-serif;
        &:last-child {
          border: none;
          background: none;
        }

        span {
          width: 40%;
          text-align: right;
          font-family: "GraviticaMono", sans-serif;
          font-weight: 900;
          color: #28306fb3;
        }
      }
    }
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
  transform: scale(1);
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
