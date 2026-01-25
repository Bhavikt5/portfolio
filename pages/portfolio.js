import Image from "next/image";
import React from "react";
import styles from "../styles/Portfolio.module.css";
import work from "../pages/api/workportfolio";

const Portfolio = () => {
  return (
    <section className={styles.portfolio}>
      <div className={styles.heading}>
        <h1>Portfolio</h1>
        <p>My Projects</p>
      </div>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-around",
        }}
      >
        {work.map((i, index) => {
          return (
            <div className={styles.mainContainer} key={index}>
              <Image
                src={i.imageUrl}
                alt="image"
                width={500}
                height={300}
                style={{ objectFit: "contain" }}
              />

              <div className={styles.content}>
                <h3>{i.title}</h3>
                <div>
                  <h5>Tech Stack</h5>
                  <p>{i.stack}</p>
                </div>
                <div className={styles.portfolio_button_div}>
                  <a href={i.anchorLink} target="_blank">
                    View Website
                  </a>
                  <a href="#" target="_blank">
                    Details
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
