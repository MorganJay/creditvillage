import React from 'react';
import { Link } from 'react-router-dom';

import Button from '../components/buttons/Button';
import AuthHeader from './../components/headers/AuthHeader';

import '../assets/css/home.styles.css';

const Home = () => {
  return (
    <div className='home'>
      <AuthHeader />
      <div className='main'>
        <h1 className='text-white'>
          Know your <br /> Credit score!
        </h1>
        <Link to='/auth'>
          <Button>Click to Start</Button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
