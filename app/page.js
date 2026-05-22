import AboutComp from "../components/AboutComp";
import Banner from "../components/Banner";
import Qualification from "../components/Qualification";
import SkillsList from "../components/SkillsContent";
import PortfolioPage from "./portfolio/page";

export default function Home() {
  return (
    <>
      <Banner />
      <AboutComp />
      <SkillsList />
      <Qualification />
      <PortfolioPage />
    </>
  );
}
