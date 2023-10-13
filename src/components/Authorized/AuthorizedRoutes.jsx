import React from "react";
import { Route, Routes } from "react-router-dom";
import Dashboard from "../../pages/authorizedPages/Dashboard";
import BuyMiner from "../../pages/authorizedPages/BuyMiner";
import Profile from "../../pages/authorizedPages/Profile";
import SingleMiner from "./SingleMiner";

const AuthorizedRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/miners" element={<BuyMiner />} />
      <Route path="/miners/:id" element={<SingleMiner />} />
      <Route path="/profile" element={<Profile />} />
    </Routes>
  );
};

export default AuthorizedRoutes;
