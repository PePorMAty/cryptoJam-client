import React from "react";
import s from "../styles/Home.module.css";
import Container from "../components/Container";

const Home = () => {
  return (
    <div className={s.home}>
      <Container>
        <div className={s.wrapper}>
          <div className={s.textContent}>
            <p className={s.preTitle}>The future of crypto-trading</p>
            <h1 className={s.title}>
              The <span>next gen</span> crypto trading, the fibre of traders
            </h1>
            <p className={s.text}>
              Enjoy better rates when you trade your bitcoin with{" "}
              <span>waves</span>
            </p>
            <button className={s.btn}>Get Started</button>
          </div>
          <div className={s.imgContent}></div>
        </div>
      </Container>
    </div>
  );
};

export default Home;
