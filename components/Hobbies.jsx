import React from "react";
import styles from "../styles/About.module.css";
import { BiCycling } from "react-icons/bi";
import { FaRunning } from "react-icons/fa";
import { TbTrekking } from "react-icons/tb";

const Hobbies = () => {
  return (
    <>
      <div>
        <h1 className={styles.heading}>Hobbies</h1>

        <div className={styles.hobbyDiv}>
          <ul className={styles.hobby}>
            <li>
              Running
              <FaRunning />
              <p>Completed Half-Marathon Run</p>
            </li>
            <li>
              Cycling <BiCycling />
              <p>Achieved - 100 km Cycling</p>
            </li>
            <li>
              Trekking <TbTrekking />
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Hobbies;
