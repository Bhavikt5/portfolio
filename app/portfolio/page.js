import Image from "next/image";
import styles from "../../styles/Portfolio.module.css";
import work from "../../lib/workportfolio";

export const metadata = {
  title: "Bhavik.Dev - Portfolio",
};

const Portfolio = () => {
  return (
    <section className={styles.portfolio}>
      <div className={styles.heading}>
        <h2>Portfolio</h2>
        <p>My Projects</p>
      </div>

      <div className={styles.portfolio_grid}>
        {work.map((i, index) => {
          return (
            <div className={styles.mainContainer} key={index}>
              <Image
                src={i.imageUrl}
                alt="image"
                width={500}
                height={300}
                className={styles.portfolioImg}
              />

              <div className={styles.content}>
                <h3>{i.title}</h3>
                <div>
                  <p>{i.stack}</p>
                </div>
                <div className={styles.portfolio_button_div}>
                  <a href={i.anchorLink} target="_blank">
                    View Website
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
