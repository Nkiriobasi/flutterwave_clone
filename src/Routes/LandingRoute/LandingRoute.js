import React from 'react';
import { Header, Hero, Customers } from '../../container';

const LandingRoute = () => {
  return (
    <>
        <Header />

        <main id='home'>
          <Hero />
          <Customers />
        </main>
    </>
  );
}

export default LandingRoute;