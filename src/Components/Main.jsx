import React from "react";
import DeveloperImage from "../Components/Images/Developer.jpg"
import ResumeFile from "../Components/Images/Curriculum vitae - Ali Arshad.pdf"


export default function Main() {
    return (
        <>
            <section id="Home" className="flex justify-center lg:justify-around lg:h-screen bg-white flex-col lg:flex-row">
                <div className=" pl-24 mb-10 mt-44 lg:ml-26 lg:align-middle flex justify-center flex-col lg:justify-center bg-white lg:mt-46 lg:text-4xl lg:space-y-2 text-lg">
                    <p>Hello, my name is <span className="text-teal-700">Ali.</span>
                        <br /> I'm a beginner Web Developer
                        <br /> Currently working in React
                    </p>
                    <div className="flex space-x-4 mt-6">
                        <a
                            href={ResumeFile}
                            download="Ali_Resume.pdf"
                            className="bg-teal-800 hover:scale-105 transition-all w-38 text-sm hover:bg-teal-500 text-white px-4 py-2 rounded"
                        >
                            Download Resume
                        </a>
                        <a
                            href="https://github.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-teal-800 hover:scale-105 transition-all w-18 text-sm hover:bg-teal-500 text-white px-4 py-2 rounded"
                        >
                            Github
                        </a>
                    </div>
                </div>
                <div className="lg:mt-30 lg:w-96 mb-10 right flex justify-center w-72 mt-20 ml-20 items-center">
                    <img src={DeveloperImage} alt="Developer" />
                </div>
            </section>
        </>
    );
}
