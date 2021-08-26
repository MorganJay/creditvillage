import React from 'react';
import styled from 'styled-components';

import Arrow from '../../assets/images/arrow.png';

const Activity = ({ bluelogo, name, title, caption }) => {
  return (
    <Box>
      <Heading bluelogo={bluelogo}>
        <div>{name}</div>
        <small>Wed, 06:00pm</small>
      </Heading>
      <Content>
        <div>
          <p>{title}</p>
          <small>{caption}</small>
        </div>
        <span>
          <img src={Arrow} alt='Arrow' />
        </span>
      </Content>
    </Box>
  );
};

export default Activity;

const Box = styled.div`
  background: #ffffff;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  padding: 1.5rem;

  div,
  p {
    font: normal 600 12px/15px 'Montserrat', san-serif;
  }

  small {
    color: #bdbdbd;
    font: normal 600 10px/12px 'Montserrat', san-serif;
  }
`;

const Heading = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-right: 20px;
  div {
    background: ${props =>
      props.bluelogo ? 'rgba(48, 59, 160, 0.3)' : 'rgba(187, 107, 217, 0.3)'};
    border-radius: 10.7692px;
    color: white;
    padding: 10px 30px 20px 20px;
  }
`;

const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-right: 10px;
  p {
    color: #333333;
    margin: 15px auto 10px;
  }
`;
