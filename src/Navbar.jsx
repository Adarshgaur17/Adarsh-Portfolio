import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "react-scroll";

function Navbar() {
  const [isSideBarOpen, setIsSideBarOpen] = useState(false);
  const sideBar = () => (
    <div className="md:hidden flex flex-col items-center opacity-75 absolute top-10 left-4 text-white  mr-5 font-bold text-md bg-slate-900 p-4 underline underline-offset-1">
      <Link to="home" spy={true} smooth={true} offset={0} duration={500}>
        HOME
      </Link>
      <Link to="skill" spy={true} smooth={true} offset={0} duration={500}>
        SKILLS
      </Link>
      <h1>PROJECTS</h1>
      <h1>CONTACT </h1>
    </div>
  );

  return (
    <>
      <div>
        <GiHamburgerMenu
          onClick={() => setIsSideBarOpen(!isSideBarOpen)}
          className="text-gray-500 text-2xl ml-4 mt-2 md:hidden"
        />
        <div className="hidden md:flex justify-end bg-slate-600 text-white font-bold text-2xl space-x-8 underline underline-offset-1">
          <h1 className="my-4">HOME</h1>
          <h1 className="my-4">SKILLS</h1>
          <h1 className="my-4">PROJECTS</h1>
          <h1 className="my-4">CONTACT</h1>
        </div>
      </div>
      {isSideBarOpen && sideBar()}
    </>
  );
}
export default Navbar;
