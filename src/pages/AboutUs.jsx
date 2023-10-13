import React from "react";
import Container from "../components/Container";
import TopInfo from "../components/AboutUs/TopInfo";
import CoinsSlider from "../components/AboutUs/Slider/CoinsSlider";
import s from "../styles/AboutUs.module.css";
import WhyWe from "../components/AboutUs/WhyWe";

const AboutUs = () => {
  return (
    <div className={s.aboutUs}>
      <Container>
        <TopInfo />
      </Container>
      <CoinsSlider />
      <Container>
        <WhyWe />
      </Container>
    </div>
  );
};

export default AboutUs;
