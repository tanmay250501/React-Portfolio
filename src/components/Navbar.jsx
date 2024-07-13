import logo from "../assets/kevinRushLogo.png"
import {FaLinkedin} from "react-icons/fa"
import {FaGithub} from "react-icons/fa"

const Navbar = () => {
  return (
    <nav className="
      flex items-center justify-between py-4">
        <div className="flex flex-shrink-0 items-center" >
            <img className="mx-2 w-7" src={logo}  alt="logo"/>
        </div>
        <div className="m-5 flex item-center justify-center gap-4 text-2xl " >
            <FaLinkedin className="hover:text-cyan-700" />
            <FaGithub  className="hover:text-white"/>
            <button className="bg-transparent hover:bg-blue-500 text-slate-4000 font-semibold hover:text-white  px-4 border border-slate-400 hover:border-transparent rounded">Resume</button>
        </div>
    </nav>
  )
}

export default Navbar