"use client";

import Image from "next/image";
import React from "react";
import personalImg from "../public/personel.jpg";
import {
  FaCss3Alt,
  FaGithub,
  FaHtml5,
  FaInstagram,
  FaJs,
  FaLinkedin,
  FaReact,
  FaWordpress,
} from "react-icons/fa";
import { SiJquery, SiRedux } from "react-icons/si";
import Link from "next/link";
import { motion } from "framer-motion";

const techStack = [
  { Icon: FaHtml5, color: "#c9622f" },
  { Icon: FaCss3Alt, color: "#3595CF" },
  { Icon: FaJs, color: "#c8a53a" },
  { Icon: FaWordpress, color: "currentColor" },
  { Icon: SiJquery, color: "#0663A6" },
  { Icon: FaReact, color: "#3f8fc9" },
  { Icon: SiRedux, color: "#7248B6" },
];

const socials = [
  { Icon: FaGithub, href: "https://github.com/Bhavikt5", label: "GitHub" },
  {
    Icon: FaLinkedin,
    href: "https://www.linkedin.com/in/bhavik-tank-3655118b/",
    label: "LinkedIn",
  },
  {
    Icon: FaInstagram,
    href: "https://www.instagram.com/tankbhavik/",
    label: "Instagram",
  },
];

const Banner = () => {
  return (
    <section className="section grid items-center gap-16 pt-14 lg:grid-cols-[1.15fr_0.85fr] lg:gap-12 lg:pt-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <p className="eyebrow mb-5">Web Developer · Mumbai, India</p>

        <h1 className="font-serif text-4xl leading-tight text-ink sm:text-5xl lg:text-6xl dark:text-white">
          Bhavik Tank
        </h1>

        <p className="mt-5 max-w-xl font-sans text-lg leading-relaxed text-ink/70 dark:text-white/70">
          A dedicated, detail-oriented developer with{" "}
          <span className="font-semibold text-ink dark:text-white">
            4+ years
          </span>{" "}
          of experience building WordPress products and modern JavaScript
          applications — from custom themes and plugins to full-stack MERN
          platforms.
        </p>

        <div className="mt-9 flex flex-wrap items-center gap-4">
          <Link href="/portfolio" className="btn-primary">
            View Projects
          </Link>
          <a href="/Resume.pdf" download className="btn-secondary">
            Download Resume
          </a>
        </div>

        <div className="mt-10 flex items-center gap-5">
          {socials.map(({ Icon, href, label }) => (
            <Link key={label} href={href} target="_blank" aria-label={label}>
              <Icon
                size={19}
                className="text-ink/50 transition-colors hover:text-gold dark:text-white/50 dark:hover:text-gold"
              />
            </Link>
          ))}
        </div>

        <div className="mt-12 border-t border-ink/10 pt-6 dark:border-white/10">
          <p className="mb-4 font-sans text-xs font-semibold uppercase tracking-[0.2em] text-ink/40 dark:text-white/40">
            Tech Stack
          </p>
          <div className="flex flex-wrap gap-4">
            {techStack.map(({ Icon, color }, i) => (
              <Icon key={i} size={22} style={{ color }} />
            ))}
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="relative mx-auto w-full max-w-sm"
      >
        <div className="absolute -inset-3 -z-10 rounded-sm border border-gold/40" />
        <div className="overflow-hidden rounded-sm border border-ink/10 shadow-cardHover dark:border-white/10">
          <Image
            src={personalImg}
            alt="Bhavik Tank"
            priority
            className="h-full w-full object-cover grayscale-[15%]"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Banner;
