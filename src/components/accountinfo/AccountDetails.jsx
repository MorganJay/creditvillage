import React from "react";
import styled from "styled-components";

const AccountDetails = () => {
  return (
    <ListWrapper>
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
    </ListWrapper>
  );
};

export default AccountDetails;

export const ListWrapper = styled.ul`
  margin: 0;
  padding: 0;
  height: 100%;
  width: 100%;
  overflow-y: auto;
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
`;
