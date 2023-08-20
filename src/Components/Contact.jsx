import React from "react";
import ContactImg from "../Components/Images/ContactImg.jpeg";
import Instagram from "../Components/Images/instagram.png"
import linkedin from "../Components/Images/linkedin.png"
import faceboook from "../Components/Images/facebook.png"
import twitter from "../Components/Images/twitter.png"



export default function Contact() {
    const socials = [
        {
            id: 1,
            src: Instagram,
            style: "hover:shadow-teal-400"
        },
        {
            id: 2,
            src: linkedin,
            style: "hover:shadow-teal-400"
        },
        {
            id: 3,
            src: faceboook,
            style: "hover:shadow-teal-400"
        },
        {
            id: 4,
            src: twitter,
            style: "hover:shadow-teal-400"
        }
    ]
    const getSocialMediaLink = (id) => {
        switch (id) {
            case 1:
                return "https://www.instagram.com/";
            case 2:
                return "https://www.linkedin.com/feed/";
            case 3:
                return "https://www.facebook.com/";
            case 4:
                return "https://twitter.com/your_twitter_username/";
            default:

        }
    };


    const handleCopyEmail = () => {
        const email = "aliarshad0014@gmail.com";
        navigator.clipboard.writeText(email)
            .then(() => {
                alert("Email copied to clipboard!");
            })
            .catch((error) => {
                console.error("Error copying email:", error);
            });
    };

    return (
        <>
            <hr className="border-teal-100 lg:mt-2 lg:ml-40 lg:mr-40 mt-10 ml-20 mr-20" />
            

            <div id="Contact" className=" lg:ml-40 lg:mt-20 lg:mb-16 lg:mr-40 lg:justify-around justify-between Contact flex h-screen bg-white shadow-lg">
                <div className="hidden lg:mt-20 Left lg:flex lg:flex-col lg:items-center">
                    <p className="text-xl font-bold text-teal-800">Hi, Let's Have A Quick Chat 💭</p>
                    <p className="text-gray-500  font-semibold text-md">I Reply Instantly</p>
                    <button
                        onClick={handleCopyEmail}
                        className="bg-teal-800 text-sm mt-2 hover:scale-105 transition-all hover:bg-teal-500 text-white px-4 py-2 rounded"
                    >🔗 Email Me
                    </button>

                    <img className="lg:mt-24 lg:w-96 right" src={ContactImg} alt="Developer" />
                </div>

                <div className="Right mt-32 ml-5 mb-12 w-11/12 h-[70vh] lg:h-[90vh] lg:mt-8  text-white flex flex-col justify-between items-end bg-teal-700 rounded-lg lg:w-5/12" >
                    <span className="text-4xl font-bold Contact mt-5 px-12">Contact <br /> <span className="flex justify-end">Me</span></span>
                    

                    <div className="lg:hidden mr-12"> 
                    <p className="text-xl mt-0 font-bold text-teal-50">Hi, Let's Have A Quick Chat 💭 </p>
                    </div>

                    <div className="flex flex-col ml-14 lg:ml-28 text-white ">
                        <form action="" >
                            <input type="text" name="name" placeholder=" Your Name" className="p-2 mb-4 bg-transparent w-72 border-b-2 border-gray-300 text-white focus:outline-none"/> 
                            <input type="text" name="email" placeholder=" Your Email" className="p-2 mb-4 bg-transparent w-72 border-b-2 border-gray-300 text-white focus:outline-none"/> 
                            <textarea name="message" rows="10" placeholder="Your Message Here" className="p-2 max-h-12 w-72 mb-4 bg-transparent border-b-2 border-gray-300 resize-none text-white focus:outline-none"></textarea>
                            <button className="bg-white w-60 text-black px-6 py-3 my-8 mx-6 flex items-center rounded-md hover:scale-110 duration-300 justify-center"> Submit </button>
                        </form>
                        
                    </div>
                    
                    <div className="mr-16 mb-10 flex lg:gap-16 lg:mb-10 lg:mr-20 gap-11 ">
                    {
                        socials.map(({ id, src, style }) => (
                            <a key={id} href={getSocialMediaLink(id)} target="_blank" rel="noopener noreferrer">
                                <img className={`Socials hover:shadow-purple-700 shadow-md hover:scale-110 duration-500 w-8 bg-white p-2 rounded-xl ${style}`} src={src} alt="Developer" />
                            </a>
                        ))
                    }
                    </div>

                </div>
            </div>
        </>
    );
}


