import styled from "styled-components";
import { Link } from "react-router-dom";

export const Wrapper = styled.div`
  &.main {
    width: calc(100% - 520px);
    display: flex;
    justify-content: center;
    padding-top: 8rem;
    @media (max-width: 800px) {
      width: 100% !important;
      padding-top: 0;
    }
  }
  &.main-alt {
    display: flex;
    flex-direction: column;
    text-align: center;
    justify-content: center;
    align-items: center;
    @media (max-width: 800px) {
      width: 100%;
      padding: 6rem 1.4rem;
      text-align: left;
    }
  }
  &.process {
    display: flex;
    @media (max-width: 800px) {
      flex-direction: column;
      height: 100vh;
    }
  }
  &.process-content {
    @media (max-width: 800px) {
      padding: 0;
    }
  }
  &.hero-left {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    padding: 0 40px;
    background: #caebfd;
    @media (max-width: 800px) {
      padding: 40px 20px;
    }
  }
  &.hero-right {
  }

  &.hero-left,
  &.hero-right {
    width: 50%;
    /* height: 100%; */
    @media (max-width: 800px) {
      width: 100%;
    }
  }
  &.footer-top {
    display: flex;
    justify-content: space-between;
    @media (max-width: 800px) {
      flex-direction: column;
      margin-bottom: 40px;
    }
  }
  &.footer-bottom {
    display: flex;
    justify-content: flex-end;
    @media (max-width: 800px) {
      justify-content: flex-start;
    }

    a {
      padding-right: 20px;
      &:last-child {
        padding-right: 0;
      }
    }
  }
  &.socials-wrapper {
    a {
      display: inline-block;
      padding: 0 16px;
      &:last-child {
        padding-right: 0;
      }
    }
  }
  &.pinWrapper {
    width: fit-content;
    text-align: center;
    padding: 5rem 2rem;
    box-shadow: 6px 6px 15px 0px #53768933;
    border-radius: 0.8rem;
    height: 500px;
    background: white;
  }
`;

export const HeroWrapper = styled.div`
  width: 100%;
  display: flex;
  height: 655px;
  margin-bottom: 160px;
  @media (max-width: 800px) {
    flex-direction: column;
  }
`;

export const HeadingOne = styled.h1`
  font-style: normal;
  font-weight: 600;
  font-size: clamp(2rem, 5vw, 45px);
  line-height: 52px;
  color: var(--darkblue);
  font-family: "CamptonMedium";
  color: #537689;

  &.alternative {
    font-size: 2rem;
  }
  &.modal-heading {
    font-size: 36px;
  }
`;

export const HeadingTwo = styled.h2`
  color: #537689;
`;

export const Paragraph = styled.p`
  color: #53768966;

  &.footer-paragraph {
    color: white;
    @media (max-width: 800px) {
      font-size: 0.875rem;
    }
  }
  &.bold {
    font-weight: bold;
    color: #022d45;
  }
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  &.modal-img {
    width: 44px !important;
    height: 44px !important;
  }
`;

// Footer
export const Footer = styled.footer`
  background-color: var(--lightblue);
  font-family: "CamptonLight";
  padding: 6rem 3rem;
  @media (max-width: 800px) {
    padding: 4rem 1.2rem;
    text-align: left;
  }
`;

export const StyledLink = styled(Link)`
  color: white;

  &.blue {
    color: blue;
    background: transparent !important;
    padding: 0 6px;
  }
  &.modal-btn {
    background: #022d45;
    padding: 1rem 2.2rem;
    border-radius: 2.2rem;
  }
`;

export const OutLink = styled.a`
  color: white;
  &.blue {
    color: blue;
    background: transparent !important;
    text-decoration: underline;
    display: inline-block;
    padding: 0 6px;
  }

  &:hover {
    svg {
      opacity: 0.7;
    }
  }
`;
export const AnchorLink = styled.a``;

export const SideWrapper = styled.div`
  width: 520px;
  height: 100vh;
  background: #caebfd;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  border-top-right-radius: 16px;
  border-bottom-right-radius: 16px;
  padding-left: 2rem;

  @media (max-width: 800px) {
    display: none;
  }

  &.white {
    background: transparent;
  }
  &.start {
    justify-content: flex-start;
    background: transparent;
    align-items: flex-start;
    padding-left: 4rem;
    padding-top: 8rem;
    @media (max-width: 800px) {
      display: flex;
      justify-content: center;
      width: 100%;
      padding: 8rem 2rem 2rem;
      height: auto;
      text-align: center;
    }
  }
`;

export const FormBox = styled.form`
  width: 50%;
  margin-top: 20px;
  text-align: left;
  @media (max-width: 800px) {
    width: 100% !important;
    margin: 0 1rem;
    padding: 0 1rem;
  }
  @media (max-width: 500px) {
    width: 100% !important;
    padding: 0 0.6rem;
  }

  &.sub {
    margin-top: 0;
    padding: 4rem;
    height: fit-content;
    border-radius: 0.8rem;
    box-shadow: 10px 10px 20px #f2f1f1;
    @media (max-width: 500px) {
      padding: 2rem 1rem;
    }
  }
`;
export const InputField = styled.input`
  width: 100%;
  padding: 1.4rem 0.8rem;
  border: 2px solid #537689;
  border-radius: 10px;
  margin-bottom: 2rem;
  &::placeholder {
    color: #53768966;
  }
  @media (max-width: 800px) {
    padding: 1rem;
  }
`;

export const CheckBox = styled.input``;
export const LabelText = styled.label`
  padding-left: 10px;
`;

export const SubmitButton = styled.button`
  width: 100%;
  background: linear-gradient(
    275.85deg,
    #d9e8ef -22.37%,
    rgba(217, 232, 239, 0) 124.27%
  );
  padding: 1.6rem 0.8rem;
  border: none;
  border-radius: 10px;
  margin: 20px 0;
`;

// Modal

export const ModalWrapper = styled.div`
  &.wrapper {
    position: fixed;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.5);
    display: grid;
    place-items: center;
    z-index: 1000;
  }

  &.content {
    width: 685px;
    height: 454px;
    background: #caebfd;
    border-radius: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
  }
  &.body {
    margin-top: 20px;
    margin-bottom: 30px;
  }
`;
