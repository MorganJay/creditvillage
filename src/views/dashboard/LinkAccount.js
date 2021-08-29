import React, { useState } from "react";
import styled from "styled-components";

import withDashboardView from "hoc/withDashboard";
import ChooseBank from "components/modals/ChooseBank";
import LinkAccountModal from "components/modals/LinkAccount";
import ChooseBankLogin from "components/modals/ChooseBankLogin";
import LoginBankDetails from "components/modals/LoginBankDetails";
import BankLoginSuccessful from "components/modals/BankLoginSuccessful";

const LinkAccount = ({ history }) => {
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

  const handleClose = () => history.push("/profile/updated");

  const pages = [
    <LinkAccountModal handleNextStep={nextStep} handleClose={handleClose} />,
    <ChooseBank
      handlePrevStep={prevStep}
      handleNextStep={nextStep}
      handleChange={handleChange}
      handleClose={handleClose}
    />,
    <ChooseBankLogin
      handlePrevStep={prevStep}
      handleNextStep={nextStep}
      handleClose={handleClose}
      bank={bank}
    />,
    <LoginBankDetails
      bank={bank}
      handlePrevStep={prevStep}
      handleNextStep={nextStep}
      handleClose={handleClose}
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
