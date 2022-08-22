import React from 'react';
import { Header, Hero, Customers, Businesses, Payments, Commerce } from '../../container';

const LandingRoute = () => {
  return (
    <>
        <Header />

        <main id='home'>
          <Hero />
          <Customers />
          <Businesses />
          <Payments />
          <Commerce />
        </main>
    </>
  );
}

export default LandingRoute;