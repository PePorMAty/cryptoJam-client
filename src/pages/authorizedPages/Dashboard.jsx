import React from "react";
import s from "../../styles/authorizedStyles/Dashboard.module.css";
import CoinsChart from "../../components/Authorized/CoinsChart";
import CoinsAssets from "../../components/Authorized/CoinsAssets";
import TokensInBalance from "../../components/Authorized/TokensInBalance";

const Dashboard = () => {
  return (
    <div className={s.dashboard}>
      <div className={s.wrapper}>
        <CoinsChart />
        <CoinsAssets />
      </div>
      <TokensInBalance />
    </div>
  );
};

export default Dashboard;
