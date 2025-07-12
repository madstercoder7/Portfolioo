import React from "react";

function Hero() {
    return (
        <section id="hero" className="h-screen flex flex-col justify-center items-start px-6 sm:px-16 bg-[#0a192f] text-white">
            <p className="text-green-400 text-sm sm:text-base mb-2">Hi, my name is</p>
            <h1 className="text-4x1 sm:text-6x1 font-bold text-gray-200">Mohit Dewani</h1>
            <h2 className="text-3x1 sm:text-5x1 font-semibold text-gray-400 mt-2">First-year remote CS student at Golden Gate University</h2>
            <p className="text-gray-400 mt-4 max-w-x1">I'm passionate about web development and always open to learning new things.</p>
            <a href="#projects" className="mt-6 inline-block border border-green-400 text-green-400 px-6 py-2 rounded hover:bg-green-400 hover:text-[#0a192f] transition duration-300">View Projects</a>
        </section>
    );
}

export default Hero;
