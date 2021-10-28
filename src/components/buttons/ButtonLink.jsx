import React from "react";
import { Link } from "react-router-dom";

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
    <li className={className} active={active ? "true" : "false"} {...props}>
      <a href={path}>{children}</a>
    </li>
  );
};
