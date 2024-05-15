import React from "react";
import sms from "../Components/Images/sms.png";
import clothing from "../Components/Images/Clothing.png";
import stixor from "../Components/Images/stixor.jpg";
import traffic from "../Components/Images/traffic.png";
import car from "../Components/Images/car.jpg";
import tunics from "../Components/Images/tunics.jpg";


export default function Services() {
    const projects = [
        {
            id: 1,
            src: sms,
            title: "Student Management System",
            style: "shadow-teal-900",
            description: "A MERN Stack Web App built specifically for a Universities database which manages student and staff data",
            link: "https://github.com/Aliarshad0014/Student-Management-System/wiki"
        },
        {
            id: 2,
            src: clothing,
            title: "Clothing Store",
            style: "shadow-teal-900",
            description: "An Ecommerce Web App Clothing Store With Unique Design",
            link: "https://github.com/Aliarshad0014/booking-website/wiki"
        },
        {
            id: 3,
            src: stixor,
            title: "Figma to Code",
            style: "shadow-teal-900",
            description: "Web app Designed for a tech company in Next Js",
            link: "https://github.com/Aliarshad0014/stixor/wiki"
        },
        {
            id: 4,
            src: car,
            title: "Car Services App",
            style: "shadow-teal-900",
            description: "An App designed for a small venture for on demand car services",
            link: "https://snack.expo.dev/@aliarshad31/ridecare-app?platform=ios"
        },
        {
            id: 5,
            src: tunics,
            title: "Tunics App",
            style: "shadow-teal-900",
            description: "An Ecommerce app for a home-based boutique",
            link: "https://snack.expo.dev/@aliarshad31/tunics-app?platform=ios"
        },
        {
            id: 5,
            src: traffic,
            title: "Traffic Signs Game",
            style: "shadow-teal-900",
            description: "A Functional Video Game",
            link: "https://github.com/Aliarshad0014/Trafficsignspro/wiki"
        },
        // Add other project objects as needed
    ];

    return (
        <>
            <hr className="flex justify-center items-center border-teal-900 w-1/2 mx-auto bg-gray-900" />

            <section id="projects" className="flex justify-center items-center min-h-screen mb-12 mt-12 ">
                <div>
                    <p className="lg:text-4xl text-center text-lg font-bold text-purple-500">P R O J E C T S</p>
                    {/* <hr className="lg:hidden border-t-2 border-teal-800 ml-5 lg:ml-0  w-9 font-extrabold md:font-extrabold" /> */}
                    <p className="mt-2 text-center text-xs text-white">Some of the Projects i've done.</p>
                    <div className="max-w-screen-lg mx-auto lg:px-0 px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:gap-6 gap-14 mt-6">
                        {projects.map(project => (
                            <a key={project.id} href={project.link} target="_blank" rel="noopener noreferrer" className={`hover:scale-105 duration-500 bg transition-all shadow-md relative overflow-hidden cursor-pointer ${project.style}`}>
                                <img src={project.src} alt={project.title} className="w-full h-40 object-cover" />
                                <div className="absolute top-0 left-0 w-full h-full bgg opacity-0 transition-opacity duration-300 hover:opacity-90 flex justify-center items-center">
                                    <p className="text-white font-semibold text-lg">Preview</p>
                                </div>
                                <div className="p-6">
                                    <h3 className="lg:text-lg text-md font-semibold text-gray-100 mb-2">{project.title}</h3>
                                    <p className="text-gray-400 text-sm">{project.description}</p>
                                </div>
                            </a>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}
