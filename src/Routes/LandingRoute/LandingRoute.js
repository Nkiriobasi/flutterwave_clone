import React from 'react';
import { Header, Hero, Customers, Businesses, Payments, Commerce, DarkCards } from '../../container';

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
          <DarkCards />
        </main>
    </>
  );
}

export default LandingRoute;