import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import AboutUs from "../pages/AboutUs";
import Faq from "../pages/Faq";
import News from "../pages/News";

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/aboutUs" element={<AboutUs />} />
      <Route path="/faq" element={<Faq />} />
      <Route path="/news" element={<News />} />
    </Routes>
  );
};

export default Routers;
