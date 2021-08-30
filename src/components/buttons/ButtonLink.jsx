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
