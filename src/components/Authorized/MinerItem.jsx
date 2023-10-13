import React from "react";
import s from "../../styles/authorizedStyles/BuyMiner.module.css";
import { Link } from "react-router-dom";

const MinerItem = ({ name, price, img, description, increase, nameClass }) => {
  return (
    <div className={s.minerItem}>
      <div className={s.preview}>
        <img className={s.minerImg} src={img} alt="miner" />
        <div className={nameClass}>
          <p className={s.name}>{name}</p>
          <span className={s.increase}>{increase}</span>
        </div>
      </div>
      <p className={s.description}>{description}</p>
      <Link to={`${name}`} className={s.buyBtn}>
        Buy now
      </Link>
    </div>
  );
};

export default MinerItem;
