import logo from "../assets/kevinRushLogo.png";
import { Falinkedin, FaGithub,FaInstagram } from 'react-icons/fa'


const Navbar = () => {
  return (
    <nav className="bg-red-900 mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <img src={logo} alt="logo" />
      </div>
      <div className = "m-8 flex items-center justify-center gap4 text-2xl">
        <Falinkedin/>
        <FaGithub/>
        <FaInstagram/>

      </div>
    </nav>
  );
};

export default Navbar;