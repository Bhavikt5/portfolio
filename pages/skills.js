import React from "react";
import styles from "../styles/Skills.module.css";
import { BsFillPatchCheckFill } from "react-icons/bs";

const Skills = () => {
  const skill = {
    frontend: [
      {
        title: "HTML",
        level: "Intermediate",
      },
      {
        title: "CSS",
        level: "Intermediate",
      },
      {
        title: "JS",
        level: "Intermediate",
      },
      {
        title: "JQuery",
        level: "Basic",
      },
      {
        title: "React",
        level: "Basic",
      },
      {
        title: "Nextjs",
        level: "Basic",
      },
      {
        title: "React Native",
        level: "Basic",
      },
      {
        title: "Git",
        level: "Basic",
      },
    ],
    backend: [
      {
        title: "NodeJS",
        level: "Basic",
      },
      {
        title: "MongoDB",
        level: "Basic",
      },
      {
        title: "Express",
        level: "Basic",
      },
    ],
  };

  return (
    <>
      <section className={styles.skills}>
        <div className={styles.heading}>
          <h1>Skills</h1>
          <p>My Technical Levels</p>
        </div>

        <div className={styles.mainContainer}>
          <div className={styles.container}>
            <h5>Frontend</h5>
            <div className={styles.box}>
              {skill.frontend.map((i, index) => {
                return (
                  <div className={styles.innerBox} key={index}>
                    <BsFillPatchCheckFill />
                    <div className={styles.content}>
                      <h5>{i.title}</h5>
                      <p>{i.level}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className={styles.container}>
            <h5>Backend</h5>
            <div className={styles.box}>
              {skill.backend.map((i, index) => {
                return (
                  <div className={styles.innerBox} key={index}>
                    <BsFillPatchCheckFill />
                    <div className={styles.content}>
                      <h5>{i.title}</h5>
                      <p>{i.level}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Skills;
