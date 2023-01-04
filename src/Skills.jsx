import React from "react";
function Skills() {
  return (
    <div className="p-16 mt-20 bg-blue-100 ">
      <h1 className="text-2xl  text-gray-600 font-bold underline underline-offset-1">
        MY SKILLS
      </h1>
      <div className="flex mt-20 text-gray-500 justify-between flex-wrap items-center h-48 font-bold underline underline-offset-1">
        <div className="h-full flex flex-col items-center">
          <img
            className="object-contain h-4/5"
            src="https://cdn.discordapp.com/attachments/1004315020668186637/1060125390254903346/html-icon.png"
          />
          <h1 className="mt-3">HTML</h1>
        </div>
        <div className="h-full flex flex-col items-center">
          <img
            className="object-contain h-4/5"
            src="https://cdn.discordapp.com/attachments/1004315020668186637/1060130053305946133/CSS3_logo.svg.png"
          />
          <h1 className="mt-3">CSS</h1>
        </div>
        <div className="h-full flex flex-col items-center">
          <img
            className="object-contain h-4/5"
            src="https://cdn.discordapp.com/attachments/1004315020668186637/1060129841778786304/67109815.png"
          />
          <h1 className="mt-3">TAILWIND CSS</h1>
        </div>
        <div className="h-full flex flex-col items-center">
          <img
            className="object-contain h-4/5"
            src="https://cdn.discordapp.com/attachments/1004315020668186637/1060129202684301322/1460px-React_logo.png"
          />
          <h1 className="mt-3">REACT</h1>
        </div>
        <div className="h-full flex flex-col items-center">
          <img
            className="object-contain h-4/5"
            src="https://cdn.discordapp.com/attachments/1004315020668186637/1060124346544295986/javascripttt_logo.png"
          />
          <h1 className="mt-3">JAVASCRIPT</h1>
        </div>
        <div className="h-full flex flex-col items-center">
          <img
            className="object-contain h-4/5"
            src="https://cdn.discordapp.com/attachments/1004315020668186637/1060124792675639376/typescript_logo.webp"
          />
          <h1 className="mt-3">TYPESCRIPT</h1>
        </div>
        <div className="h-full flex flex-col items-center">
          <img
            className="object-contain h-4/5"
            src="https://cdn.discordapp.com/attachments/1004315020668186637/1060129529789685770/redux_logo.png"
          />
          <h1 className="mt-3">REDUX</h1>
        </div>
      </div>
    </div>
  );
}
export default Skills;
