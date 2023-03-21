import Link from "next/link";
import React, { useEffect, useState } from "react";
import styles from "../styles/Navbar.module.css";
import { useRouter } from "next/router";
import { FaBars, FaChair, FaMoon, FaSun } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const router = useRouter();

  const [mode, setMode] = useState(true);
  const [showMenu, setShowMenu] = useState(true);

  const enabledDark = () => {
    if (mode) {
      setMode(false);
    } else {
      setMode(true);
    }
  };

  useEffect(() => {
    if (mode) {
      document.body.classList.remove("darkMode");
    } else {
      document.body.classList.add("darkMode");
    }
  }, [mode]);

  return (
    <>
      <header className={styles.header}>
        <div>
          <h1>
            Bhavik.<span>Dev</span>
          </h1>
        </div>
        <div className={`${styles.rightNav} ${!showMenu ? styles.active : ""}`}>
          <nav className={styles.navbar}>
            <Link
              href="/"
              style={{
                color: router.pathname == "/" ? "var(--secondary)" : "",
              }}
            >
              Home
            </Link>
            <Link
              href="/about"
              style={{
                color: router.pathname == "/about" ? "var(--secondary)" : "",
              }}
            >
              About
            </Link>
            <Link
              href="/skills"
              style={{
                color: router.pathname == "/skills" ? "var(--secondary)" : "",
              }}
            >
              Skills
            </Link>
            <Link
              href="/portfolio"
              style={{
                color:
                  router.pathname == "/portfolio" ? "var(--secondary)" : "",
              }}
            >
              Portfolio
            </Link>
            <Link
              href="/contact"
              style={{
                color: router.pathname == "/contact" ? "var(--secondary)" : "",
              }}
            >
              Contact
            </Link>
          </nav>

          <button className={styles.toggleBtn} onClick={() => enabledDark()}>
            {mode ? <FaSun /> : <FaMoon />}
          </button>
        </div>

        {showMenu ? (
          <FaBars
            fontSize={30}
            color="var(--primary)"
            className={styles.bars}
            onClick={() => {
              setShowMenu(false);
            }}
          />
        ) : (
          <AiOutlineClose
            fontSize={30}
            color="var(--primary)"
            className={styles.bars}
            onClick={() => {
              setShowMenu(true);
            }}
          />
        )}
      </header>
    </>
  );
};

export default Navbar;
