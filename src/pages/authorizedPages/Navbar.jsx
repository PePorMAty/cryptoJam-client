import React from "react";
import s from "../../styles/authorizedStyles/Navbar.module.css";
import { Link, useNavigate } from "react-router-dom";
import dashboardIcon from "../../assets/AuthorizedPages/dasboardIcon.svg";
import logoutIcon from "../../assets/AuthorizedPages/logoutIcon.svg";
import { useDispatch } from "react-redux";
import { logout } from "../../store/slices/authSlice";

const Navbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const onLogoutClick = () => {
    dispatch(logout());
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <div className={s.navbar}>
      <nav className={s.nav}>
        <ul className={s.navList}>
          <li className={s.navItem}>
            <Link to={"/dashboard"} className={`${s.navLink} `}>
              <img
                className={s.navIcon}
                src={dashboardIcon}
                alt="dashboardIcon"
              />
              <p className={s.navText}>Dashboard</p>
            </Link>
            <Link to={"/"} className={`${s.navLink} ${s.activeLink}`}>
              <img
                className={s.navIcon}
                src={dashboardIcon}
                alt="dashboardIcon"
              />
              <p className={s.navText}>WithDraw</p>
            </Link>
            <Link to={"/"} className={`${s.navLink} `}>
              <img
                className={s.navIcon}
                src={dashboardIcon}
                alt="dashboardIcon"
              />
              <p className={s.navText}>Deposits</p>
            </Link>
            <Link to={"/"} className={`${s.navLink} `}>
              <img
                className={s.navIcon}
                src={dashboardIcon}
                alt="dashboardIcon"
              />
              <p className={s.navText}>Settings</p>
            </Link>
          </li>
        </ul>
        <div className={s.logOut} onClick={onLogoutClick}>
          <img className={s.logOutIcon} src={logoutIcon} alt="logOutIcon" />
          <p className={s.logOutText}>Log out</p>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
