"use client";

import React, { useState } from "react";
import { HiAcademicCap } from "react-icons/hi";
import { BiBriefcaseAlt2 } from "react-icons/bi";
import { motion, AnimatePresence } from "framer-motion";

const experience = [
  {
    company: "Zype, Mumbai",
    role: "Web Developer",
    period: "July 2024 - Present",
    points: [
      "Optimized WordPress website performance and responsiveness using Elementor and Elementor Pro.",
      "Developed reusable WordPress components using custom plugins, CPT, and ACF.",
      "Implemented dynamic data-driven UI elements, including financial tables, managed through the WordPress dashboard.",
      "Built scalable plugin-based solutions for layout control and personalized content delivery.",
      "Closely monitored organic traffic trends, indexing status, and search performance using Google Search Console and Google Analytics to identify issues and optimization opportunities.",
    ],
  },
  {
    company: "Acture Media, Mumbai",
    role: "Web Developer",
    period: "May 2023 - June 2024",
    points: [
      "Developed and delivered over 15 websites and 4 e-commerce sites using HTML, CSS, JavaScript, and WordPress.",
      "Managed web application projects from initial client consultation and team coordination to task delegation and final delivery.",
    ],
  },
  {
    company: "Vivaan InfoSystem, Mumbai",
    role: "Frontend Web Developer",
    period: "June 2022 - April 2023",
    points: [
      "Created a subscription-based comic website using Next.js, populating content via API in multiple languages and managing state with Redux.",
      "Developed a Customer Relationship Management (CRM) web app using HTML, CSS, JavaScript, jQuery, and Bootstrap.",
      "Built a CRM mobile app in React Native, integrating WebView for graph rendering.",
    ],
  },
];

const education = [
  { title: "Web Development Bootcamp", org: "Udemy" },
  { title: "The Complete JavaScript — From Zero to Expert", org: "Udemy" },
  { title: "Self-taught, continuous learning", org: "YouTube & documentation" },
];

const Qualification = () => {
  const [tab, setTab] = useState("experience");

  return (
    <section className="section">
      <div className="mb-12 text-center">
        <p className="eyebrow mb-3">My journey</p>
        <h2 className="section-heading">Experience &amp; Education</h2>
      </div>

      <div className="mb-12 flex justify-center gap-3">
        <button
          onClick={() => setTab("experience")}
          className={`flex items-center gap-2 rounded-sm border px-5 py-2.5 font-sans text-sm font-medium transition-colors ${
            tab === "experience"
              ? "border-navy bg-navy text-white dark:border-gold dark:bg-gold dark:text-coal"
              : "border-ink/15 text-ink/70 hover:border-ink/30 dark:border-white/20 dark:text-white/70"
          }`}
        >
          <BiBriefcaseAlt2 size={16} />
          Experience
        </button>
        <button
          onClick={() => setTab("education")}
          className={`flex items-center gap-2 rounded-sm border px-5 py-2.5 font-sans text-sm font-medium transition-colors ${
            tab === "education"
              ? "border-navy bg-navy text-white dark:border-gold dark:bg-gold dark:text-coal"
              : "border-ink/15 text-ink/70 hover:border-ink/30 dark:border-white/20 dark:text-white/70"
          }`}
        >
          <HiAcademicCap size={16} />
          Education
        </button>
      </div>

      <AnimatePresence mode="wait">
        {tab === "experience" ? (
          <motion.div
            key="experience"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="mx-auto max-w-3xl space-y-10 border-l border-ink/10 pl-8 dark:border-white/10"
          >
            {experience.map((job) => (
              <div key={job.company} className="relative">
                <span className="absolute -left-[calc(2rem+5px)] top-1.5 h-2.5 w-2.5 rounded-full bg-gold" />
                <div className="mb-2 flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                  <h3 className="font-serif text-xl text-ink dark:text-white">
                    {job.company}
                  </h3>
                  <span className="font-sans text-xs uppercase tracking-wide text-ink/40 dark:text-white/40">
                    {job.period}
                  </span>
                </div>
                <p className="mb-3 font-sans text-sm font-medium text-gold">
                  {job.role}
                </p>
                <ul className="space-y-2">
                  {job.points.map((point, i) => (
                    <li
                      key={i}
                      className="font-sans text-sm leading-relaxed text-ink/70 dark:text-white/65"
                    >
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </motion.div>
        ) : (
          <motion.div
            key="education"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="mx-auto max-w-3xl space-y-8 border-l border-ink/10 pl-8 dark:border-white/10"
          >
            {education.map((item) => (
              <div key={item.title} className="relative">
                <span className="absolute -left-[calc(2rem+5px)] top-1.5 h-2.5 w-2.5 rounded-full bg-gold" />
                <h3 className="font-serif text-lg text-ink dark:text-white">
                  {item.title}
                </h3>
                <p className="font-sans text-sm text-ink/60 dark:text-white/60">
                  {item.org}
                </p>
              </div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Qualification;
