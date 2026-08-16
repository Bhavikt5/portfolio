"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { FaBars } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import { HiOutlineMoon, HiOutlineSun } from "react-icons/hi2";

const navLinks = [
  { href: "/", title: "Home" },
  { href: "/about", title: "About" },
  { href: "/skills", title: "Skills" },
  { href: "/portfolio", title: "Portfolio" },
];

const NavLink = ({ href, title, onClick }) => {
  const pathname = usePathname();
  const active = pathname === href;

  return (
    <Link
      href={href}
      onClick={onClick}
      className={`relative font-sans text-sm font-medium tracking-wide transition-colors after:absolute after:-bottom-1 after:left-0 after:h-px after:bg-gold after:transition-all ${
        active
          ? "text-ink after:w-full dark:text-white"
          : "text-ink/70 after:w-0 hover:text-ink hover:after:w-full dark:text-white/70 dark:hover:text-white"
      }`}
    >
      {title}
    </Link>
  );
};

const Navbar = () => {
  const [isDark, setIsDark] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    setIsDark(document.documentElement.classList.contains("dark"));
  }, []);

  const toggleTheme = () => {
    const next = !isDark;
    setIsDark(next);
    document.documentElement.classList.toggle("dark", next);
    try {
      localStorage.setItem("theme", next ? "dark" : "light");
    } catch (e) {}
  };

  return (
    <header className="sticky top-0 z-40 border-b border-ink/10 bg-paper/80 backdrop-blur dark:border-white/10 dark:bg-coal/80">
      <div className="mx-auto flex max-w-content items-center justify-between px-6 py-4 sm:px-8">
        <Link href="/" className="shrink-0">
          <span className="font-serif text-xl font-semibold tracking-tight text-ink dark:text-white">
            Bhavik <span className="text-gold">Tank</span>
          </span>
        </Link>

        <div className="hidden items-center gap-10 md:flex">
          <nav className="flex items-center gap-8">
            {navLinks.map((link) => (
              <NavLink key={link.href} {...link} />
            ))}
          </nav>

          <button
            aria-label="Toggle theme"
            onClick={toggleTheme}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-ink/15 text-ink/80 transition-colors hover:border-ink/30 dark:border-white/20 dark:text-white/80 dark:hover:border-white/40"
          >
            {isDark ? <HiOutlineSun size={17} /> : <HiOutlineMoon size={17} />}
          </button>
        </div>

        <div className="flex items-center gap-3 md:hidden">
          <button
            aria-label="Toggle theme"
            onClick={toggleTheme}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-ink/15 text-ink/80 dark:border-white/20 dark:text-white/80"
          >
            {isDark ? <HiOutlineSun size={17} /> : <HiOutlineMoon size={17} />}
          </button>
          <button
            aria-label="Toggle menu"
            onClick={() => setShowMenu((v) => !v)}
            className="flex h-9 w-9 items-center justify-center text-ink dark:text-white"
          >
            {showMenu ? <AiOutlineClose size={22} /> : <FaBars size={20} />}
          </button>
        </div>
      </div>

      {showMenu && (
        <nav className="flex flex-col gap-1 border-t border-ink/10 bg-paper px-6 pb-6 pt-4 md:hidden dark:border-white/10 dark:bg-coal">
          {navLinks.map((link) => (
            <div key={link.href} className="py-2">
              <NavLink {...link} onClick={() => setShowMenu(false)} />
            </div>
          ))}
        </nav>
      )}
    </header>
  );
};

export default Navbar;
