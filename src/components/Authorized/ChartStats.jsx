import React from "react";
import s from "../../styles/authorizedStyles/CoinsChart.module.css";
import millify from "millify";
import { TbSquareArrowDown, TbSquareArrowUp } from "react-icons/tb";
import APY from "../../assets/AuthorizedPages/chartInterestYield.svg";

const ChartStats = ({ coinChange, maxPrice, lowPrice }) => {
  return (
    <div className={s.chartStats}>
      <div className={s.statsItem}>
        <div className={s.statsImg}>
          <img className={s.statsIcon} src={APY} alt="statsIcon" />
        </div>
        <div className={s.statsText}>
          <p className={s.statsTitle}>Interest Yield</p>
          <span className={s.statsResult}>{coinChange}%</span>
        </div>
      </div>
      <div className={s.statsItem}>
        <div className={s.statsImg}>
          <TbSquareArrowUp className={s.statsIcon} />
        </div>
        <div className={s.statsText}>
          <p className={s.statsTitle}>High</p>
          <span className={s.statsResult}>${millify(maxPrice)}</span>
        </div>
      </div>
      <div className={s.statsItem}>
        <div className={s.statsImg}>
          <TbSquareArrowDown className={s.statsIcon} />
        </div>
        <div className={s.statsText}>
          <p className={s.statsTitle}>Low</p>
          <span className={s.statsResult}>${millify(lowPrice)}</span>
        </div>
      </div>
    </div>
  );
};

export default ChartStats;
