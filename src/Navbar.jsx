import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "react-scroll";

function Navbar() {
  const [isSideBarOpen, setIsSideBarOpen] = useState(false);
  const side = () => setIsSideBarOpen(!isSideBarOpen);

  const sideBar = () => (
    <div className="md:hidden flex flex-col items-center opacity-75 absolute top-10 left-4 text-white  mr-5 font-bold text-md bg-slate-900 p-4 underline underline-offset-1">
      <Link
        onClick={side}
        to="home"
        spy={true}
        smooth={true}
        offset={0}
        duration={500}
      >
        HOME
      </Link>
      <Link
        onClick={side}
        to="skill"
        spy={true}
        smooth={true}
        offset={0}
        duration={500}
      >
        SKILLS
      </Link>
      <Link
        onClick={side}
        to="project"
        spy={true}
        smooth={true}
        offset={0}
        duration={500}
      >
        PROJECTS
      </Link>
      <Link
        onClick={side}
        to="contact"
        spy={true}
        smooth={true}
        offset={0}
        duration={500}
      >
        CONTACT
      </Link>
    </div>
  );

  return (
    <>
      <div>
        <GiHamburgerMenu
          onClick={side}
          className="text-gray-500 text-2xl ml-4 mt-2 md:hidden"
        />
        <div className="hidden pr-6 fixed left-0 justify-end opacity-90 right-0 md:flex bg-slate-600 text-white font-bold text-2xl space-x-8 underline underline-offset-1">
          <Link
            className="my-4"
            to="home"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
          >
            HOME
          </Link>
          <Link
            className="my-4"
            to="skill"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
          >
            SKILLS
          </Link>
          <Link
            className="my-4"
            to="project"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
          >
            PROJECTS
          </Link>
          <Link
            className="my-4"
            to="contact"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
          >
            CONTACT
          </Link>
        </div>
      </div>
      {isSideBarOpen && sideBar()}
    </>
  );
}
export default Navbar;
