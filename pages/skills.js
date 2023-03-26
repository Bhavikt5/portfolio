import React, { useEffect, useState } from "react";
import styles from "../styles/Skills.module.css";
import { BsFillPatchCheckFill } from "react-icons/bs";
import Qualification from "../components/Qualification";
import SkillsList from "../components/SkillsContent";

const Skills = () => {
  const [skilled, setSkilled] = useState({});

  useEffect(() => {
    fetchSkill();
  }, []);

  const fetchSkill = async () => {
    const response = await fetch("/api/skillList");
    const data = await response.json();
    setSkilled(data);
  };
  return (
    <>
      <Qualification />
      <SkillsList />
    </>
  );
};

export default Skills;
