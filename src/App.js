// import { useState } from "react";
import { ToastContainer } from "react-toastify";
import styled from "styled-components";

import LogoLink from "components/buttons/LogoLink";
import MainRoutes from "routes";
import { UserContextProvider } from "context/UserContext";

import "react-toastify/dist/ReactToastify.css";
import "./App.css";

function App() {
  // const [linkAccountStep, setLinkAccountStep] = useState(0);

  // const nextStep = () => setLinkAccountStep(linkAccountStep + 1);

  // const prevStep = () => setLinkAccountStep(linkAccountStep - 1);

  return (
    <div className="App">
      <ToastContainer />
      <Logo />
      <UserContextProvider>
        <MainRoutes />
      </UserContextProvider>
    </div>
  );
}

export default App;

const Logo = styled(LogoLink)`
  left: 36px;
  top: 17px;
  width: 51px;
  z-index: 100;
  position: absolute;
`;
