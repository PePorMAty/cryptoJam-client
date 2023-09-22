import React from "react";
import Slider from "react-slick";
import ETH from "../../../assets/coins/eth.png";
import SOL from "../../../assets/coins/sol.png";
import TRX from "../../../assets/coins/trx.png";
import BTC from "../../../assets/coins/btc.png";
import SHIB from "../../../assets/coins/shib.png";
import TON from "../../../assets/coins/ton.png";
import UNI from "../../../assets/coins/uni.png";
import MATIC from "../../../assets/coins/matic.png";
import BCH from "../../../assets/coins/bch.png";
import BNB from "../../../assets/coins/bnb.png";
import DOGE from "../../../assets/coins/doge.png";
import BABYDOGE from "../../../assets/coins/babyDoge.png";
import USDT from "../../../assets/coins/usdt.png";
import XRP from "../../../assets/coins/xrp.png";
import s from "../../../styles/Slider.module.css";

const CoinsSlider = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1200,
    autoplaySpeed: 1200,
    cssEase: "cubic-bezier(0.0, 0.0, 1.0, 1.0)",
    pauseOnHover: false,
  };

  return (
    <div>
      <Slider {...settings} className={s.slider} arrows={false}>
        <div>
          <img className={s.slideImg} src={SOL} alt="SOL" />
        </div>
        <div>
          <img className={s.slideImg} src={TRX} alt="TRX" />
        </div>
        <div>
          <img className={s.slideImg} src={BTC} alt="BTC" />
        </div>
        <div>
          <img className={s.slideImg} src={SHIB} alt="SHIB" />
        </div>
        <div>
          <img className={s.slideImg} src={ETH} alt="ETH" />
        </div>
        <div>
          <img className={s.slideImg} src={TON} alt="TON" />
        </div>
        <div>
          <img className={s.slideImg} src={UNI} alt="UNI" />
        </div>
        <div>
          <img className={s.slideImg} src={MATIC} alt="MATIC" />
        </div>
        <div>
          <img className={s.slideImg} src={BCH} alt="BCH" />
        </div>
        <div>
          <img className={s.slideImg} src={BNB} alt="BNB" />
        </div>
        <div>
          <img className={s.slideImg} src={DOGE} alt="DOGE" />
        </div>
        <div>
          <img className={s.slideImg} src={BABYDOGE} alt="BABYDOGE" />
        </div>
        <div>
          <img className={s.slideImg} src={USDT} alt="USDT" />
        </div>
        <div>
          <img className={s.slideImg} src={XRP} alt="XRP" />
        </div>
      </Slider>
    </div>
  );
};

export default CoinsSlider;
