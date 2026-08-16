"use client";

import React, { useEffect, useState } from "react";

const levelWidth = {
  Advanced: "90%",
  Intermediate: "65%",
  Basic: "40%",
};

const categories = {
  Frontend: ["HTML", "CSS", "JavaScript", "JQuery", "React", "Nextjs"],
  "Backend & Data": ["NodeJS", "Express", "MongoDB"],
  "CMS & Tools": ["Wordpress", "React Native", "Git"],
};

const groupSkills = (skillSet = []) => {
  const byTitle = Object.fromEntries(skillSet.map((s) => [s.title, s]));
  return Object.entries(categories)
    .map(([group, titles]) => ({
      group,
      items: titles.map((t) => byTitle[t]).filter(Boolean),
    }))
    .filter((g) => g.items.length > 0);
};

const SkillsList = () => {
  const [skilled, setSkilled] = useState({});

  useEffect(() => {
    const fetchSkill = async () => {
      const response = await fetch("/api/skillList");
      const data = await response.json();
      setSkilled(data);
    };
    fetchSkill();
  }, []);

  const groups = groupSkills(skilled.skillSet);

  return (
    <section className="section">
      <div className="mb-14 text-center">
        <p className="eyebrow mb-3">What I work with</p>
        <h2 className="section-heading">Skills</h2>
      </div>

      <div className="grid gap-8 md:grid-cols-3">
        {groups.map(({ group, items }) => (
          <div key={group} className="card px-7 py-8">
            <h3 className="mb-6 font-serif text-lg text-ink dark:text-white">
              {group}
            </h3>
            <div className="space-y-5">
              {items.map(({ title, level }) => (
                <div key={title}>
                  <div className="mb-1.5 flex items-baseline justify-between">
                    <span className="font-sans text-sm font-medium text-ink/80 dark:text-white/80">
                      {title}
                    </span>
                    <span className="font-sans text-xs uppercase tracking-wide text-ink/40 dark:text-white/40">
                      {level}
                    </span>
                  </div>
                  <div className="h-1 w-full overflow-hidden rounded-full bg-ink/10 dark:bg-white/10">
                    <div
                      className="h-full rounded-full bg-gold"
                      style={{ width: levelWidth[level] || "50%" }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SkillsList;
