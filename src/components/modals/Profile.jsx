import React from 'react';
import styled from 'styled-components';

import Button from '../buttons/Button';

import { ReactComponent as Avatar } from '../../assets/images/profilepic.svg';

const Profile = () => {
  return (
    <Wrapper>
      <ProfileImageContainer>
        <h2>PROFILE</h2>
        <Avatar style={{ borderRadius: '50' }} />
      </ProfileImageContainer>
      <FormContainer>
        <form>
          <input type='text' />
          <select name='nationality' id=''>
            <option value='Nigerian'>Nigerian</option>
          </select>
          <input type='text' />
          <select name='nationality' id=''>
            <option value='Nigerian'>Nigerian</option>
          </select>
          <input type='text' />
          <input
            name='bio'
            defaultValue='An avid reader that also loves to write, send me money.
'
          />

          <Button type='submit'>Submit</Button>
        </form>
      </FormContainer>
    </Wrapper>
  );
};

export default Profile;

const Wrapper = styled.div`
  display: flex;
  width: 80%;
  justify-content: space-between;
  height: 100%;
`;

const ProfileImageContainer = styled.div`
  /* display: grid;
  place-items: center; */
  width: 40%;
  height: 100%;
  text-align: center;
  padding: 3rem 0;
`;

const FormContainer = styled.div``;
