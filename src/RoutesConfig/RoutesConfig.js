import React from 'react';
import { Routes, Route } from "react-router-dom";
import { LandingRoute } from '../Routes';

const RoutesConfig = () => {
  return (
    <>
        <Routes>
            <Route path="/" element={<LandingRoute />} />
        </Routes>
    </>
  );
  
}

export default RoutesConfig;
