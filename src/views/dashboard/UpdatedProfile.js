import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import withDashboardView from './../../hoc/withDashboard';
import Button from './../../components/buttons/Button';

import { ReactComponent as Verified } from '../../assets/images/accountverification.svg';

const UpdatedProfile = () => {
  return (
    <Container>
      <div>
        <Verified />
        <p>
          Profile updated <br /> successfully
        </p>
      </div>
      <section>
        <h1>Link your bank accounts to check your credit score</h1>
        <Link to='/linkaccount'>
          <Button
            style={{
              color: '#FFFFFF',
              background: '#022D45',
              boxShadow: '0 10px 20px rgba(82, 117, 136, 0.12)'
            }}>
            Link Accounts
          </Button>
        </Link>
      </section>
    </Container>
  );
};

export default withDashboardView(UpdatedProfile);

const Container = styled.div`
  width: 65%;
  display: flex;
  flex-direction: column;
  place-items: center;
  height: 100%;
  margin-top: -1em;
  gap: 2rem;
  div {
    background: #f8fdff;
    border: 1px solid #eff8fc;
    border-radius: 50px;
    display: grid;
    place-items: center;
    padding: 2rem 5rem;
    text-align: center;
    p {
      font: normal normal 25px/30px 'Montserrat', san-serif;
      color: black;
    }
  }

  section {
    display: grid;
    place-items: center;
    width: 51%;
    grid-gap: 1em;
    
    h1 {
      font: normal bold 30px/37px 'MontserratBold', san-serif;
      margin-bottom: 2rem;
    }
  }
`;
