import React, { useState, useRef } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    });

    const [isToastDisplayed, setIsToastDisplayed] = useState(false);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const validateEmail = (email) => {
        // Regular expression for email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const handleSendButtonClick = async (e) => {
        e.preventDefault();

        // Check if any field is empty or email is not in proper format
        if (!formData.name || !formData.email || !formData.message) {
            showToast("Fields can't be empty", "error");
            return;
        } else if (!validateEmail(formData.email)) {
            showToast("Please enter a valid email address", "error");
            return;
        }

        // Display "sending..." toast
        const sendingToastId = toast.promise(
            new Promise(resolve => setTimeout(resolve, 2000)),
            {
                pending: 'Sending...', // Display this while promise is pending
                error: 'Failed to send message' // Display this when promise rejects
            }
        );

        try {
            const response = await fetch("https://getform.io/f/jawxrjnb", {
                method: "POST",
                body: JSON.stringify(formData),
                headers: {
                    "Content-Type": "application/json"
                }
            });
            if (response.ok) {
                toast.update(sendingToastId, { render: 'Sent!', type: 'success' }); // Update sending toast to 'Sent!'
                showToast("Sent!", "success");
                // Clear form data upon successful submission
                setFormData({
                    name: "",
                    email: "",
                    message: ""
                });

                // Set timer to scroll back up after 3 seconds
                setTimeout(() => {
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                }, 800);
            } else {
                toast.update(sendingToastId, { render: 'Failed to send message', type: 'error' }); 
                showToast("Failed to send message", "error");
            }
        } catch (error) {
            toast.update(sendingToastId, { render: 'Failed to send message', type: 'error' }); 
            showToast("Failed to send message", "error");
            console.error("Error sending message:", error);
        }
    };

    const showToast = (message, type) => {
        if (!isToastDisplayed) {
            setIsToastDisplayed(true);
            toast[type](message, {
                onClose: () => setIsToastDisplayed(false)
            });
        }
    };

    return (
        <>
            <ToastContainer />
            <hr className="flex justify-center items-center border-teal-900 w-1/2 mb-12 mx-auto bg-gray-900" />

            <section id="Contact" className=" flex justify-center items-center lg:h-screen max-w-screen min-h-screen">
                <div>
                    <p className="lg:text-5xl text-lg font-bold lg:ml-0 text-gray-100"><span className="text-purple-500 lg:text-6xl text-xl">Hello World!</span> Let's start A Project Together</p>
                    <p></p>

                    {/* Form starts here */}
                    <form className="lg:mt-16 mt-16 mx-auto max-w-5xl">
                        <div className="mb-6 h-24">
                            <label htmlFor="name" className="block text-gray-100 lg:text-lg text-sm font-bold mb-2">Whats Your Name?</label>
                            <input type="text" id="name" name="name" value={formData.name} onChange={handleInputChange} className="border border-x-0 border-t-0 border-teal-500 appearance-none w-full py-2 text-gray-100 rounded-none leading-tight focus:outline-none focus:shadow-outline bgg" placeholder="Jhon Doe *" />
                        </div>

                        <div className="mb-6 h-24">
                            <label htmlFor="email" className="block text-gray-100 lg:text-lg text-sm font-bold mb-2">Whats Your Email?</label>
                            <input type="email" id="email" name="email" value={formData.email} onChange={handleInputChange} className="border border-x-0 border-t-0 border-teal-500 appearance-none bgg w-full py-2 rounded-none text-gray-100 leading-tight focus:outline-none focus:shadow-outline" placeholder="Jhon@doe.com *" />
                        </div>

                        <div className="mb-6">
                            <label htmlFor="message" className="block text-gray-100 lg:text-lg text-sm font-bold mb-2">Your Message</label>
                            <textarea id="message" name="message" rows="6" value={formData.message} onChange={handleInputChange} className="appearance-none border border-x-0 border-t-0 border-teal-500 bgg w-full py-2 text-gray-100 rounded-none leading-tight focus:outline-none focus:shadow-outline resize-none" placeholder="Hello Ali, Can you help me with...*"></textarea>
                        </div>
                        <div className="flex items-center justify-end">
                            <button type="submit" onClick={handleSendButtonClick} className="bgnew hover:bg-gray-800 lg:w-1/4 w-1/2 text-white font-bold py-2 px-4 rounded-sm focus:outline-none  focus:shadow-outline ease-in-out duration-500 hover:text-teal-500">Send it!</button>
                        </div>
                    </form>
                    {/* Form ends here */}
                </div>
            </section>
        </>
    );
}
