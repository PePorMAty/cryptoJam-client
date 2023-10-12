import { Spin } from "antd";
import React from "react";
import s from "../styles/Loader.module.css";

const Loader = () => {
  return (
    <div className={s.loader}>
      <Spin size="large" />
    </div>
  );
};

export default Loader;
