import { Link } from "react-router-dom";
import styled from "styled-components";

const Sidebar = ({ name }) => {
  return (
    <Aside className="d-flex flex-column justify-content-between">
      <Link to="/profile">
        <span>Hi</span> {name}!
      </Link>
    </Aside>
  );
};

export default Sidebar;

const Aside = styled.aside`
  width: 20%;
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
