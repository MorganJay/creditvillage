import React, { useState } from "react";
import styled from "styled-components";

import LinkAccountModal from "components/modals/LinkAccount";
import withDashboardView from "hoc/withDashboard";
import ChooseBank from "../../components/modals/ChooseBank";
import ChooseBankLogin from "./../../components/modals/ChooseBankLogin";
import LoginBankDetails from "./../../components/modals/LoginBankDetails";
import BankLoginSuccessful from "./../../components/modals/BankLoginSuccessful";

const LinkAccount = () => {
  const [step, setStep] = useState(0);
  const [bank, setBank] = useState({
    name: "",
    logo: "",
  });

  const nextStep = () => {
    setStep(step + 1);
  };

  const prevStep = () => {
    setStep(step - 1);
  };

  const handleChange = e => {
    setBank({ ...bank, name: e.target.value });
  };

  return (
    <Container>
      {() => {
        switch (step) {
          case 0:
            <LinkAccountModal nextStep={nextStep} />;
            break;
          case 1:
            <ChooseBank nextStep={nextStep}/>;
            break;
          case 2:
            <ChooseBankLogin nextStep={nextStep} />;
            break;
          case 3:
            <LoginBankDetails nextStep={nextStep} />;
            break;
          case 4:
            <BankLoginSuccessful />;
            break;
          default:
            break;
        }
      }}
    </Container>
  );
};

export default withDashboardView(LinkAccount);

const Container = styled.div`
  width: 65%;
  display: grid;
  place-items: center;
  height: 100%;
  align-content: baseline;
`;
