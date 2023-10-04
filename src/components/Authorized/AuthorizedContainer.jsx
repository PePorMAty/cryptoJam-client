import React from "react";
import s from "../../styles/authorizedStyles/authorizedApp.module.css";

const AuthorizedContainer = ({ children }) => {
  return <div className={s.container}>{children}</div>;
};

export default AuthorizedContainer;
