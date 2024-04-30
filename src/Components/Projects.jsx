import React from "react";
import sms from "../Components/Images/sms.png";
import clothing from "../Components/Images/Clothing.png";


export default function Services() {
    const projects = [
        {
            id: 1,
            src: sms,
            title: "Student Management System",
            style: "shadow-teal-900",
            description: "A MERN Stack Web App built specifically for TMUC's database which consists of management of students as well as staff"
        },
        {
            id: 1,
            src: clothing,
            title: "Clothing Store",
            style: "shadow-teal-900",
            description: "An Ecommerce Web App Clothing Store With Unique Design"
        },
        {
            id: 1,
            src: sms,
            title: "Student Management System",
            style: "shadow-teal-900",
            description: "A MERN Stack Web App built specifically for TMUC's database which consists of management of students as well as staff"
        },
        {
            id: 1,
            src: sms,
            title: "Student Management System",
            style: "shadow-teal-900",
            description: "A MERN Stack Web App built specifically for TMUC's database which consists of management of students as well as staff"
        },
        {
            id: 1,
            src: sms,
            title: "Student Management System",
            style: "shadow-teal-900",
            description: "A MERN Stack Web App built specifically for TMUC's database which consists of management of students as well as staff"
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
                    <p className="mt-2 text-center text-xs text-white">Here are some of the Projects I have Made.</p>
                    <div className="max-w-screen-lg mx-auto lg:px-0 px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:gap-6 gap-14 mt-6">
                        {projects.map(project => (
                            <div key={project.id} className={`hover:scale-105 duration-500 bg transition-all shadow-md relative overflow-hidden cursor-pointer ${project.style}`}>
                                <img src={project.src} alt={project.title} className="w-full object-cover" />
                                <div className="absolute top-0 left-0 w-full h-full bgg opacity-0 transition-opacity duration-300 hover:opacity-90 flex justify-center items-center">
                                    <p className="text-white font-semibold text-lg">Preview</p>
                                </div>
                                <div className="p-6">
                                    <h3 className="lg:text-lg text-md font-semibold text-gray-100 mb-2">{project.title}</h3>
                                    <p className="text-gray-400 text-sm">{project.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}
