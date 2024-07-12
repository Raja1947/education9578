import React from "react";
import style from "./About.module.css";
import about_img from "../../assets/about.png";
import play_icon from "../../assets/play-icon.png";

const About = ({setPlayState, playState}) => {
  
  return (
    <div className={style.about} id="about">
      <div className={style.about_left}>
        <img src={about_img} alt="" className={style.about_img} />
        <img src={play_icon} alt="" className={style.play_icon} onClick={()=>{setPlayState(true)}}/>
      
      </div>
      <div className={style.about_right}>
        <h3>ABOUT UNIVERSITY</h3>
        <h2>Nuturing Tomorrow's Leaders Today</h2>
        <p>
          Embark on a transformative educational journey with our university's
          comprehensive education programs. Our cutting-edge curriculum is
          designed to empower students with the knowledge, skills, and
          experiences needed to excel in the dynamic field of education.
        </p>
        <p>
          With a focus on innovation, hands-on learning, and personalized
          meentorship, our programs prepare aspiring educators to make a
          meaningful impact in classrooms, schools, and communities.
        </p>
        <p>
          Whether you aspire to become a teacher, administrator, counselor, or
          educationl leader, our diverse range of programs offers the perfect
          pathway to achieveyour goals and unlock your full potential in shaping
          the future of education.
        </p>
      </div>
    </div>
  );
};

export default About;
