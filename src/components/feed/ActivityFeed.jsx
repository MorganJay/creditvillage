import React from "react";
import styled from "styled-components";
import Activity from "./Activity";

const ActivityFeed = () => {
  return (
    <Container>
      <h1>Activity Feed</h1>
      <Activity
        name="C"
        title="Checked Credit score"
        caption="You just checked your..."
      />
      <Activity
        name="C"
        title="Checked Credit score"
        caption="You just checked your..."
        bluelogo
      />
      <Activity
        name="D"
        title="Downloaded Credit report"
        caption="You just downloaded your..."
      />
      <Activity
        name="D"
        title="Downloaded Credit report"
        caption="You just downloaded your..."
      />
    </Container>
  );
};

export default ActivityFeed;

const Container = styled.aside`
  width: 35%;
  display: flex;
  flex-direction: column;
  padding: 0 2rem 2rem;
  overflow: hidden;
  min-height: 100%;
  overflow-y: scroll;
  gap: 1rem;
  -ms-overflow-style: none;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }
  h1 {
    font: normal 400 27px/33px "Montserrat", san-serif;
    margin-left: -20px;
    margin-top: 0;
    margin: 0 0 0 -20px;
    padding-bottom: 10px;
    position: sticky;
    top: 0;
    background: var(--whiteblue);
  }
`;
