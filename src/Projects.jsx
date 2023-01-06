import React from "react";
import ProjectRow from "./ProjectRow";
function Projects() {
  const projects = [
    {
      link: "https://adarshgaur.netlify.app/",
      url: "https://cdn.discordapp.com/attachments/1004315020668186637/1060825367780278323/Screenshot_19.png",
      title: "Designing Portfolio",
      text: " The work in this project is based on javascript using html, tailwind css, react-scroll library.",
    },
  ];

  return (
    <div className="text-gray-600  font-bold p-20 " id="project">
      <h1 className="text-3xl mb-4">Recent Works</h1>
      {projects.map((project) => (
        <ProjectRow
          link={project.link}
          url={project.url}
          title={project.title}
          text={project.text}
        />
      ))}
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
