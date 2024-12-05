// import logo from "../assets/kevinRushLogo.png";
import { FaLinkedin, FaGithub } from 'react-icons/fa'


const Navbar = () => {
  return (
    <nav className=" mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        {/* <img className="mx-2 w-10" src={logo} alt="logo" /> */}
      </div>
      <div className = "m-8 flex items-center justify-center gap-4 text-2xl">
      <a
      href="https://www.linkedin.com/in/pradeepan-nagavelu/"
      target="_blank" // Opens the link in a new tab
      rel="noopener noreferrer" // Adds security to external links
      style={{ textDecoration: 'none', color: 'inherit' }} // Optional styling
    >
      <FaLinkedin size={24} /> {/* Adjust size as needed */}
    </a>
    <a
      href="https://github.com/pradeep2345"
      target="_blank" // Opens the link in a new tab
      rel="noopener noreferrer" // Adds security to external links
      style={{ textDecoration: 'none', color: 'inherit' }} // Optional styling
    >
      <FaGithub size={24} /> {/* Adjust size as needed */}
    </a>


      </div>
    </nav>
  );
};

export default Navbar;