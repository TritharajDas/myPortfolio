import logo from "../assets/td_logo.PNG";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const NavBar = () => {
  return (
    <div className="mb-20 flex items-center justify-between py-4">
      <div className="flex flex-shrink-0 items-center">
        <img className = "mx-2 w-10" src={logo} alt="logo" style={{
        width: '100px',
        height: 'auto',
      }} />
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <a href="https://www.linkedin.com/in/tirtharaj-das-45517b314/">
          <FaLinkedin />
        </a>
        <a href="https://github.com/TritharajDas">
          <FaGithub />
        </a>
        <a href="">
          <FaTwitterSquare />
        </a>
        <a href="https://www.instagram.com/tirtharaj10/">
          <FaInstagram />
        </a>
      </div>
    </div>
  )
}

export default NavBar
