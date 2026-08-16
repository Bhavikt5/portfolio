import { Playfair_Display, Inter } from "next/font/google";
import "../styles/globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Providers from "../components/Providers";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-serif",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("https://bhaviktank.dev"),
  title: {
    default: "Bhavik Tank — Web Developer",
    template: "%s · Bhavik Tank",
  },
  description:
    "Bhavik Tank is a Web Developer with 4+ years of experience building WordPress, React and MERN-stack products — from custom themes and plugins to full-stack applications and dashboards.",
  keywords: [
    "Bhavik Tank",
    "Web Developer",
    "WordPress Developer",
    "React Developer",
    "MERN Stack Developer",
    "Frontend Developer Mumbai",
  ],
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "Bhavik Tank — Web Developer",
    description:
      "4+ years of experience building WordPress, React and MERN-stack products.",
    type: "website",
  },
};

// Avoids a flash of the wrong theme before hydration.
const themeInitScript = `
(function () {
  try {
    var stored = localStorage.getItem("theme");
    var prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    var isDark = stored ? stored === "dark" : prefersDark;
    if (isDark) document.documentElement.classList.add("dark");
  } catch (e) {}
})();
`;

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body className="font-sans">
        <Providers>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
