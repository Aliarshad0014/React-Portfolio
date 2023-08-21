import React from "react";
import { Link } from "react-scroll";
import {FaBars, FaTimes} from "react-icons/fa"


export default function Header() {
  

  const [navBar, setNavBar] = React.useState(false)

  function onNavClick() {
    
    setNavBar((oldState) => !oldState);

  }
   
  
  return (
    <header>
      <nav className="fixed top-0 left-0 right-0 justify-between flex font-Poppins text-black lg:justify-around px-4 py-5 lg:space-x-6 bg-teal-50 drop-shadow-md h-20 ">
        <div className="py-1.5 Logo text-xl text-teal-800">Ali's Portfolio</div>
        <div className="hidden lg:flex mr-24 space-x-4">
          <button className="ml-2 hover:text-white hover:bg-teal-600 h-9 w-20 rounded-md hover:scale-110 transition-all">
          <Link to="Home" spy={true} smooth={true} offset={50}>
              Home
            </Link>
          </button>
          <button className="hover:text-white hover:bg-teal-600 h-9 w-24 rounded-md hover:scale-110 transition-all">
            <Link to="about" spy={true} smooth={true} offset={-20}>
              About
            </Link>
          </button>
          <button className="hover:text-white hover:bg-teal-600 h-9 w-20 rounded-md hover:scale-110 transition-all">
            <Link to="Services" spy={true} smooth={true} offset={-20}>
              Services
            </Link>
          </button>
          <button className="hover:text-white hover:bg-teal-600 h-9 w-20 rounded-md hover:scale-110 transition-all">
            <Link to="Contact" spy={true} smooth={true} offset={-30}>
              Contact
            </Link>
          </button>
        </div>
        <div onClick={onNavClick} className="lg:hidden flex mt-1 top-0 z-50 text-gray-500 cursor-pointer">
          {navBar?  <FaTimes size={30}/> :<FaBars size={30}/>}
        </div>
        {navBar && 
        <ul className={`h-[100vh] text-teal-50 phone-view lg:hidden flex flex-col justify-center items-center absolute top-0 left-0 w-full bg-gradient-to-b from-teal-700 to-teal-950 transition-transform duration-500 ${navBar ? 'transform translate-y-0' : 'transform translate-y-full'}`}>
        <button className="px-4 capitalize py-6 text-2xl" >
          <Link onClick={onNavClick} to="Home" spy={true} smooth={true}>
              Home
            </Link>
          </button >
          <button className="px-4 capitalize py-6 text-2xl">
            <Link onClick={onNavClick} to="about" spy={true} smooth={true}>
              About
            </Link>
          </button>
          <button  className="px-4 capitalize py-6 text-2xl">
            <Link onClick={onNavClick} to="Services" spy={true} smooth={true}>
              Services
            </Link>
          </button>
          <button  className="px-4 capitalize py-6 text-2xl">
            <Link  onClick={onNavClick} to="Contact" spy={true} smooth={true} >
              Contact
            </Link>
          </button>
        </ul>
        }
      </nav>
    </header>
  );
}

