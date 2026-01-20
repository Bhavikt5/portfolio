import Image from "next/image";
import React from "react";
import styles from "../styles/Banner.module.css";
import personalImg from "../public/personel.jpg";
import {
  FaCss3Alt,
  FaGithub,
  FaHtml5,
  FaInstagram,
  FaJs,
  FaLinkedin,
  FaReact,
  FaWordpress,
} from "react-icons/fa";
import { SiJquery, SiRedux } from "react-icons/si";
import Link from "next/link";
import { motion } from "framer-motion";

const Banner = () => {
  return (
    <section className={styles.banner}>
      <motion.div className={styles.content}>
        <motion.h5>Hi There,</motion.h5>
        <h1>
          I am <span>Bhavik Tank</span>
        </h1>
        <p>Front-End Web Developer</p>
        <p>
          As a self-taught web developer, I understand the importance of
          continuous learning and staying up-to-date with the latest trends and
          technologies in the field.
        </p>

        <div className={styles.social}>
          <Link href={"https://github.com/Bhavikt5"} target="_blank">
            <FaGithub size={25} color="var(--primary)" />
          </Link>
          <Link
            href={"https://www.linkedin.com/in/bhavik-tank-3655118b/"}
            target="_blank"
          >
            <FaLinkedin size={25} color="var(--primary)" />
          </Link>
          <Link href={"https://www.instagram.com/tankbhavik/"} target="_blank">
            <FaInstagram size={25} color="var(--primary)" />
          </Link>
        </div>

        <div className={styles.techStack}>
          <h5>Tech Stack</h5>

          <div>
            <FaHtml5 size={25} color="#DD4B25" />
            <FaCss3Alt size={25} color="#3595CF" />
            <FaJs size={25} color="#E2C430" />
            <FaWordpress size={25} />
            <SiJquery size={25} color="#0663A6" />
            <FaReact size={25} color="#5ED3F3" />
            <SiRedux size={25} color="#7248B6" />
          </div>
        </div>
      </motion.div>
      <div className={styles.image}>
        <Image src={personalImg} alt="bannerimage" priority />
      </div>
    </section>
  );
};

export default Banner;
