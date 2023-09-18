import React from "react";
import Logo from "./Logo";
import NavMenu from "./NavMenu";

import s from "../../styles/Header.module.css";

const Header = () => {
  return (
    <div className={s.header}>
      <div className={s.wrapper}>
        <Logo />
        <NavMenu />
      </div>
    </div>
  );
};

export default Header;
