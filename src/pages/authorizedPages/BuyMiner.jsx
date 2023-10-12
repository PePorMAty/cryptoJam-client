import React from "react";
import bronze from "../../assets/AuthorizedPages/miners/bronze.png";
import silver from "../../assets/AuthorizedPages/miners/silver.png";
import gold from "../../assets/AuthorizedPages/miners/gold.png";
import platinum from "../../assets/AuthorizedPages/miners/platinum.png";
import diamond from "../../assets/AuthorizedPages/miners/diamond.png";
import legendary from "../../assets/AuthorizedPages/miners/legendary.png";
import s from "../../styles/authorizedStyles/BuyMiner.module.css";

const BuyMiner = () => {
  return (
    <div className={s.buyMiner}>
      <div className={s.wrapper}>
        <div className={s.minerItem}>
          <div className={s.preview}>
            <img className={s.minerImg} src={bronze} alt="miner" />
            <div className={s.bronze}>
              <p className={s.name}>Bronze</p>
              <span className={s.increase}>x0.5</span>
            </div>
          </div>
          <p className={s.description}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempos
          </p>
          <button className={s.buyBtn}>But now</button>
        </div>
        <div className={s.minerItem}>
          <div className={s.preview}>
            <img className={s.minerImg} src={silver} alt="miner" />
            <div className={s.silver}>
              <p className={s.name}>Silver</p>
              <span className={s.increase}>x1.0</span>
            </div>
          </div>
          <p className={s.description}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempos
          </p>
          <button className={s.buyBtn}>But now</button>
        </div>
        <div className={s.minerItem}>
          <div className={s.preview}>
            <img className={s.minerImg} src={gold} alt="miner" />
            <div className={s.gold}>
              <p className={s.name}>Gold</p>
              <span className={s.increase}>x3.0</span>
            </div>
          </div>
          <p className={s.description}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempos
          </p>
          <button className={s.buyBtn}>But now</button>
        </div>
        <div className={s.minerItem}>
          <div className={s.preview}>
            <img className={s.minerImg} src={platinum} alt="miner" />
            <div className={s.platinum}>
              <p className={s.name}>Platinum</p>
              <span className={s.increase}>x12.0</span>
            </div>
          </div>
          <p className={s.description}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempos
          </p>
          <button className={s.buyBtn}>But now</button>
        </div>
        <div className={s.minerItem}>
          <div className={s.preview}>
            <img className={s.minerImg} src={diamond} alt="miner" />
            <div className={s.diamond}>
              <p className={s.name}>Diamond</p>
              <span className={s.increase}>x38.0</span>
            </div>
          </div>
          <p className={s.description}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempos
          </p>
          <button className={s.buyBtn}>But now</button>
        </div>
        <div className={s.minerItem}>
          <div className={s.preview}>
            <img className={s.minerImg} src={legendary} alt="miner" />
            <div className={s.legendary}>
              <p className={s.name}>Legendary</p>
              <span className={s.increase}>x86.0</span>
            </div>
          </div>
          <p className={s.description}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempos
          </p>
          <button className={s.buyBtn}>But now</button>
        </div>
      </div>
    </div>
  );
};

export default BuyMiner;
