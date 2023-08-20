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
            style: "shadow-blue-500"
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
            title: "Amazon Web Services",
            style: "shadow-black text-sm"
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
            style: "shadow-black"
        }

    ]
    return (
        <>
            <hr className="border-teal-100 lg:mt-2 lg:ml-40 lg:mr-40 mt-10 ml-20 mr-20" />

            <section id="Services" className=" flex mt-8 lg:ml-60 ml-8 h-screen bg-white">
                <div className="mt-20">

                    <p className="ml-6 lg:ml-0 lg:text-xl font-bold text-teal-800">Services</p>
                    <hr className="border-t-2 border-teal-800 ml-6 lg:ml-0 mt-2 w-9 font-extrabold md:font-extrabold" />

                    <p className="mt-2 mb-3 lg:ml-0 ml-6 text-sm max-w-5xl">Here are some of the Technologies i have worked in.</p>

                    <div className=" w-full grid grid-cols-2 lg:grid-cols-3 lg:gap-8 gap-6 ml-3 lg:ml-0 text-center py-8 px-2 lg:px-16">

                        {
                            logos.map(({ id, src, title, style }) => (
                                <div key={id} className={`shadow-md  hover:scale-105 duration-500 py-3 lg:px-20 rounded-lg ${style}`}>
                                    <img src={src} alt="" className="w-16 lg:w-20 mx-auto" />
                                    <p className=" text-teal-950 mt-2 text-center">{title}</p>
                                </div>

                            ))
                        }
                    </div>
                </div>
            </section>
        </>
    )

}