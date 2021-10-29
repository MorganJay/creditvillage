import styled from "styled-components";
import { Link } from "react-router-dom";

import LogoPng from "assets/images/V.png";

const LogoLink = props => (
  <Link to="/" {...props}>
    <StyledV src={LogoPng} {...props} alt="V Logo" />
  </Link>
);

export default LogoLink;

const StyledV = styled.img`
  margin: 0;
  user-select: none;
`;
