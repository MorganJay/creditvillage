import React, { useState } from "react";
import { MDBIcon } from "mdbreact";

import "@fortawesome/fontawesome-free/css/all.min.css";

const usePasswordToggle = () => {
  const [visible, SetVisibility] = useState(false);

  const Icon = (
    <MDBIcon
      icon={visible ? "eye-slash" : "eye"}
      onClick={() => SetVisibility(visibility => !visibility)}
    />
  );

  const inputType = visible ? "text" : "password";

  return [inputType, Icon];
};

export default usePasswordToggle;
