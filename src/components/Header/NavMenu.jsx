import React from "react";
import s from "../../styles/Header.module.css";
import { Link } from "react-router-dom";

const NavMenu = () => {
  return (
    <nav className={s.navMenu}>
      <ul className={s.menuList}>
        <li className={s.list}>
          <Link to="/aboutUs" className={s.link}>
            <p className={s.listItem}>About Us</p>
          </Link>
        </li>
        <li className={s.list}>
          <Link to="/" className={s.link}>
            <p className={s.listItem}>News</p>
          </Link>
        </li>
        <li className={s.list}>
          <Link to="/faq" className={s.link}>
            <p className={s.listItem}>FAQ</p>
          </Link>
        </li>
        <li className={s.list}>
          <Link to="/" className={s.link}>
            <p className={s.listItem}>Support</p>
          </Link>
        </li>
        <li className={s.list}>
          <Link to="/" className={s.link}>
            <p className={s.auth}>Sign in</p>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavMenu;
