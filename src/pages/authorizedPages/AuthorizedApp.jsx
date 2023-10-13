import React from "react";
import s from "../../styles/authorizedStyles/authorizedApp.module.css";
import bg from "../../assets/AuthorizedPages/appBg.png";
import Navbar from "../../components/Authorized/Navbar";
import AuthorizedRoutes from "../../components/Authorized/AuthorizedRoutes";
import AuthorizedContainer from "../../components/Authorized/AuthorizedContainer";
import AuthorizedHeader from "../../components/Authorized/AuthorizedHeader";

const AuthorizedApp = () => {
  return (
    <div className={s.app} style={{ backgroundImage: `url(${bg})` }}>
      <AuthorizedHeader />

      <AuthorizedContainer>
        <div className={s.wrapper}>
          <Navbar />
          <AuthorizedRoutes />
        </div>
      </AuthorizedContainer>
    </div>
  );
};

export default AuthorizedApp;
