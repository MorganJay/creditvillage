import React from 'react';
import styled from 'styled-components';

const Profile = () => {
  return <ProfileContainer>This is the profile</ProfileContainer>;
};

export default Profile;

const ProfileContainer = styled.div`
  background-color: var(--whiteblue);
  width: 100%;
  display: grid;
  place-items: center;
`;
