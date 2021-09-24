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

export const ListItemLink = ({ path, children, className, ...props }) => {
  return (
    <Link to={path}>
      <li className={className} {...props}>
        {children}
      </li>
    </Link>
  );
};
