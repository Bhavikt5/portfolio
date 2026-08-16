import Image from "next/image";
import Link from "next/link";
import { FiArrowUpRight } from "react-icons/fi";
import work from "../../lib/workportfolio";

export const metadata = {
  title: "Portfolio",
};

const Portfolio = () => {
  const featured = work.filter((w) => w.featured);
  const more = work.filter((w) => !w.featured);

  return (
    <section className="section">
      <div className="mb-14 text-center">
        <p className="eyebrow mb-3">Selected work</p>
        <h2 className="section-heading">Portfolio</h2>
        <p className="mx-auto mt-3 max-w-xl font-sans text-ink/60 dark:text-white/60">
          A snapshot of 60+ projects delivered across WordPress, React and the
          MERN stack — six highlights below, more beneath.
        </p>
      </div>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {featured.map((project) => (
          <Link
            key={project.title}
            href={project.anchorLink}
            target="_blank"
            className="card group flex flex-col overflow-hidden"
          >
            <div className="relative aspect-[4/3] overflow-hidden bg-ink/5 dark:bg-white/5">
              <Image
                src={project.imageUrl}
                alt={project.title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="flex flex-1 flex-col gap-2 px-6 py-5">
              <div className="flex items-start justify-between gap-2">
                <h3 className="font-serif text-lg text-ink dark:text-white">
                  {project.title}
                </h3>
                <FiArrowUpRight
                  size={18}
                  className="mt-1 shrink-0 text-ink/40 transition-colors group-hover:text-gold dark:text-white/40"
                />
              </div>
              <p className="font-sans text-sm leading-relaxed text-ink/55 dark:text-white/55">
                {project.stack}
              </p>
            </div>
          </Link>
        ))}
      </div>

      <div className="mt-20">
        <div className="mb-8 flex items-center gap-4">
          <span className="rule" />
          <h3 className="font-serif text-xl text-ink dark:text-white">
            More Projects
          </h3>
        </div>

        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {more.map((project) => (
            <Link
              key={project.title + project.anchorLink}
              href={project.anchorLink}
              target="_blank"
              className="group flex items-center justify-between gap-3 rounded-sm border border-ink/10 px-5 py-4 transition-colors hover:border-gold/50 hover:bg-ink/[0.03] dark:border-white/10 dark:hover:bg-white/[0.04]"
            >
              <div>
                <p className="font-sans text-sm font-medium text-ink dark:text-white">
                  {project.title}
                </p>
                <p className="mt-0.5 font-sans text-xs text-ink/50 dark:text-white/45">
                  {project.stack}
                </p>
              </div>
              <FiArrowUpRight
                size={16}
                className="shrink-0 text-ink/30 transition-colors group-hover:text-gold dark:text-white/30"
              />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
