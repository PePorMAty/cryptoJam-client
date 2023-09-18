import React from "react";
import { Link } from "react-router-dom";
import Logotype from "../../assets/logo.png";
import s from "../../styles/Header.module.css";

const Logo = () => {
  return (
    <Link className={s.logoLink} to="/">
      <img className={s.logo} src={Logotype} alt="logo" />
    </Link>
  );
};

export default Logo;
