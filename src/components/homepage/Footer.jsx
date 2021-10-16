import React from "react";
import { LinkList } from "components/headers/AuthHeader";

import { ReactComponent as Facebook } from "assets/images/facebook.svg";
import { ReactComponent as Twitter } from "assets/images/icons_twitter.svg";
import { ReactComponent as Instagram } from "assets/images/instagram-alt.svg";
import {
  Footer,
  Wrapper,
  HeadingOne,
  Paragraph,
  StyledLink,
  OutLink,
} from "../../styled/";

const FooterSection = () => {
  return (
<<<<<<< HEAD
    <Footer>
      <Wrapper className="footer-top">
        <Wrapper>
          <HeadingOne>V</HeadingOne>
          <Paragraph className="footer-paragraph">
            CreditVillage &copy; 2021. All rights reserved
          </Paragraph>
        </Wrapper>
        <Wrapper>
          <LinkList>
            <StyledLink path="#home">Home</StyledLink>
            <StyledLink path="#features">Features</StyledLink>
            <StyledLink path="#how"> How it works</StyledLink>
          </LinkList>
        </Wrapper>
        <Wrapper className="socials-wrapper">
          <OutLink href="https://www.facebook.com">
=======
    <Footer
      id="footer"
      className="d-flex justify-content-around flex-column flex-lg-row"
    >
      <FooterDiv className="flex-column">
        <h1 className="mb-1">V</h1>
        <p className="text-white w-100">
          CreditVillage &copy; 2021. All rights reserved
        </p>
      </FooterDiv>
      <FooterDiv className="justify-content-around">
        <LinkList
          className="p-0 justify-content-between flex-wrap align-items-start"
          style={{ gap: 0, width: "95%", minHeight: 90 }}
        >
          <Link path="#home">Home</Link>
          <Link path="#features">Features</Link>
          <Link path="#works"> How it works</Link>
        </LinkList>
      </FooterDiv>
      <FooterDiv
        className="flex-column justify-content-between"
        style={{ gap: "1rem", height: 150 }}
      >
        <SocialLinks className="d-flex justify-content-end">
          <a href="/">
>>>>>>> 5e9d9c2ca63188efdcfae976f42060e83e0b8d83
            <Facebook />
          </OutLink>
          <OutLink href="https://www.twitter.com">
            <Twitter />
          </OutLink>
          <OutLink href="https://www.instagram.com">
            <Instagram />
          </OutLink>
        </Wrapper>
      </Wrapper>
      <Wrapper className="footer-bottom">
        <OutLink href="/">Terms and Conditions</OutLink>
        <OutLink href="/">Privacy Policy</OutLink>
      </Wrapper>
    </Footer>
  );
};

export default FooterSection;
<<<<<<< HEAD
=======

const Footer = styled.footer`
  background-color: var(--lightblue);
  font-family: "CamptonLight";
  padding: 6rem 3rem;
`;

const FooterDiv = styled.div`
  display: flex;

  h1 {
    color: var(--darkblue);
    font-size: 48px;
    font-style: normal;
    font-weight: 600;
    line-height: 56px;
    border: 2px solid rgba(83, 118, 137, 0.4);
    font-family: "CamptonMedium";
  }

  p {
    font-family: "CamptonLight";
    width: 60%;
  }

  a {
    color: inherit;
    font-family: inherit;
    &:hover {
      * {
        opacity: 0.7;
        color: inherit;
      }
    }
  }
`;

const Link = styled(LinkItem)`
  color: white;
  font-family: "CamptonLight";
`;

const SocialLinks = styled.div`
  gap: 3rem;
`;

const TC = styled.div`
  gap: 4rem;
  align-self: end;
  a {
    font-family: "CamptonLight";
    color: white;

    &:hover {
      opacity: 0.7;
    }
  }
`;
>>>>>>> 5e9d9c2ca63188efdcfae976f42060e83e0b8d83
