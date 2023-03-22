import Link from "next/link";
import React, { useEffect, useState } from "react";
import styles from "../styles/Navbar.module.css";
import { useRouter } from "next/router";
import { FaBars, FaMoon, FaSun } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";

const Linked = (props) => {
  const router = useRouter();

  return (
    <Link
      href={props.href}
      onClick={props.click}
      style={{
        color:
          router.pathname == `${props.href}`
            ? "var(--secondary)"
            : "var(--primary)",
      }}
    >
      {props.title}
    </Link>
  );
};

const Navbar = () => {
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
            <Linked
              href="/"
              title="Home"
              click={() => setShowMenu(!showMenu)}
            />
            <Linked
              href="/about"
              title="About"
              click={() => setShowMenu(!showMenu)}
            />
            <Linked
              href="/skills"
              title="Skills"
              click={() => setShowMenu(!showMenu)}
            />
            <Linked
              href="/portfolio"
              title="Portfolio"
              click={() => setShowMenu(!showMenu)}
            />
            <Linked
              href="/contact"
              title="Contact"
              click={() => setShowMenu(!showMenu)}
            />
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
