import React from "react";
function ProjectRow(props) {
  return (
    <div className="mt-10 md:flex ">
      <img className="md:h-40" src={props.url} />
      <div className="md:ml-16 ">
        <a
          href={props.link}
          className="mt-8 text-2xl underline underline-offset-1"
        >
          {props.title}
        </a>
        <h1 className="text-sm mt-2">{props.text}</h1>
        <h1 className="text-sm">Check this project by clicking on title.</h1>
        <h1>
          Check the code of this project{" "}
          <a href={props.projectLink} className="underline underline-offset-1 ">
            {props.title}
          </a>{" "}
          on GitHub.
        </h1>
      </div>
    </div>
  );
}
export default ProjectRow;
