import React from "react";
function ProjectRow(props) {
  return (
    <div className="mt-2 md:flex ">
      <img className="md:h-40" src={props.url} />
      <div className="md:ml-16 ">
        <a
          href={props.link}
          className="mt-2 text-2xl underline underline-offset-1"
        >
          {props.title}
        </a>
        <h1 className="text-sm mt-2">{props.text}</h1>
        <h1 className="text-sm">
          Check this project by clicking on {props.title}.
        </h1>
      </div>
    </div>
  );
}
export default ProjectRow;
