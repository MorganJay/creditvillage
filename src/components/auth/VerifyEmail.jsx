import { useState } from "react";
import styled from "styled-components";
import { toast } from "react-toastify";

import GlassModal from "../modals/GlassModal";
import CreditButton from "../buttons/Button";
import PinInput from "../inputs/PinInput";
import Modal from "components/modals";

import { useUserContext } from "hooks";
import auth from "services/authService";
import http from "services/httpService";

import UserIcon from "../../assets/images/user.png";

const modalContent = {
  icon: UserIcon,
  heading: "Yaaay!!!",
  subheading: "Account successfully verified",
  path: "/auth/login",
  buttonText: "Proceed",
  showButton: true,
};

const VerifyEmail = ({ history }) => {
  const [otp, setOtp] = useState("");
  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(false);
  const { userEmail } = useUserContext();

  const handleOtpChange = (e) => setOtp(e);

  const clearLoading = () => {
    setOtp("");
    setLoading(false);
  };

  const handleResendCode = async () => {
    try {
      setLoading(true);
      const {
        data: { status, message },
      } = await auth.resendOTP(userEmail);
      if (!http.apiError(status, message)) {
        toast.success(message);
        clearLoading();
      } else {
        toast.error(message);
        clearLoading();
      }
    } catch (error) {
      if (http.expectedError(error, 400)) {
        const { Email } = error.response.data.errors;
        toast.error(...Email);
        clearLoading();
      }

      clearLoading();
    }
  };

  const handleSubmit = async () => {
    setLoading(true);
    // try {
    //   setLoading(true);
    //   const {
    //     data: { status, message },
    //   } = await auth.verifyMail(userEmail, otp);

    //   if (!http.apiError(status)) {
    //     clearLoading();
    //     toast.success(message);
    //     setShow(true);
    //   } else {
    //     toast.error(message);
    //     clearLoading();
    //   }
    // } catch (error) {
    //   if (http.expectedError(error, 400)) {
    //     const { Email, Token } = error.response.data.errors;
    //     const message = Email ? Email[0] : Token[0];
    //     toast.error(message);
    //     clearLoading();
    //   }

    //   clearLoading();
    //   //toast.error(error.response.data);
    // }

    setTimeout(() => {
      toast.success("Email Verified");
      setShow(true);
    }, 1500);
    clearLoading();
  };

  return (
    <Container className="w-100 d-flex flex-column flex-lg-row justify-content-between h-100">
      {show && <Modal {...modalContent} onClose={() => setShow(false)} />}
      <Title>
        <h1 className="font-weight-semi-bold">Enter the Code sent to</h1>
        <p>{userEmail || "maryagatha@gmail.com"}</p>
        <p className="font-weight-semi-bold" onClick={() => history.goBack()}>
          Wrong email?
        </p>
      </Title>
      <VerifyModal className="align-self-center">
        <PinInput
          name="emailOtp"
          value={otp}
          numInputs={6}
          placeholder="______"
          onChange={handleOtpChange}
        />
        <p>Enter 6-digit OTP sent to your email</p>
        <EmailActions className="d-flex w-100 justify-content-between align-items-center mt-3">
          <p className="m-0">
            Didn't get the OTP? <span onClick={handleResendCode}>Resend</span>
          </p>
          <Button
            onClick={handleSubmit}
            loading={loading}
            disabled={loading}
            inverted
          >
            Verify
          </Button>
        </EmailActions>
      </VerifyModal>
    </Container>
  );
};

export default VerifyEmail;

const Container = styled.div`
  padding: 5rem 3rem 3rem;
  position: relative;
`;

export const Title = styled.div`
  padding: 5rem 0;
  margin-left: 3%;
  min-width: 370px;
  h1 {
    color: var(--lightblue);
    font-size: 2.25rem;
    font-family: "CamptonMedium";
    line-height: 42px;
  }
  p {
    color: var(--lighterblue);
    font-size: 1.5rem;
    &:last-child {
      color: var(--darkblue);
      cursor: pointer;
      width: fit-content;
    }
  }
`;

const VerifyModal = styled(GlassModal)`
  padding: 5rem 2rem;
  grid-gap: 1rem;
  max-width: 712px;
  max-height: 400px;
  width: fit-content;
`;

const EmailActions = styled.div`
  span {
    color: var(--darkblue);
    cursor: pointer;
  }
`;

const Button = styled(CreditButton)`
  font-size: 18px;
  border-radius: 50px;
  line-height: 21px;
`;
