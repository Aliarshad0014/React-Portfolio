import React from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
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
    ];

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
                return "";
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

    const handleSendButtonClick = (e) => {
        e.preventDefault();
        // Display "sending..." toast
        toast.promise(
            new Promise(resolve => setTimeout(resolve, 2000)),
            {
                pending: 'Sending...', // Display this while promise is pending
                success: 'Sent!', // Display this when promise resolves
                error: 'Failed to send message' // Display this when promise rejects
            }
        );
    };

    return (
        <>
            <ToastContainer />
            <hr className="flex justify-center items-center border-teal-900 w-1/2 mb-12 mx-auto bg-gray-900" />

            <section id="Contact" className="flex justify-center items-start lg:ml-0 mb-10 lg:h-screen max-w-screen">
                <div>
                    <p className="lg:text-5xl text-lg font-bold lg:ml-0 text-gray-100"><span className="text-purple-500">Hello World!</span> Let's start A Project Together</p>
                    <p></p>

                    {/* Form starts here */}
                    <form className="mt-16 mx-auto max-w-5xl">
                        <div className="mb-4 h-24">
                            <label htmlFor="name" className="block text-gray-100 lg:text-lg text-sm font-bold mb-2">Whats Your Name?</label>
                            <input type="text" id="name" name="name" className="border border-x-0 border-t-0 border-teal-500 appearance-none  w-full py-2 text-gray-100 leading-tight focus:outline-none focus:shadow-outline bgg" placeholder="Jhon Doe *" />
                        </div>

                        <div className="mb-4 h-24">
                            <label htmlFor="email" className="block text-gray-100 lg:text-lg text-sm font-bold mb-2">Whats Your Email?</label>
                            <input type="email" id="email" name="email" className="border border-x-0 border-t-0 border-teal-500 appearance-none bgg w-full py-2 text-gray-100 leading-tight focus:outline-none focus:shadow-outline" placeholder="Jhon@doe.com *" />
                        </div>

                        <div className="mb-6">
                            <label htmlFor="message" className="block text-gray-100 lg:text-lg text-sm font-bold mb-2">Your Message</label>
                            <textarea id="message" name="message" rows="6" className="appearance-none border border-x-0 border-t-0 border-teal-500 bgg w-full py-2 text-gray-100 leading-tight focus:outline-none focus:shadow-outline resize-none" placeholder="Hello Ali, Can you help me with...*"></textarea>
                        </div>
                        <div className="flex items-center justify-end">
                            <button type="submit" onClick={handleSendButtonClick} className="bg-gray-700 hover:bg-gray-800 w-1/4 text-white font-bold py-2 px-4 rounded-sm focus:outline-none focus:shadow-outline ease-in-out duration-500 hover:text-teal-500">Send it!</button>
                        </div>
                    </form>
                    {/* Form ends here */}

                </div>
            </section>
        </>
    );
}
