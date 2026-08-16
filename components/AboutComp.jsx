import { TbCertificate2 } from "react-icons/tb";
import { BiBriefcaseAlt } from "react-icons/bi";
import { MdDeliveryDining } from "react-icons/md";
import { ImDownload } from "react-icons/im";
import Link from "next/link";

const stats = [
  { Icon: TbCertificate2, label: "Experience", value: "4+ Years" },
  { Icon: BiBriefcaseAlt, label: "Worked", value: "60+ Projects" },
  { Icon: MdDeliveryDining, label: "Delivered", value: "25+ Websites" },
];

const paragraphs = [
  "Throughout my career, I have worked on building reliable, scalable, and high-performing digital solutions for businesses and startups. My work spans from crafting custom WordPress themes and plugins to developing full-stack web applications, dashboards, REST APIs, and subscription-based platforms.",
  "My technical skill set includes WordPress, JavaScript, React.js, Next.js, and the MERN stack (MongoDB, Express, React, Node.js). I have practical experience with system architecture, secure authentication, third-party integrations, performance optimization, payment gateways such as Stripe, and state management using Redux / RTK.",
  "I approach development with a strong focus on clean code, maintainability, and user experience. I continuously improve my skill set by staying current with emerging technologies and best practices in the web ecosystem.",
  "I am motivated by building products that solve real business problems and deliver long-term value. I look forward to contributing my expertise to impactful projects and professional collaborations.",
];

const AboutComp = ({ compact = false }) => {
  const visibleParagraphs = compact ? paragraphs.slice(0, 2) : paragraphs;

  return (
    <section className="section">
      <div className="mb-14 text-center">
        <p className="eyebrow mb-3">Get to know me</p>
        <h2 className="section-heading">About Me</h2>
      </div>

      <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
        <div className="grid grid-cols-3 gap-4 lg:grid-cols-1">
          {stats.map(({ Icon, label, value }) => (
            <div
              key={label}
              className="card flex flex-col items-center gap-2 px-4 py-7 text-center lg:flex-row lg:items-center lg:gap-4 lg:text-left"
            >
              <Icon size={30} className="shrink-0 text-gold" />
              <div>
                <p className="font-sans text-xs uppercase tracking-widest text-ink/50 dark:text-white/50">
                  {label}
                </p>
                <p className="font-serif text-lg text-ink dark:text-white">
                  {value}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="space-y-5">
          {visibleParagraphs.map((p, i) => (
            <p
              key={i}
              className="font-sans text-base leading-relaxed text-ink/75 dark:text-white/70"
            >
              {p}
            </p>
          ))}

          <div className="flex flex-wrap gap-4 pt-2">
            <a href="/Resume.pdf" download className="btn-primary">
              Download Resume
              <ImDownload size={14} />
            </a>
            {compact && (
              <Link href="/about" className="btn-secondary">
                Know More
              </Link>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutComp;
