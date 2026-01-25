import React, { useState } from "react";
import styles from "../styles/Qualification.module.css";
import { HiAcademicCap } from "react-icons/hi";
import { BiBriefcaseAlt2 } from "react-icons/bi";
import { FaHandPointLeft, FaHandPointRight } from "react-icons/fa";
import { motion } from "framer-motion";

const Qualification = () => {
  const [selectBtn, setSelectBtn] = useState(true);

  return (
    <section className={styles.qualification}>
      <div className={styles.heading}>
        <h2>Qualification</h2>
        <p>My Personal Journey</p>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 200 }}
        whileInView={{ opacity: 1 }}
        animate={{ y: 0 }}
        exit={{ opacity: 0 }}
        viewport={{ once: true }}
        className={styles.mainContainer}
      >
        <div className={styles.btnDiv}>
          <motion.div
            animate={{ x: [0, -20, 0] }}
            transition={{ repeat: Infinity, ease: "easeOut", duration: 1.5 }}
          >
            <FaHandPointRight color="var(--primary)" />
          </motion.div>
          <button className={styles.button} onClick={() => setSelectBtn(true)}>
            <BiBriefcaseAlt2 />
            <p>Experience</p>
          </button>
          <button className={styles.button} onClick={() => setSelectBtn(false)}>
            <HiAcademicCap />
            <p>Education</p>
          </button>
          <motion.div
            animate={{ x: [0, 20, 0] }}
            transition={{ repeat: Infinity, ease: "easeOut", duration: 1.5 }}
          >
            <FaHandPointLeft color="var(--primary)" />
          </motion.div>
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
          <div>
            <ul className={styles.timeline}>
              <li>
                <h5>Acture Media, Mumbai</h5>
                <p>Web Developer</p>
                <p>May 2023 - Present</p>
              </li>

              <ul className={styles.jobExp}>
                <li>
                  Developed and delivered over 15 websites and 4 e-commerce
                  sites using HTML, CSS, JavaScript, and WordPress.
                </li>
                <li>
                  Managed web application projects from initial client
                  consultation and team coordination to task delegation and
                  final delivery.
                </li>
              </ul>
            </ul>
            <ul className={styles.timeline}>
              <li>
                <h5>Vivaan InfoSystem, Mumbai</h5>
                <p>Frontend Web Developer</p>
                <p>June 2022 - April 2023</p>
              </li>

              <ul className={styles.jobExp}>
                <li>
                  Created a subscription-based comic website using Next.js,
                  populating content via API in multiple languages and managing
                  state with Redux.
                  <a href="http://164.90.184.187:3000/" target="_blank">
                    View Project
                  </a>
                </li>
                <li>
                  Developed a Customer Relationship Management (CRM) web app
                  using HTML, CSS, JavaScript, jQuery, and Bootstrap.
                </li>
                <li>
                  Built a CRM mobile app in React Native, integrating WebView
                  for graph rendering.
                </li>
              </ul>
            </ul>
          </div>
        )}
      </motion.div>
    </section>
  );
};

export default Qualification;
