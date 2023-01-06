import React from "react";
import ProjectRow from "./ProjectRow";
function Projects() {
  const projects = [
    {
      link: "https://adarshgaur.netlify.app/",
      url: "https://cdn.discordapp.com/attachments/1004315020668186637/1060825367780278323/Screenshot_19.png",
      title: "Designing Portfolio",
      text: " The work in this project is designed in javascript using html, tailwind css, react-scroll library.",
    },
    {
      link: "https://myneasykart.netlify.app/",
      url: "https://cdn.discordapp.com/attachments/1004315020668186637/1060847214030749777/Screenshot_20.png",
      title: "E-Commerce App",
      text: "This is a dummy of shopping site, it is also designed in javascript using tailwind css, react-dom library. It has functionality like sorting , search bar, etc.",
    },
    {
      link: "https://assignment-1-adarshgaur.codeyogi-batch-2.repl.co/",
      url: "https://cdn.discordapp.com/attachments/1004315020668186637/1060858145007742986/Screenshot_21.png",
      title: "Clone of Code Yogi Website",
      text: "This is the clone of Code Yogi website. This project is totally based on html.",
    },
    {
      link: "https://assignment-7-adarshgaur.codeyogi-batch-2.repl.co/",
      url: "https://cdn.discordapp.com/attachments/1004315020668186637/1060865050279157760/Screenshot_23.png",
      title: "Responsive Layout",
      text: "This is a Responsive Layout designed with the help of tailwind css in html.",
    },
    {
      link: "https://assignment-5-adarshgaur.codeyogi-batch-2.repl.co/",
      url: "https://cdn.discordapp.com/attachments/1004315020668186637/1060867533529415750/Screenshot_22.png",
      title: "Responsive Layout",
      text: "This is a Responsive Layout designed with the help of tailwind css in html.",
    },
    {
      link: "https://assignment-12-adarshgaur.codeyogi-batch-2.repl.co/",
      url: "https://cdn.discordapp.com/attachments/1004315020668186637/1060869165470187560/Screenshot_24.png",
      title: "Find Average of Numbers",
      text: "This project is designed for users to find the average of numbers which is given by users in prompt. The average is calculated with the help of 'For Loop' .",
    },
    {
      link: "https://assignment-14-adarshgaur.codeyogi-batch-2.repl.co/",
      url: "https://cdn.discordapp.com/attachments/1004315020668186637/1060872028426620978/Screenshot_26.png",
      title: "Learn Tables",
      text: "This project is designed for users to find or learn the tables of numbers which is given by users in input. The table is shown with the help of 'For Loop' .",
    },
  ];

  return (
    <div
      className="p-8 sm:p-16 md:mt-40 text-gray-600  font-bold  "
      id="project"
    >
      <h1 className="text-3xl mb-4">Recent Works</h1>
      {projects.map((project) => (
        <ProjectRow
          link={project.link}
          url={project.url}
          title={project.title}
          text={project.text}
        />
      ))}
      <h1 className="mt-16 text-md">
        Several similar projects are designed by me with the help of my mentors.
      </h1>
    </div>
  );
}
export default Projects;
<div className="mt -2 md:flex ">
  <img
    className="md:h-40"
    src="https://cdn.discordapp.com/attachments/1004315020668186637/1060825367780278323/Screenshot_19.png"
  />
  <div className="ml-16">
    <h1 className="mt-2 text-2xl">Designing Portfolio</h1>
    <h1 className="text-sm mt-2">
      The work in this project is based on javascript using html, tailwind css,
      react-scroll library.
    </h1>
    <h1 className="text-sm">
      Check this project by clicking on Designing Portfolio.
    </h1>
  </div>
</div>;
