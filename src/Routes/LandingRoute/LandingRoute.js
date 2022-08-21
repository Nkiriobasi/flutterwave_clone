import React from 'react';
import { Header, Hero, Customers, Businesses } from '../../container';

const LandingRoute = () => {
  return (
    <>
        <Header />

        <main id='home'>
          <Hero />
          <Customers />
          <Businesses />
        </main>
    </>
  );
}

export default LandingRoute;