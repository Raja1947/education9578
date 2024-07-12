import React from "react";
import style from "./Hero.module.css";
import dark_arrow from '../../assets/dark-arrow.png'

const Hero = () => {
  return (
    <div className={`nav_bar ${style.hero}`} id="hero">
      <div className={style.hero_text}>
        <h1>We Ensure better education for a better world</h1>
        <p>
          Our cutting-edge curriculum is designed to empower students with the
          knowlegde, skills, and experience needed to excel in the dynamic field
          of education.
        </p>
        <button className="btn">Explore more<img src={dark_arrow}/></button>
      </div>
    </div>
  );
};

export default Hero;
