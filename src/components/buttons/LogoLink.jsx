import styled from "styled-components";
import { Link } from "react-router-dom";

const LogoLink = props => (
  <Link to="/" {...props}>
    <StyledV {...props}>V</StyledV>
  </Link>
);

export default LogoLink;

const StyledV = styled.h1`
  margin: 0;
  font-size: 3rem;
  font-weight: 600;
  line-height: 56px;
  font-style: normal;
  color: var(--darkblue);
  user-select: none;
  font-family: "CamptonBold", sans-serif;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;
