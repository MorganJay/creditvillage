import React from "react";
import styled from "styled-components";

import withDashboardView from "../../hoc/withDashboard";

const DashboardHome = () => {
  return (
    <Container>
      <h1>Coming soon...</h1>
    </Container>
  );
};

export default withDashboardView(DashboardHome);

export const Container = styled.div`
  width: 65%;
  display: grid;
  place-items: center;
  height: 100%;
`;
