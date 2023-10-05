import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "../../store/slices/authSlice";
import dashboardIcon from "../../assets/AuthorizedPages/navIcons/dasboardIcon.svg";
import logoutIcon from "../../assets/AuthorizedPages/navIcons/logoutIcon.svg";
import withdrawIcon from "../../assets/AuthorizedPages/navIcons/withdraw.svg";
import profileIcon from "../../assets/AuthorizedPages/navIcons/profile.svg";
import s from "../../styles/authorizedStyles/Navbar.module.css";

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
            <NavLink
              to={"/dashboard"}
              className={({ isActive }) =>
                isActive ? `${s.activeLink}` : `${s.navLink}`
              }
            >
              <img
                className={s.navIcon}
                src={dashboardIcon}
                alt="dashboardIcon"
              />
              <p className={s.navText}>Dashboard</p>
            </NavLink>
            <NavLink
              to={"/withdraw"}
              className={({ isActive }) =>
                isActive ? `${s.activeLink}` : `${s.navLink}`
              }
            >
              <img className={s.navIcon} src={withdrawIcon} alt="withdraw" />
              <p className={s.navText}>Withdraw</p>
            </NavLink>
            <NavLink
              to={"/calculator"}
              className={({ isActive }) =>
                isActive ? `${s.activeLink}` : `${s.navLink}`
              }
            >
              <img className={s.navIcon} src={dashboardIcon} alt="calculator" />
              <p className={s.navText}>Calculator</p>
            </NavLink>
            <NavLink
              to={"/profile"}
              className={({ isActive }) =>
                isActive ? `${s.activeLink}` : `${s.navLink}`
              }
            >
              <img className={s.navIcon} src={profileIcon} alt="profile" />
              <p className={s.navText}>Profile</p>
            </NavLink>
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
