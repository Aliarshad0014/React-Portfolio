import React from "react";

export default function Footer() {
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

