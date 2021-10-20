import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <Aside className="d-flex flex-column justify-content-between">
      <Link to="/profile">
        <span>Hi</span> Mary!
      </Link>
    </Aside>
  );
};

export default Sidebar;

const Aside = styled.aside`
  width: 20%;
  /* height: 100%; */
  background-color: var(--bg-primary);
  padding: 9rem 3rem 0;
  border-radius: 0px 50px 50px 0px;
  a {
    span {
      color: var(--lighterblue);
    }
    color: var(--darkblue);
  }
`;
