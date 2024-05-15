import React from "react";
import Instagram from "../Components/Images/instagram.png"
import linkedin from "../Components/Images/linkedin.png"
import faceboook from "../Components/Images/facebook.png"
import twitter from "../Components/Images/twitter.png"

export default function Footer() {

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

    return (
        <section
            style={{
                backgroundImage: `linear-gradient(to bottom, #121212, #1E1E1E)`,
                boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)' 
            }}
            className="flex font-Poppins text-white lg:justify-around justify-between items-center px-4 py-5 h-20"
        >
            <div className="font-bold lg:text-md text-lg">Ali Arshad</div>
            <div>
                <p className="text-xs lg:text-xs">&copy; 2024 Website. All rights reserved.</p>
            </div>
        </section>
    );
}

