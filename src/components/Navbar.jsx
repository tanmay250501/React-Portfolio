import logo from "../assets/kevinRushLogo.png";
import {FaLinkedin} from "react-icons/fa";
import {FaGithub} from "react-icons/fa";

const Navbar = () => {


  const handleClick = () => {
    window.open('https://www.linkedin.com/in/tanmay-sawwalakhe', '_blank');
  };
  const handleGithubClick = () => {
    window.open('https://github.com/tanmay250501', '_blank');
  };
  const handleResumeClick = () => {
    window.open('https://drive.google.com/file/d/1ehqKziSn6ahChwT5blSJR8SyYENSzLcf/view?usp=drivesdk', '_blank');
  };
  
  return (
    <nav className="
      flex items-center justify-between py-4">
        <div className="flex flex-shrink-0 items-center" >
            <img className="mx-2 w-7" src={logo}  alt="logo"/>
        </div>
        <div className="m-5 flex item-center justify-center gap-4 text-2xl " >
            <FaLinkedin onClick={handleClick} className="hover:text-cyan-700 cursor-pointer" />
            <FaGithub onClick={handleGithubClick}  className="hover:text-white cursor-pointer"/>
        </div>
            <button onClick={handleResumeClick} className="bg-transparent hover:bg-blue-500 text-slate-4000 font-semibold hover:text-white  px-4 border border-slate-400 hover:border-transparent rounded">Resume</button>
    </nav>
  )
}

export default Navbar