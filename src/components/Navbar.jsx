import React from "react";
import logo from "../assets/img/logo.png";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

export default function Navbar() {
  return (
    <nav className=" flex justify-between items-center mb-20 p-6 ">
      <div className="flex items-center flex-shrink-0 ">
        <img className="h-20 w-20" src={logo} alt="logo" />
      </div>
      <div className="flex items-center gap-4">
        <FaLinkedin className="text-white w-10 h-10" />
        <FaGithub className="text-white w-10 h-10" />
        <FaInstagram className="text-white w-10 h-10" />
      </div>
    </nav>
  );
}
