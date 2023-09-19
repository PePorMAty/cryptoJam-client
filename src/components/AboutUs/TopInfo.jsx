import React, { useEffect, useRef } from "react";
import s from "../../styles/AboutUs.module.css";

const TopInfo = () => {
  const ref = useRef(null);

  useEffect(() => {
    const updateMousePosition = (ev) => {
      if (!wrapper) return;
      const { clientX, clientY } = ev;
      wrapper.style.setProperty("--x", `${clientX}px`);
      wrapper.style.setProperty("--y", `${clientY}px`);
    };
    const wrapper = ref.current;
    wrapper.addEventListener("mousemove", updateMousePosition);

    return () => {
      wrapper.addEventListener("mousemove", updateMousePosition);
    };
  }, []);
  return (
    <div className={s.gradientBorder}>
      <div ref={ref} className={s.wrapper}>
        <div className={s.aboutUsContent}>
          <div className={s.aboutUsText}>fdsf</div>
          <div className={s.aboutUsImage}></div>
        </div>
      </div>
    </div>
  );
};

export default TopInfo;
