import React from 'react';
import { Header, Hero, Customers, Businesses, Payments, Commerce, DarkCards, DevApi, GlobalReach, Cl } from '../../container';

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
          <Cl />
        </main>
    </>
  );
}

export default LandingRoute;