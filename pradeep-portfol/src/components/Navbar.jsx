import logo from "../assets/pradepLogo.png";
import { FaLinkedin, FaGithub } from 'react-icons/fa'


const Navbar = () => {
  return (
    <nav className=" mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
      <img className="mx-2 w-12" src={logo} alt="logo" />
      </div>
      <div className = "m-8 flex items-center justify-center gap-4 text-2xl">
      <a
      href="https://www.linkedin.com/in/pradeepan-nagavelu/"
      target="_blank"
      rel="noopener noreferrer" 
      style={{ textDecoration: 'none', color: 'inherit' }} 
    >
      <FaLinkedin size={24} />
    </a>
    <a
      href="https://github.com/pradeep2345"
      target="_blank" 
      rel="noopener noreferrer" 
      style={{ textDecoration: 'none', color: 'inherit' }} 
    >
      <FaGithub size={24} /> 
    </a>


      </div>
    </nav>
  );
};

export default Navbar;