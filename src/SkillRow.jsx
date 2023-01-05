import React from "react";
function SkillRow(props) {
  return (
    <div className="h-full flex flex-col items-center">
      <img className="object-contain h-4/5" src={props.url} />
      <h1 className="mt-3">{props.title}</h1>
    </div>
  );
}
export default SkillRow;
