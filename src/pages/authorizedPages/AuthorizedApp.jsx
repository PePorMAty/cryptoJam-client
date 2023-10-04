import React from "react";
import s from "../../styles/authorizedStyles/authorizedApp.module.css";
import bg from "../../assets/AuthorizedPages/appBg.png";
import AuthorizedHeader from "./AuthorizedHeader";
import Navbar from "./Navbar";
import AuthorizedRoutes from "../../components/Authorized/AuthorizedRoutes";
import AuthorizedContainer from "../../components/Authorized/AuthorizedContainer";

const AuthorizedApp = () => {
  return (
    <div className={s.app} style={{ backgroundImage: `url(${bg})` }}>
      <AuthorizedHeader />
      <div className={s.wrapper}>
        <AuthorizedContainer>
          <Navbar />
          <AuthorizedRoutes />
        </AuthorizedContainer>
      </div>
    </div>
  );
};

export default AuthorizedApp;
