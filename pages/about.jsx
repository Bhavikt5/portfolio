import React from "react";
import Head from "next/head";
import AboutComp from "../components/AboutComp";
import Hobbies from "../components/Hobbies";

const About = () => {
  return (
    <>
      <Head>
        <title>Bhavik.Dev - About</title>
      </Head>
      <AboutComp />
      <Hobbies />
    </>
  );
};

export default About;
