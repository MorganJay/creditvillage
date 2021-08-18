import React from 'react';

import CreditButton from '../../components/buttons/Button';

import Logo from '../../assets/images/Vlogo.svg';
import '../../assets/css/home.styles.css';

const Home = () => {
  return (
    <div className='home'>
      <header className='header'>
        <img src={Logo} alt='Credit Village Logo' />
        <CreditButton>Sign In</CreditButton>
      </header>
      <main className='main'>
        <h1 className='text-white'>
          Know your <br /> Credit score!
        </h1>
        <CreditButton>Click to Start</CreditButton>
      </main>
    </div>
  );
};

export default Home;
