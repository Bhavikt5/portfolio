import React from "react";
import styles from "../styles/About.module.css";
import { TbCertificate2 } from "react-icons/tb";
import { BiBriefcaseAlt } from "react-icons/bi";
import { ImDownload } from "react-icons/im";
import Link from "next/link";

const AboutComp = () => {
  return (
    <>
      <section className={styles.about}>
        <h1 className={styles.heading}>About Me</h1>
        <div className={styles.outerBox}>
          <div className={styles.container}>
            <div className={styles.card}>
              <TbCertificate2 fontSize={25} />
              <h5>Experience</h5>
              <p>9+ months</p>
            </div>
            <div className={styles.card}>
              <BiBriefcaseAlt fontSize={25} />
              <h5>Completed</h5>
              <p>6 Projects</p>
            </div>
          </div>
          <div className={styles.content}>
            <p>
              Hello everyone, my name is <span>Bhavik Tank</span> , and I am a
              self-taught web developer. I began my journey as a web developer
              at the age of 30, and I quickly fell in love with the field.
              Despite not having a traditional education in web development, I
              have spent countless hours learning and practicing my skills, and
              I am proud to say that I have developed a strong foundation in web
              development.
            </p>

            <p>
              Over A years, I have worked on a variety of projects, ranging from
              small websites to large-scale applications. I have experience in
              front-end development, including
              <span> HTML, CSS, JavaScript and JQuery</span> as well as back-end
              development, including <span>NodeJS</span>. I am also well-versed
              in web development frameworks <span>ReactJS and NextJS</span>.
            </p>

            <p>
              As a self-taught web developer, I understand the importance of
              continuous learning and staying up-to-date with the latest trends
              and technologies in the field. I am always eager to learn more and
              expand my skillset, and I am excited to see where my career in web
              development will take me.
            </p>

            <p>
              Thank you for taking the time to get to know me, and I look
              forward to working with you!
            </p>
          </div>
        </div>

        <div>
          <a href="Resume.pdf" download>
            Download
            <ImDownload style={{ background: "transparent" }} />
          </a>

          <Link href="/about">Know more</Link>
        </div>
      </section>
    </>
  );
};

export default AboutComp;
