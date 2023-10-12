import React from "react";
import { Route, Routes } from "react-router-dom";
import Dashboard from "../../pages/authorizedPages/Dashboard";
import BuyMiner from "../../pages/authorizedPages/BuyMiner";

const AuthorizedRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/miners" element={<BuyMiner />} />
    </Routes>
  );
};

export default AuthorizedRoutes;
