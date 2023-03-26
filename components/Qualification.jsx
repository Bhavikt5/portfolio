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
        <h1>Qualification</h1>
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
          <ul className={styles.timeline}>
            <li>
              <h5>Vivaan InfoSystem, Mumbai</h5>
              <p>Frontend Web Developer</p>
              <p>June 2022 - Present</p>
            </li>

            <ul className={styles.jobExp}>
              <li>
                Developed Subcription Based Comic Website in Nextjs, used API to
                populate content in various language. Used redux for state
                management.{" "}
                <a href="http://164.90.184.187:3000/" target="_blank">
                  View Project
                </a>
              </li>
              <li>
                Made Customer Relation Management(CRM) Web App. Tech Stack -
                HTML, CSS, Javascript, JQuery & Bootstrap.
              </li>
              <li>
                Made Customer Relation Management(CRM) App in React Native. Used
                Webview to render Graphs in app.
              </li>
            </ul>
          </ul>
        )}
      </motion.div>
    </section>
  );
};

export default Qualification;
