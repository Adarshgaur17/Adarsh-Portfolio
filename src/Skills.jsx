import React from "react";
import SkillRow from "./SkillRow";
function Skills() {
  const skills = [
    {
      url: "https://cdn.discordapp.com/attachments/1004315020668186637/1060125390254903346/html-icon.png",
      title: "HTML",
    },
    {
      url: "https://cdn.discordapp.com/attachments/1004315020668186637/1060130053305946133/CSS3_logo.svg.png",
      title: "CSS",
    },
    {
      url: "https://cdn.discordapp.com/attachments/1004315020668186637/1060129841778786304/67109815.png",
      title: "TAILWIND CSS",
    },
    {
      url: "https://cdn.discordapp.com/attachments/1004315020668186637/1060129202684301322/1460px-React_logo.png",
      title: "REACT",
    },
    {
      url: "https://cdn.discordapp.com/attachments/1004315020668186637/1060124346544295986/javascripttt_logo.png",
      title: "JAVASCRIPT",
    },
    {
      url: "https://cdn.discordapp.com/attachments/1004315020668186637/1060124792675639376/typescript_logo.webp",
      title: "TYPESCRIPT",
    },
    {
      url: "https://cdn.discordapp.com/attachments/1004315020668186637/1060129529789685770/redux_logo.png",
      title: "REDUX",
    },
  ];
  return (
    <div className="p-16 mt-32 bg-blue-100 ">
      <h1 className="text-2xl ml-6 text-gray-600 font-bold underline underline-offset-1">
        MY SKILLS
      </h1>
      <div className="flex mt-20 text-gray-500 justify-between flex-wrap items-center md:h-40 font-bold underline underline-offset-1">
        {skills.map((skill) => (
          <SkillRow url={skill.url} title={skill.title} />
        ))}
      </div>
    </div>
  );
}
export default Skills;
