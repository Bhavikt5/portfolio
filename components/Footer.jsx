"use client";

import React from "react";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import { GoLocation } from "react-icons/go";
import Link from "next/link";

const contactCards = [
  {
    icon: FaWhatsapp,
    label: "WhatsApp",
    value: "+91 98212 16506",
    href: "https://wa.me/9821216506",
  },
  {
    icon: AiOutlineMail,
    label: "Email",
    value: "bhaviktank5@gmail.com",
    href: "mailto:bhaviktank5@gmail.com",
  },
  {
    icon: GoLocation,
    label: "Location",
    value: "Mumbai, India",
    href: null,
  },
];

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-ink/10 bg-paper-soft dark:border-white/10 dark:bg-coal-soft">
      <div className="mx-auto max-w-content px-6 py-20 sm:px-8">
        <div className="mb-14 text-center">
          <p className="eyebrow mb-3">Get in touch</p>
          <h2 className="section-heading">Let&apos;s build something worth shipping.</h2>
        </div>

        <div className="grid gap-4 sm:grid-cols-3">
          {contactCards.map(({ icon: Icon, label, value, href }) => {
            const content = (
              <div className="card flex h-full flex-col items-center gap-3 px-6 py-8 text-center">
                <Icon size={24} className="text-gold" />
                <div>
                  <p className="font-sans text-xs uppercase tracking-widest text-ink/50 dark:text-white/50">
                    {label}
                  </p>
                  <p className="mt-1 font-sans text-base font-medium text-ink dark:text-white">
                    {value}
                  </p>
                </div>
              </div>
            );

            return href ? (
              <Link
                key={label}
                href={href}
                target="_blank"
                className="transition-transform hover:-translate-y-1"
              >
                {content}
              </Link>
            ) : (
              <div key={label}>{content}</div>
            );
          })}
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-6 border-t border-ink/10 pt-8 sm:flex-row dark:border-white/10">
          <p className="font-sans text-sm text-ink/60 dark:text-white/50">
            © {year} Bhavik Tank. All rights reserved.
          </p>
          <div className="flex items-center gap-5">
            <Link href="https://github.com/Bhavikt5" target="_blank" aria-label="GitHub">
              <FaGithub size={19} className="text-ink/60 transition-colors hover:text-ink dark:text-white/60 dark:hover:text-white" />
            </Link>
            <Link
              href="https://www.linkedin.com/in/bhavik-tank-3655118b/"
              target="_blank"
              aria-label="LinkedIn"
            >
              <FaLinkedin size={19} className="text-ink/60 transition-colors hover:text-ink dark:text-white/60 dark:hover:text-white" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
