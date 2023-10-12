import React from "react";
import s from "../../styles/authorizedStyles/authorizedHeader.module.css";
import AuthorizedContainer from "./AuthorizedContainer";
import logo from "../../assets/AuthorizedPages/authLogo.png";
import avatar from "../../assets/AuthorizedPages/avatar.jpg";
import { Link } from "react-router-dom";
import { useCurrentQuery } from "../../store/services/auth";

const AuthorizedHeader = () => {
  const { data } = useCurrentQuery();

  return (
    <header className={s.header}>
      <AuthorizedContainer>
        <div className={s.wrapper}>
          <div className={s.logo}>
            <img className={s.logoImg} src={logo} alt="logo" />
            <p className={s.logoTitle}>CryptoJam</p>
          </div>
          <Link to={"/profile"} className={s.profile}>
            <p className={s.name}>{data.name}</p>
            <img className={s.avatar} src={avatar} alt="avatar" />
          </Link>
        </div>
      </AuthorizedContainer>
    </header>
  );
};

export default AuthorizedHeader;
