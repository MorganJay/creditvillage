import React from "react";
import CustomInput from "../inputs/CustomInput";

const SignUpForm = () => {
  return (
    <form>
      <CustomInput type="email" name="email" placeholder="Email" required />
      <CustomInput name="password" placeholder="Password" required />
    </form>
  );
};

export default SignUpForm;
