export default function skillList(req, res) {
  const skill = {
    skillSet: [
      {
        title: "HTML",
        level: "Intermediate",
      },
      {
        title: "CSS",
        level: "Intermediate",
      },
      {
        title: "JavaScript",
        level: "Intermediate",
      },
      {
        title: "Wordpress",
        level: "Advanced",
      },
      {
        title: "JQuery",
        level: "Basic",
      },
      {
        title: "React",
        level: "Basic",
      },
      {
        title: "Nextjs",
        level: "Basic",
      },
      {
        title: "React Native",
        level: "Basic",
      },
      {
        title: "Git",
        level: "Basic",
      },
      {
        title: "NodeJS",
        level: "Basic",
      },
      {
        title: "MongoDB",
        level: "Basic",
      },
      {
        title: "Express",
        level: "Basic",
      },
    ],
  };
  res.status(200).json(skill);
}
