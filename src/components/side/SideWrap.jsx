import React from "react";
import { HeadingTwo, Image, Paragraph, SideWrapper, Wrapper } from "components/styled";

const SideWrap = ({ createImage, heading, hasImage, text, children }) => {
  return (
    <SideWrapper className={!hasImage && "start"}>
      <Wrapper>
        <HeadingTwo style={{ fontSize: "24px", fontWeight: "bold" }}>
          {heading}
        </HeadingTwo>
        <Paragraph>{text}</Paragraph>
        {children}
      </Wrapper>

      <Wrapper>
        {hasImage && (
          <Image src={createImage} style={{ width: "100%", height: "460px" }} />
        )}
      </Wrapper>
    </SideWrapper>
  );
};

export default SideWrap;
