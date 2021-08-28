import React, { useState } from "react";
import styled from "styled-components";

import withDashboardView from "hoc/withDashboard";
import ChooseBank from "components/modals/ChooseBank";
import LinkAccountModal from "components/modals/LinkAccount";
import ChooseBankLogin from "components/modals/ChooseBankLogin";
import LoginBankDetails from "components/modals/LoginBankDetails";
import BankLoginSuccessful from "components/modals/BankLoginSuccessful";

const LinkAccount = () => {
  const [step, setStep] = useState(0);
  const [bank, setBank] = useState({
    name: "",
    logo: "",
  });

  const nextStep = () => setStep(step + 1);

  const prevStep = () => setStep(step - 1);

  const handleChange = (name, logo) => {
    setBank({ name, logo });
  };

  const pages = [
    <LinkAccountModal handleNextStep={nextStep} />,
    <ChooseBank
      handlePrevStep={prevStep}
      handleNextStep={nextStep}
      handleChange={handleChange}
    />,
    <ChooseBankLogin
      handlePrevStep={prevStep}
      handleNextStep={nextStep}
      bank={bank}
    />,
    <LoginBankDetails
      bank={bank}
      handlePrevStep={prevStep}
      handleNextStep={nextStep}
    />,
    <BankLoginSuccessful />,
  ];

  return <Container>{pages[step]}</Container>;
};

export default withDashboardView(LinkAccount);

const Container = styled.div`
  width: 65%;
  height: 100%;
`;
