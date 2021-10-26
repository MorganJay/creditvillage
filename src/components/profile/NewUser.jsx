import { useState } from "react";
import styled from "styled-components";

import { Title } from "../auth/VerifyEmail";
import GlassModal from "./../modals/GlassModal";
import CreditButton from "components/buttons/Button";
import CustomInput from "./../inputs/CustomInput";

import { useUserContext } from "hooks";

const NewUser = ({ history }) => {
  const [formData, setFormData] = useState({});
  const { userEmail } = useUserContext();
  const handleChange = (input) => (value) =>
    setFormData((data) => ({ ...data, [input]: value }));

  console.log(userEmail);
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    history.replace("/home");
  };

  return (
    <Container className="d-flex gap-4 flex-column flex-lg-row">
      <Title>
        <h1>
          Welcome to the <br /> CreditVillage Family
        </h1>
        <p>Let's get to know you</p>
      </Title>
      <GlassModal className="p-5 align-self-end h-auto">
        <Form
          onSubmit={handleSubmit}
          className="d-flex justify-content-between flex-wrap gap-4"
        >
          <NameGroup className="d-flex w-100 flex-wrap justify-content-between gap-4 gap-xl-4">
            <CustomInput
              name="firstName"
              placeholder="First name"
              required
              autoComplete="off"
              onChange={(e) => handleChange("firstName")(e.target.value)}
            />
            <CustomInput
              name="lastName"
              placeholder="Last name"
              autoComplete="off"
              onChange={(e) => handleChange("lastName")(e.target.value)}
              required
            />
          </NameGroup>
          <CustomInput
            name="phoneNumber"
            placeholder="Phone Number"
            autoComplete="off"
            maxLength="11"
            onChange={(e) => handleChange("phoneNumber")(e.target.value)}
            className="mb-5"
            required
          />
          <CreditButton
            styles={{
              borderRadius: "50px",
              maxWidth: "230px",
              marginLeft: "auto",
            }}
            type="submit"
            inverted
          >
            Continue
          </CreditButton>
        </Form>
      </GlassModal>
    </Container>
  );
};

export default NewUser;

const Container = styled.div`
  padding: 5rem 4rem 3rem;

  h1 + p {
    color: var(--lighterblue) !important;
    font-size: 1.5rem !important;
    cursor: none;
  }
`;

const Form = styled.form`
  width: 90%;
  .form-group,
  input {
    height: 82px;
  }
`;

const NameGroup = styled.div`
  div {
    flex: 1 0 256px;
  }
`;
