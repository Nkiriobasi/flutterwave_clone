import React from 'react';
import { Header, Hero, Customers, Businesses, Payments, } from '../../container';

const LandingRoute = () => {
  return (
    <>
        <Header />

        <main id='home'>
          <Hero />
          <Customers />
          <Businesses />
          <Payments />
        </main>
    </>
  );
}

export default LandingRoute;