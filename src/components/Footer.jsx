import React from "react";
import { useLocation } from "react-router-dom";
import s from "../styles/Footer.module.css";

const Footer = () => {
  const params = useLocation();
  if (params.pathname === "/") {
    return <div className={s.homeFooter}></div>;
  }
  return <div>Footer</div>;
};

export default Footer;
