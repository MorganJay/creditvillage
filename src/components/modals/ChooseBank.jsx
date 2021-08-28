import React, { useState } from "react";
import styled from "styled-components";
import { BiArrowBack } from "react-icons/bi";
import { MDBInputGroup, MDBBtn } from "mdbreact";

import BgImage from "assets/images/chooseBankBackground.png";
import GT from "assets/images/banks/GT@2x.png";
import Access from "assets/images/banks/Access@2x.jpg";
import Kuda from "assets/images/banks/Kuda.jfif";
import Zenith from "assets/images/banks/Zenith@2x.png";
import Sterling from "assets/images/banks/Sterling@2x.png";
import Union from "assets/images/banks/Union@2x.png";

const banks = [
  { name: "GTBank", url: GT },
  { name: "Access Bank", url: Access },
  { name: "Kuda Bank", url: Kuda },
  { name: "Zenith Bank", url: Zenith },
  { name: "Sterling Bank", url: Sterling },
  { name: "Union Bank of Nigeria", url: Union },
];

const ChooseBank = ({ handleNextStep, handlePrevStep, handleChange }) => {
  const [filteredBanks, setFilteredBanks] = useState(banks);

  const handleBankSelect = (name, logo) => {
    handleChange(name, logo);
    handleNextStep();
  };

  const handleSearch = ({ target }) => {
    const searchBanks = banks.filter(({ name }) =>
      name.toLowerCase().includes(target.value.toLowerCase())
    );
    setFilteredBanks(searchBanks);
  };

  return (
    <BankContainer>
      <Nav>
        <span onClick={handlePrevStep}>
          <BiArrowBack size="2rem" />
        </span>
        <h4>Choose your Bank</h4>
        <span>X</span>
      </Nav>
      <SearchCon>
        <MDBInputGroup
          containerClassName="mb-4 w-75"
          className="text-dark w-75"
          onChange={handleSearch}
          append={
            <MDBBtn color="white" className="m-0 px-3 py-2 z-depth-0">
              Search
            </MDBBtn>
          }
        />
      </SearchCon>
      <List>
        {filteredBanks.map(({ name, url }, index) => (
          <li key={index} onClick={() => handleBankSelect(name, url)}>
            <img src={url} alt={name} height="50" width="50" />
            <span>{name}</span>
          </li>
        ))}
      </List>
    </BankContainer>
  );
};

export default ChooseBank;

export const BankContainer = styled.div`
  border-radius: 50px;
  align-self: baseline;
  padding: 1.5rem;
  height: inherit;
  width: 60%;
  background-image: url(${BgImage});
  background-size: cover;
  color: white;
  display: flex;
  flex-direction: column;
  position: relative;
  margin: 0 auto;
  @media (max-width: 992px) {
    width: 70%;
  }
`;

const Nav = styled.div`
  display: flex;
  text-align: center;
  justify-content: space-between;
  padding: 0.7rem 1rem;

  h4 {
    font-family: Montserrat;
    font-style: normal;
    font-weight: normal;
    font-size: 25px;
    line-height: 30px;
    line-height: 30px;
  }

  span {
    cursor: pointer;
  }

  span:last-child {
    font-size: 23px;
    font-weight: normal;
    font-family: "Roboto", sans-serif;
    margin-right: 1rem;
  }
`;

const SearchCon = styled.div`
  width: 100%;
  justify-content: center;
  display: flex;
`;

const List = styled.ul`
  padding: 1rem;
  width: 100%;
  height: 70%;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
  li {
    display: flex;
    align-items: center;
    padding-right: 1rem;
    text-align: left;
    gap: 2rem;
    cursor: pointer;
    margin-bottom: 1rem;
  }
  img {
    border-radius: 50%;
    background: white;
  }
`;
