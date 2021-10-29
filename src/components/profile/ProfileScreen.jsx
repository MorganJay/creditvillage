import React from "react";
import styled from "styled-components";

import LabelledInput from "components/inputs/LabelledInput";
import LabelledSelect from "components/inputs/LabelledSelect";
import Button from "components/buttons/Button";

import { ReactComponent as Avatar } from "assets/images/profilepic.svg";

const states = ["Lagos"];
const nations = ["Nigerian"];

const ProfileScreen = () => {
  const handleSubmit = e => {
    e.preventDefault();
  };
  return (
    <>
      <ProfileImageContainer>
        <h2>PROFILE</h2>
        <Avatar />
      </ProfileImageContainer>
      <FormContainer>
        <Form onSubmit={handleSubmit}>
          <LabelledInput label="Full Name" id="fullname">
            Mary the content creator
          </LabelledInput>

          <LabelledSelect
            label="Nationality"
            id="nationality"
            options={nations}
          />

          <LabelledInput label="Address" id="address">
            1 Adeola Odeku Street, Victoria Island
          </LabelledInput>

          <LabelledSelect label="State" id="state" options={states} />

          <LabelledInput label="Phone Number" id="phone">
            080123456
          </LabelledInput>

          <LabelledInput label="Bio" id="bio" type="textarea">
            An avid reader that also loves to write, send me money.
          </LabelledInput>

          <Button>Submit</Button>
        </Form>
      </FormContainer>
    </>
  );
};

export default ProfileScreen;

const ProfileImageContainer = styled.div`
  width: 35%;
  height: 100%;
  text-align: center;
  padding: 3rem 0;
  margin-right: 3rem;

  h2 {
    font-family: "Montserrat", san-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 22px;
    letter-spacing: 0.1em;
    color: black;
  }
`;

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  align-items: center;
  width: 70%;
  background: #eff8fc;
  border-radius: 6px;
  padding: 3rem 1rem;
  padding-right: 10%;
  margin-right: 3rem;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  height: 100%;
  align-items: center;
  width: 100%;
  justify-content: space-between;
  position: relative;

  button {
    position: absolute;
    bottom: -82px;
    right: -50px;
  }
`;
