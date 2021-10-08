import React from "react";
import styled from "styled-components";

import iPad12 from "assets/images/iPad-Pro-12.png";
import Line from "assets/images/Line8.svg";

const data = [
  {
    step: "01",
    title: "Create an account",
    content:
      "Sign up for an account with just your email and a password to secure your account",
  },
  {
    step: "02",
    title: "Link your bank account",
    content:
      "It doesn’t matter which bank you use or how many bank account you have",
  },
  {
    step: "03",
    title: "Get your credit score",
    content: "View your credit score with a breakdown of how it came to be",
  },
];

const Works = () => {
  return (
    <WorksContainer
      id="works"
      className="d-flex justify-content-center flex-column flex-lg-row align-items-center my-5"
    >
      <img src={iPad12} alt="Ipad 12" />
      <div className="mt-5 m-lg-0 px-5 pr-lg-0 d-flex flex-column">
        <h2 className="mb-4">
          Start making informed financial decisions in few steps
        </h2>
        <StepList>
          {data.map(({ step, title, content }, index) => (
            <li key={index}>
              <span className="mr-2 mb-5">{step} </span> {title}
              <Detail className="pl-5 pr-0 py-2">{content}</Detail>
            </li>
          ))}
        </StepList>
      </div>
    </WorksContainer>
  );
};

export default Works;

const WorksContainer = styled.section`
  background-color: var(--bg-primary);
  padding: 5rem 0;

  img {
    width: 80%;
  }

  div {
    width: 100%;
    h2 {
      font-weight: 600;
      font-family: "CamptonBold";
      font-size: 2rem;
      line-height: 41.9px;
      color: var(--darkblue);
    }
  }

  @media (min-width: 992px) {
    img {
      width: 55%;
    }
    div {
      width: 35%;
    }
  }
`;

const StepList = styled.ul`
  padding: 0;
  li {
    font-weight: 600;
    font-size: 1.5rem;
    color: var(--darkblue);
    margin-bottom: 2rem;
    max-width: 390px;
    span {
      position: relative;
      &::before {
        content: url(${Line});
        position: absolute;
        top: 40px;
        left: 20px;
      }
    }
    &:last-child span::before {
      display: none;
    }
  }
`;

const Detail = styled.p`
  font-size: 1rem;
  color: var(--lighterblue);
  height: 63px;
`;
