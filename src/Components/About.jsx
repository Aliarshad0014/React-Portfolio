import React from "react";


export default function About(props) {
    return (
        <>
            <hr className="flex justify-center items-center border-teal-900 w-1/2 mx-auto bg-gray-900" />

            <section id="about" className="flex justify-center items-center min-h-screen" >
                <div className="">

                    <p className="lg:text-4xl text-center text-lg font-bold lg:ml-0 text-purple-500">A B O U T</p>
                    {/* <hr className="lg:hidden border-t-2 border-teal-800 ml-4 lg:ml-0 w-9 font-extrabold md:font-extrabold" /> */}

                    <p className="lg:mt-16 text-gray-100 lg:text-lg lg:max-w-5xl lg:p-0 text-sm max-w-sm p-4 ">In my web development journey, React and Figma have emerged as invaluable companions, fundamentally reshaping my approach to crafting digital experiences. React's component-based architecture has revolutionized my workflow, offering scalability and maintainability unparalleled by traditional methods. Concurrently, Figma's intuitive interface and robust prototyping capabilities have streamlined the design process, fostering collaboration and enabling swift iteration. Together, these tools empower me to transform ideas into polished, interactive prototypes, pushing the boundaries of creativity and innovation in web development and design.</p>
                    <p className="lg:mt-16 text-gray-100 lg:text-lg lg:max-w-3xl lg:p-0 text-sm max-w-sm p-4 ">Through the seamless integration of React and Figma, I've been able to navigate the complexities of both development and design with agility and precision. React's efficiency in building scalable applications complements Figma's prowess in visualizing and refining concepts, creating a symbiotic relationship that accelerates the entire product development lifecycle. With React powering the functionality and Figma guiding the aesthetics, I'm equipped to deliver cohesive, user-centric digital experiences that captivate and inspire.</p>

                </div>
            </section>
        </>
    )
}