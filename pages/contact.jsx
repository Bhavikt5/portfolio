import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "../styles/Contact.module.css";
import { FaWhatsapp } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";

const Contact = () => {
  const dispatch = useDispatch();
  const { count } = useSelector((state) => state.countName);

  return (
    <div className={styles.contact}>
      <div className={styles.heading}>
        <h1>Contact </h1>
        <p>Get in Touch</p>
      </div>

      <div className={styles.mainContainer}>
        <div className={styles.card}>
          <FaWhatsapp fontSize={30} />
          <h5>9821 216 506</h5>
        </div>
        <div className={styles.card}>
          <AiOutlineMail fontSize={30} />
          <h5>bhaviktank5@gmail.com</h5>
        </div>
      </div>
    </div>
  );
};

export default Contact;
