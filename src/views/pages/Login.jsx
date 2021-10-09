import React from 'react';
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
} from 'styled';
import LoginImage from '../../assets/images/createimage.png';

const Login = () => {
  return (
    <Wrapper style={{ display: 'flex' }}>
      <SideWrapper>
        <Wrapper style={{ width: '70%', marginBottom: '60px' }}>
          <HeadingTwo style={{ fontSize: '24px', fontWeight: 'bold' }}>
            Welcome back, Pick up where you left off with your finances{' '}
          </HeadingTwo>
        </Wrapper>

        <Wrapper>
          <Image src={LoginImage} style={{ width: '100%', height: '460px' }} />
        </Wrapper>
      </SideWrapper>
      <Wrapper
        style={{
          width: 'calc(100% - 520px)',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <HeadingOne>Jump right back in!</HeadingOne>
        <Paragraph>Keep track of your credits</Paragraph>

        <FormBox>
          <InputField type='text' placeholder='Enter your email' />
          <InputField type='password' placeholder='Enter your password' />
          <StyledLink to='/auth/forgotpassword' className='blue'>
            Forgot Password?
          </StyledLink>
          <SubmitButton>Sign in</SubmitButton>
          <LabelText>
            Don’t have an account?
            <StyledLink to='/auth/signup' className='blue'>
              Create Account{' '}
            </StyledLink>
          </LabelText>
        </FormBox>
      </Wrapper>
    </Wrapper>
  );
};

export default Login;
