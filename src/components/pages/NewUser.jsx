import React from 'react';
import {
  HeadingOne,
  InputField,
  Paragraph,
  SideWrapper,
  Wrapper,
} from 'styled';

import { CreditButton } from 'components/buttons/Button';

const NewUser = ({ history, email }) => {
  const handleSubmit = e => {
    e.preventDefault();
    console.log('submitting', e);
    history.replace('/auth/resetpassword');
  };
  const forgotPassword = () => {
    history.replace('/auth/resetpassword');
  };
  return (
    <Wrapper
      style={{ display: 'flex', alignItems: 'flex-start', paddingTop: '8rem' }}
    >
      <SideWrapper className='start'>
        <HeadingOne className='alternative'>
          Welcome to the CreditVillage Family
        </HeadingOne>
        <Paragraph>Let’s get to know you</Paragraph>
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
        <Wrapper
          style={{
            textAlign: 'center',
            padding: '5rem 2rem',
            boxShadow: '6px 6px 15px 0px #53768933',
            borderRadius: '10px',
          }}
        >
          <form
            autoComplete='off'
            onSubmit={handleSubmit}
            style={{ width: '440px' }}
          >
            <Wrapper style={{ display: 'flex', gap: '10px' }}>
              <InputField
                type='text'
                name='first_name'
                placeholder='First name'
              />
              <InputField
                type='text'
                name='last_name'
                placeholder='Last name'
              />
            </Wrapper>

            <InputField
              type='tel'
              name='phone_number'
              placeholder='Phone number'
            />
            <CreditButton onClick={forgotPassword}>Submit</CreditButton>
          </form>
        </Wrapper>
      </Wrapper>
    </Wrapper>
  );
};

export default NewUser;
