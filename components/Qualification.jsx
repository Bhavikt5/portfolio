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
                <h5>Zype, Mumbai</h5>
                <p>Web Developer</p>
                <p>July 2024 - Present</p>
              </li>

              <ul className={styles.jobExp}>
                <li>
                  <p>
                    Optimized WordPress website performance and responsiveness
                    using Elementor and Elementor Pro.
                  </p>
                </li>
                <li>
                  <p>
                    Developed reusable WordPress components using custom
                    plugins, CPT, and ACF.
                  </p>
                </li>
                <li>
                  <p>
                    Implemented dynamic data-driven UI elements, including fi
                    nancial tables, managed through the WordPress dashboard.
                  </p>
                </li>
                <li>
                  <p>
                    Built scalable plugin-based solutions for layout control and
                    personalized content delivery.
                  </p>
                </li>
                <li>
                  <p>
                    Closely monitored organic traffi c trends, indexing status,
                    and search performance, using Google Search Console and
                    Google Analytics to identify issues and optimization
                    opportunities.
                  </p>
                </li>
              </ul>
            </ul>
            <ul className={styles.timeline}>
              <li>
                <h5>Acture Media, Mumbai</h5>
                <p>Web Developer</p>
                <p>May 2023 - June 2024</p>
              </li>

              <ul className={styles.jobExp}>
                <li>
                  <p>
                    Developed and delivered over 15 websites and 4 e-commerce
                    sites using HTML, CSS, JavaScript, and WordPress.
                  </p>
                </li>
                <li>
                  <p>
                    Managed web application projects from initial client
                    consultation and team coordination to task delegation and
                    final delivery.
                  </p>
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
                  <p>
                    Created a subscription-based comic website using Next.js,
                    populating content via API in multiple languages and
                    managing state with Redux.
                    <a href="http://164.90.184.187:3000/" target="_blank">
                      View Project
                    </a>
                  </p>
                </li>
                <li>
                  <p>
                    Developed a Customer Relationship Management (CRM) web app
                    using HTML, CSS, JavaScript, jQuery, and Bootstrap.
                  </p>
                </li>
                <li>
                  <p>
                    Built a CRM mobile app in React Native, integrating WebView
                    for graph rendering.
                  </p>
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
