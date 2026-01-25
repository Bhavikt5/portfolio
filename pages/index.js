import Head from "next/head";
import { useState } from "react";
import AboutComp from "../components/AboutComp";
import Banner from "../components/Banner";
import Qualification from "../components/Qualification";
import SkillsList from "../components/SkillsContent";
import Contact from "./contact";
import Portfolio from "./portfolio";
import Skills from "./skills";

export default function Home() {
  const [loading, setLoading] = useState(false);
  return (
    <>
      <Head>
        {/* <title>Bhavik.Dev</title> */}
        <title>Next.Dev</title>
      </Head>
      <Banner />
      <AboutComp />
      <SkillsList />
      <Qualification />
      <Portfolio />
      <Contact />
    </>
  );
}
