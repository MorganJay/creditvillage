import React from "react";
import { Wrapper } from "styled";

const MainWrap = ({ children, hasImage }) => {
  return (
    <Wrapper className={hasImage ? "main-alt" : "main"}>{children}</Wrapper>
  );
};

export default MainWrap;
