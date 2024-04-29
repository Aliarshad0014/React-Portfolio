import React from "react";
import { Link } from "react-scroll";
import { FaBars, FaTimes } from "react-icons/fa";

import logo from "../Components/Images/logo.png";

export default function Header(props) {
  const [navBar, setNavBar] = React.useState(false);

  function onNavClick() {
    setNavBar((oldState) => !oldState);
  }

  return (
    <header>
      <nav
        style={{
          backgroundImage: `linear-gradient(to bottom, #1E1E1E, #121212)`,
        }}
        className="fixed top-0 left-0 right-0 flex items-center justify-between text-white lg:justify-around px-4 py-5 lg:space-x-6 shadow-teal-500 h-20 z-50"
      >
        <div className="flex items-center">
          {/* Logo */}
          <Link to="Home" spy={true} smooth={true} offset={20}>
            <img src={logo} alt="Logo" className="w-12 h-12 mr-2 cursor-pointer" />
          </Link>
        </div>
        <div className="hidden lg:flex mr-24 space-x-4 font-light text-lg">
          {/* Your navigation buttons */}
          <button className="hover:text-teal-500 h-9 w-24 rounded-md ease-in-out duration-500 transition-all text-white">
            <Link to="about" spy={true} smooth={true} offset={-20}>
              About
            </Link>
          </button>
          <button className="hover:text-teal-500 h-9 w-24 rounded-md ease-in-out duration-500 transition-all text-white">
            <Link to="Services" spy={true} smooth={true} offset={-60}>
              Services
            </Link>
          </button>
          <button className="hover:text-teal-500 h-9 w-24 rounded-md ease-in-out duration-500 transition-all text-white">
            <Link to="projects" spy={true} smooth={true} offset={-100}>
              Projects
            </Link>
          </button>
          <button className="hover:text-teal-500 h-9 w-24 rounded-md ease-in-out duration-500 transition-all text-white">
            <Link to="Contact" spy={true} smooth={true} offset={-120}>
              Contact
            </Link>
          </button>
        </div>
        <div
          onClick={onNavClick}
          className="lg:hidden flex mt-1 top-0 z-50 text-gray-500 cursor-pointer"
        >
          {navBar ? <FaTimes size={30} /> : <FaBars size={30} />}
        </div>
        {navBar && (
          <ul className=" h-[100vh] text-teal-50 phone-view lg:hidden flex flex-col justify-center items-center absolute top-0 left-0 w-full bggradient ">
            <button className="px-4 capitalize py-6 text-2xl">
              <Link onClick={onNavClick} to="Home" spy={true} smooth={true} offset={20}>
                Home
              </Link>
            </button>
            <button className="px-4 capitalize py-6 text-2xl">
              <Link onClick={onNavClick} to="about" spy={true} smooth={true} offset={-100}>
                About
              </Link>
            </button>
            <button className="px-4 capitalize py-6 text-2xl">
              <Link onClick={onNavClick} to="Services" spy={true} smooth={true}>
                Services
              </Link>
            </button>
            <button className="px-4 capitalize py-6 text-2xl">
              <Link onClick={onNavClick} to="Contact" spy={true} smooth={true} >
                Contact
              </Link>
            </button>
          </ul>
        )}
      </nav>
    </header>
  );
}
