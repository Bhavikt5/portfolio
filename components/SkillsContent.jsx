import React, { useEffect, useState } from "react";
import styles from "../styles/Skills.module.css";
import { BsFillPatchCheckFill } from "react-icons/bs";

const SkillsList = () => {
  const [skilled, setSkilled] = useState({});

  useEffect(() => {
    fetchSkill();
  }, []);

  const fetchSkill = async () => {
    const response = await fetch("/api/skillList");
    const data = await response.json();
    setSkilled(data);
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
              {skilled.frontend?.map((i, index) => {
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
              {skilled.backend?.map((i, index) => {
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

export default SkillsList;
