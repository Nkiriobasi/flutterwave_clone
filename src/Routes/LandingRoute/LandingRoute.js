import React from 'react';
import { Header, Hero, Customers, Businesses, Payments, Commerce, DarkCards, DevApi, GlobalReach } from '../../container';

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
          <DevApi />
          <GlobalReach />
        </main>
    </>
  );
}

export default LandingRoute;