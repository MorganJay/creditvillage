import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import Button from "./Button";

const ButtonLink = ({ path, children, className }) => {
  return (
    <Link to={path}>
      <Button className={className}>{children}</Button>
    </Link>
  );
};

export default ButtonLink;

export const ListItemLink = ({
  active,
  path,
  children,
  className,
  ...props
}) => {
  return (
    <a href={path}>
      <li className={className} active={active ? "true" : "false"} {...props}>
        {children}
      </li>
    </a>
  );
};

ListItemLink.propTypes = {
  active: PropTypes.bool,
};
