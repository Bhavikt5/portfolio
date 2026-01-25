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
              <p>3+ Years</p>
            </div>
            <div className={styles.card}>
              <BiBriefcaseAlt fontSize={25} />
              <h5>Worked</h5>
              <p>60+ Projects</p>
            </div>
            <div className={styles.card}>
              <BiBriefcaseAlt fontSize={25} />
              <h5>Delivered</h5>
              <p>25+ Websites</p>
            </div>
          </div>
          <div className={styles.content}>
            <p>
              Throughout my career, I have worked on building reliable,
              scalable, and high-performing digital solutions for businesses and
              startups. My work spans from crafting custom WordPress themes and
              plugins to developing full-stack web applications, dashboards,
              REST APIs, and subscription-based platforms.
            </p>

            <p>
              My technical skill set includes WordPress, JavaScript, React.js,
              Next.js, and the MERN stack (MongoDB, Express, React, Node.js). I
              have practical experience with system architecture, secure
              authentication, third-party integrations, performance
              optimization, payment gateways such as Stripe, and state
              management using Redux / RTK.
            </p>

            <p>
              I approach development with a strong focus on clean code,
              maintainability, and user experience. I continuously improve my
              skill set by staying current with emerging technologies and best
              practices in the web ecosystem.
            </p>

            <p>
              I am motivated by building products that solve real business
              problems and deliver long-term value. I look forward to
              contributing my expertise to impactful projects and professional
              collaborations.
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
