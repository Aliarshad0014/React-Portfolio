import React, { useEffect } from "react";
import Typed from "typed.js"; // Import Typed.js library

import DeveloperImage from "../Components/Images/Developer.png";
import ResumeFile from "../Components/Images/Curriculum vitae - Ali Arshad.pdf";

export default function Main(props) {
  useEffect(() => {
    // Initialize Typed.js for the "Ali" text
    var aliTyped = new Typed('#aliElement', {
      strings: ['Ali Arshad'],
      typeSpeed: 50,
      cursorChar: '', // Remove cursor for "Ali" text
    });

    // Initialize Typed.js for the skill element
    var skillTyped = new Typed('#element', {
      strings: ['React', "Node Js", "HTML", " CSS", "Github", "Python", "React Native", "Adobe", "Photoshop", "Figma"],
      typeSpeed: 50,
      loop: true
    });

    // Cleanup function
    return () => {
      aliTyped.destroy();
      skillTyped.destroy();
    };
  }, []);

  return (
    <>
      <section
        id="Home"
        className="flex justify-center items-center lg:justify-around lg:h-screen h-screen lg:flex-row lg:mt-10"
      >
        <div className="lg:w-3/4 w-screen flex justify-center items-center">
          <div className="w-full relative text-left text-gray-100 flex flex-col justify-center">
            <div className="w-full absolute text-lg lg:text-4xl flex flex-col items-center">
              <div className="w-2/3">
                <div className="w-full">
                  <p className="font-bold">Greetings, Im <span id="aliElement" className="text-purple-500"></span>
                    <p className="text-xl font-normal">A proficient Web Developer <br /> Crafting digital experiences with    <br />Expertise in  <span id="element" className="text-purple-500 text-2xl font-bold"></span> </p>
                  </p>
                </div>
                <p className=" text-sm font-thin mt-2"> Looking for a proficient designer and developer for your project? Look no further! With a keen eye for design and solid coding skills, I bring a unique blend of creativity and technical expertise to every project.</p>
                <div className="flex space-x-4 pt-4">
                  <a
                    href={ResumeFile}
                    download="Ali_Resume.pdf"
                    className="bg-gray-700 hover:scale-1 ease-in-out duration-500  transition-all w-38 text-sm hover:bg-gray-800 text-white px-4 py-2 rounded-sm hover:text-teal-500"
                  >
                    Download Resume
                  </a>
                  <a
                    href="https://github.com/Aliarshad0014"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gray-700 hover:scale-1 ease-in-out duration-500  transition-all w-18 text-sm hover:bg-gray-800 text-white px-4 py-2 rounded-sm hover:text-teal-500"
                  >
                    Github
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="lg:w-1/2 flex justify-center items-center">
          <img
            src={DeveloperImage}
            alt="Developer"
            className=" h-auto lg:max-w-3xl hidden lg:block" // Hide the image on smaller screens
          />
        </div>
      </section>
    </>
  );
}
