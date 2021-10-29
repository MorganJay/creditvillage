import React from "react";
// import styled from "styled-components";

import { ReactComponent as Avi } from "assets/images/smallprofilepic.svg";

const DashboardHeader = () => {
  return (
    <header className="header px-2 d-flex justify-content-between">
      <input
        type="search"
        name="search"
        id="search"
        placeholder="Search for offers, etc..."
      />
      <div className="d-flex justify-content-between gap-1 align-items-center">
        {/* <img src="" alt="" /> */}
        <Avi />
        Mary Agatha
      </div>
    </header>
  );
};

export default DashboardHeader;
