import Banner from "../components/Banner";
import Qualification from "../components/Qualification";
import About from "./about";
import Portfolio from "./portfolio";
import Skills from "./skills";

export default function Home() {
  return (
    <>
      <Banner />
      <About />
      <Skills />
      <Qualification />
      <Portfolio />
    </>
  );
}
