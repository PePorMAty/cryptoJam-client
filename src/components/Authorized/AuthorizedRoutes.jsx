import React from "react";
import { Route, Routes } from "react-router-dom";
import Dashboard from "../../pages/authorizedPages/Dashboard";

const AuthorizedRoutes = () => {
  return (
    <Routes>
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  );
};

export default AuthorizedRoutes;
