import logo from "../assets/kevinRushLogo.png"
import {FaLinkedin} from "react-icons/fa"
import {FaGithub} from "react-icons/fa"
import {FaSquareXTwitter} from "react-icons/fa6"
import {FaInstagram} from "react-icons/fa"

const Navbar = () => {
  return (
    <nav className="
      flex items-center justify-between py-4">
        <div className="flex flex-shrink-0 items-center" >
            <img className="mx-2 w-7" src={logo}  alt="logo"/>
        </div>
        <div className="m-5 flex item-center justify-center gap-4 text-2xl" >
            <FaLinkedin/>
            <FaGithub/>
            <FaSquareXTwitter/>
            <FaInstagram/>
        </div>
    </nav>
  )
}

export default Navbar