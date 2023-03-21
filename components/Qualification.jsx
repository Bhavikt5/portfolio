import React, { useState } from "react";
import styles from "../styles/Qualification.module.css";

import { HiAcademicCap } from "react-icons/hi";
import { BiBriefcaseAlt2 } from "react-icons/bi";
import { SlCalender } from "react-icons/sl";

const Qualification = () => {
  const [selectBtn, setSelectBtn] = useState(true);
  return (
    <section className={styles.qualification}>
      <div className={styles.heading}>
        <h1>Qualification</h1>
        <p>My Personal Journey</p>
      </div>

      <div className={styles.mainContainer}>
        <div className={styles.btnDiv}>
          <button className={styles.button} onClick={() => setSelectBtn(true)}>
            <BiBriefcaseAlt2 />
            <p>Experience</p>
          </button>
          <button className={styles.button} onClick={() => setSelectBtn(false)}>
            <HiAcademicCap />
            <p>Education</p>
          </button>
        </div>

        {!selectBtn ? (
          <ul className={styles.timeline}>
            <li>
              <h5>Web Development Bootcamp</h5>
              <p>Udemy</p>
            </li>
            <li>
              <h5>The Complete Javascript - From Zero to Expert</h5>
              <p>Udemy</p>
            </li>
            <li>
              <h5>Youtube</h5>
            </li>
          </ul>
        ) : (
          <ul className={styles.timeline}>
            <li>
              <h5>Vivaan InfoSystem, Mumbai</h5>
              <p>Frontend Web Developer</p>
              <p>June 2022 - Present</p>
            </li>
          </ul>
        )}
      </div>
    </section>
  );
};

export default Qualification;
