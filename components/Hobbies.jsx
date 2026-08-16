import React from "react";
import { BiCycling } from "react-icons/bi";
import { FaRunning } from "react-icons/fa";
import { TbTrekking } from "react-icons/tb";

const hobbies = [
  { Icon: FaRunning, title: "Running", detail: "Completed a half-marathon" },
  { Icon: BiCycling, title: "Cycling", detail: "100 km ride achieved" },
  { Icon: TbTrekking, title: "Trekking", detail: null },
];

const Hobbies = () => {
  return (
    <section className="section">
      <div className="mb-14 text-center">
        <p className="eyebrow mb-3">Beyond the code</p>
        <h2 className="section-heading">Hobbies</h2>
      </div>

      <div className="grid gap-4 sm:grid-cols-3">
        {hobbies.map(({ Icon, title, detail }) => (
          <div
            key={title}
            className="card flex flex-col items-center gap-3 px-6 py-8 text-center"
          >
            <Icon size={26} className="text-gold" />
            <p className="font-serif text-lg text-ink dark:text-white">
              {title}
            </p>
            {detail && (
              <p className="font-sans text-sm text-ink/60 dark:text-white/60">
                {detail}
              </p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Hobbies;
