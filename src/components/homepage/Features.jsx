import styled from "styled-components";

import Speedometer from "assets/images/speedometer.svg";
import Decision from "assets/images/decision.svg";
import Bulb from "assets/images/lightbulb.svg";

const data = [
  {
    img: Speedometer,
    heading: "Calculate and Know your credit score",
    content:
      "Understand your value in credits and how it affects your application process",
  },
  {
    img: Decision,
    heading: "Take better financial decisions",
    content: "Get recommendations that suit you",
  },
  {
    img: Bulb,
    heading: "Maximize your chances",
    content: "Learn what affect and increase your credit score",
  },
];

const Features = () => {
  return (
    <Section id="features">
      <h2 className="text-center mb-4">
        CreditVillage tailored just to meet your credit needs
      </h2>
      <CardContainer>
        {data.map(({ img, heading, content }, index) => (
          <Card
            key={index}
            className="d-flex flex-column justify-content-center"
          >
            <img src={img} alt={heading} className="mb-4" width="48" />
            <h4 className="mb-3">{heading}</h4>
            <p className="pl-2">{content}</p>
          </Card>
        ))}
      </CardContainer>
    </Section>
  );
};

export default Features;

const Section = styled.section`
  padding: 1rem 2rem 0;
  min-height: 100vh;
  margin-bottom: 5rem;
  scroll-margin-top: 8rem;
  h2 {
    color: var(--lightblue);
    font-size: 2.25rem;
    font-weight: 600;
  }
`;

export const CardContainer = styled.div`
  display: flex;
  min-height: 100vh;
  max-height: fit-content;
  justify-content: space-evenly;
  align-items: flex-end;
  flex-wrap: wrap;
  gap: 2rem;
  width: 100%;
  margin: 0 auto;
`;

export const Card = styled.div`
  padding: 4rem 1.5rem;
  box-shadow: 6px 6px 15px rgba(54, 2, 89, 0.2);
  border-radius: 20px;
  max-width: 400px;
  height: 440px;

  h4 {
    color: var(--darkblue);
    font-weight: 600;
  }

  h4,
  p {
    max-width: 310px;
    line-height: 28px;
  }

  p {
    font-weight: 500;
    font-size: 1.5rem;
  }

  &:nth-child(2) {
    align-self: center;
    box-shadow: none;
    background-color: var(--bg-primary);
  }
`;
