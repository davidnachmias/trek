import logo2 from "../assets/img/logo2.png";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

export default function Navbar() {
  return (
    <nav className=" flex justify-between items-center mb-20 p-6 ">
      <div className="flex items-center flex-shrink-0 ">
        <img className="h-20 w-20" src={logo2} alt="logo" />
      </div>
      <div className="flex items-center gap-4">
        <a href="https://www.linkedin.com/in/david-nachmias" target="_blank">
          <FaLinkedin className="text-white w-10 h-10" />
        </a>

        <a href="https://github.com/DavidNachmias" target="_blank">
          <FaGithub className="text-white w-10 h-10" />
        </a>
      </div>
    </nav>
  );
}
