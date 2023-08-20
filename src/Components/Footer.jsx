import React from "react";

export default function Footer() {
    return (
        <section className="flex font-Poppins text-white lg:justify-around justify-between items-center px-4 py-5 bg-teal-900 h-20">
            <div className="font-bold lg:text-xl text-lg ">
                Ali's <br /> Portfolio
            </div>
            <div>
                <p className="text-xs lg:text-lg">&copy; 2023 Your Website. All rights reserved.</p>
            </div>
        </section>
    );
}
