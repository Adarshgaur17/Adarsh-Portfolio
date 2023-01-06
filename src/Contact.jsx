import React from "react";
import { MdCall, MdEmail } from "react-icons/md";
import { RiWhatsappFill, RiLinkedinBoxFill } from "react-icons/ri";

function Contact() {
  return (
    <div
      className="bg-blue-100 mt-28 p-8 sm:p-16 text-gray-600 text-sm sm:text-2xl font-bold"
      id="contact"
    >
      <h1 className="text-3xl ">Contact Info :</h1>
      <MdCall className="mt-10" />
      <h1>8979766455</h1>
      <RiWhatsappFill className="mt-6" />
      <h1>9639738165</h1>
      <MdEmail className="mt-6" />
      <h1>adarshgaur17@gmail.com</h1>
      <RiLinkedinBoxFill className="mt-6" />
      <h1>linkedin.com/in/adarsh-gaur17</h1>
    </div>
  );
}
export default Contact;
