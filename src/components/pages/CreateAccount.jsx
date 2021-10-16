import React, { useState } from "react";
import axios from "axios";
import {
  CheckBox,
  FormBox,
  HeadingOne,
  HeadingTwo,
  Image,
  InputField,
  LabelText,
  OutLink,
  Paragraph,
  SideWrapper,
  StyledLink,
  SubmitButton,
  Wrapper,
} from "styled";
import CreateImage from "../../assets/images/signinimage.png";

const CreateAccount = ({ history }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirm_password, setConfirmPassword] = useState("");
  const [error, setError] = useState(false);
  const [checked, setChecked] = useState(false);
  const backend_url = process.env.REACT_APP_BASE_URL;
  const token = process.env.REACT_APP_BEARER_TOKEN;

  console.log(backend_url);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(false);

    try {
      const res = await axios.post(
        `${backend_url}/v1/register`,

        {
          username,
          password,
          confirm_password,
          checked,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        }
      );
      res.data && history.replace("/auth/verifyemail");
      console.log(res.data);
    } catch (err) {
      setError(true);
    }
  };

  console.log(checked);
  return (
    <Wrapper style={{ display: "flex" }}>
      <SideWrapper>
        <Wrapper style={{ width: "70%", marginBottom: "60px" }}>
          <HeadingTwo style={{ fontSize: "24px", fontWeight: "bold" }}>
            Be in charge of your finance, know your credit score
          </HeadingTwo>
        </Wrapper>

        <Wrapper>
          <Image src={CreateImage} style={{ width: "100%", height: "460px" }} />
        </Wrapper>
      </SideWrapper>
      <Wrapper
        className="main"
        style={{
          width: "calc(100% - 520px)",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <HeadingOne>Create an Account!</HeadingOne>
        <Paragraph>Manage your credit!</Paragraph>
        <FormBox onSubmit={handleSubmit}>
          <InputField
            type="text"
            placeholder="Enter your email"
            required
            onChange={(e) => setUsername(e.target.value)}
          />
          <InputField
            type="password"
            placeholder="Enter your password"
            required
            onChange={(e) => setPassword(e.target.value)}
          />
          <InputField
            type="password"
            placeholder="Confirm your password"
            required
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <CheckBox type="checkbox" onChange={(e) => setChecked(!checked)} />
          <LabelText>
            I have read and agree to the
            <OutLink className="blue" href="/">
              Terms of Use
            </OutLink>
            and
            <OutLink className="blue" href="">
              Privacy Policy
            </OutLink>
          </LabelText>
          <SubmitButton
          //   onClick={() => {
          //     setValue(!value);
          //   }}
          >
            Register
          </SubmitButton>
          <LabelText>
            Already have an account?
            <StyledLink to="/auth/login" className="blue">
              Login
            </StyledLink>
          </LabelText>
        </FormBox>
        {error && (
          <span style={{ color: "red", marginTop: "10px" }}>
            Something went wrong!
          </span>
        )}{" "}
      </Wrapper>
    </Wrapper>
  );
};

export default CreateAccount;
