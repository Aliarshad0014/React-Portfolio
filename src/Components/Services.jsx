import React from "react";
import css from "../Components/Images/css.png"
import html from "../Components/Images/html.png"
import illustrator from "../Components/Images/illustrator.png"
import js from "../Components/Images/js.png"
import ReactImg from "../Components/Images/ReactImg.png"
import photoshop from "../Components/Images/photoshop.png"
import python from "../Components/Images/python.png"
import amazon from "../Components/Images/amazon.png"
import github from "../Components/Images/github.png"

export default function Services() {
    const logos = [
        {
            id: 1,
            src: html,
            title: "HTML",
            style: "shadow-orange-500"
        },
        {
            id: 2,
            src: css,
            title: "CSS",
            style: "shadow-blue-700"
        },
        {
            id: 3,
            src: illustrator,
            title: "Illustrator",
            style: "shadow-red-950"
        },
        {
            id: 4,
            src: ReactImg,
            title: "React",
            style: "shadow-blue-500"
        },
        {
            id: 5,
            src: js,
            title: "Js",
            style: "shadow-yellow-500"
        },
        {
            id: 6,
            src: photoshop,
            title: "Photoshop",
            style: "shadow-blue-900"
        },
        {
            id: 7,
            src: amazon,
            title: "AWS",
            style: "shadow-gray-600"
        },
        {
            id: 8,
            src: python,
            title: "Python",
            style: "shadow-blue-500"
        },
        {
            id: 9,
            src: github,
            title: "Github",
            style: "shadow-purple-400"
        },
        
        

    ]
    return (
        <>
            <hr className="flex justify-center items-center border-teal-900 w-1/2 mx-auto bg-gray-900" />

            <section id="Services" className=" flex justify-center items-center min-h-screen lg:mt-0 lg:mb-0 mt-12 mb-12">
                <div className="">

                    <p className="lg:text-4xl lg:text-center text-lg font-bold text-purple-500 text-center lg:mt-0">S E R V I C E S</p>
                    {/* <hr className="lg:hidden border-t-2 border-teal-800 lg:ml-0 w-9 font-extrabold md:font-extrabold" /> */}

                    <p className="mt-2  text-xs max-w-5xl lg:text-center text-white">Here are some of the Technologies i've worked in.</p>

                    <div className="w-full grid grid-cols-2 lg:grid-cols-3 lg:gap-8 gap-6 text-center py-8 px-2">

                        {
                            logos.map(({ id, src, title, style }) => (
                                <div key={id} className={`shadow-md bg-gray-0 hover:scale-105 bg duration-500 py-3 lg:px-20 rounded-lg ${style}`}>
                                    <img src={src} alt="" className="w-16 lg:w-20 mx-auto" />
                                    <p className=" text-teal-50 mt-2 text-center">{title}</p>
                                </div>

                            ))
                        }
                    </div>
                </div>
            </section>
        </>
    )

}