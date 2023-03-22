import React from "react";
import styles from "../styles/Loader.module.css";
import Navbar from "./Navbar";

const Loader = () => {
  return (
    <>
      <Navbar />
      <section className={styles.section}>
        <h1>
          Bhavik.<span>Dev</span>
        </h1>
        <div className="loader"></div>
      </section>
    </>
  );
};

export default Loader;
