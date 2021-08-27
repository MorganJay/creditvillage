import React from "react";

import withDashboardView from "../../hoc/withDashboard";
import { Container } from "./DashboardHome";

const Result = () => {
  return (
    <Container>
      <h1>Coming soon...</h1>
    </Container>
  );
};

export default withDashboardView(Result);
