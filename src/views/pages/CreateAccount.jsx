import React, { useState } from 'react';
import { Redirect, Switch } from 'react-router';
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
import CreateImage from '../../assets/images/signinimage.png';

const CreateAccount = ({ history }) => {
  const [value, setValue] = useState(false);
  const route = '/auth/login';
  return (
    <Switch>
      {/* {value ? <Redirect exact from='/auth/signup' to={route} /> : null} */}

      <Wrapper style={{ display: 'flex' }}>
        <SideWrapper>
          <Wrapper style={{ width: '70%', marginBottom: '60px' }}>
            <HeadingTwo style={{ fontSize: '24px', fontWeight: 'bold' }}>
              Be in charge of your finance, know your credit score
            </HeadingTwo>
          </Wrapper>

          <Wrapper>
            <Image
              src={CreateImage}
              style={{ width: '100%', height: '460px' }}
            />
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
          <HeadingOne>Create an Account!</HeadingOne>
          <Paragraph>Manage your credit!</Paragraph>

          <FormBox
            onSubmit={() => {
              //   setValue(!value);
              history.replace('/auth/verifyemail');
            }}
          >
            <InputField type='text' placeholder='Enter your email' required />
            <InputField
              type='password'
              placeholder='Enter your password'
              required
            />
            <InputField
              type='password'
              placeholder='Confirm your password'
              required
            />
            <CheckBox type='checkbox' />
            <LabelText>
              I have read and agree to the
              <OutLink className='blue' href='/'>
                Terms of Use
              </OutLink>
              and
              <OutLink className='blue' href=''>
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
              <StyledLink to='/auth/login' className='blue'>
                Login
              </StyledLink>
            </LabelText>
          </FormBox>
        </Wrapper>
      </Wrapper>
    </Switch>
  );
};

export default CreateAccount;
