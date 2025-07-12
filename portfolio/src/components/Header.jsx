import React from "react";

function Header() {
    return (
        <header className="fixed w-full z-50 bg-[#0a192f] shadow-md">
            <div className="max-w-7x1 mx-auto px-6 py-4 flex justify-between items-center">
                {/* Logo / Name */}
                <div className="text-2x1 font-bold text-white">
                    <a href="#hero">Mohit Dewani</a>
                </div>

                {/* Nav Links */}
                <nav className="hidden md:flex space-x-8 text-sm font-medium">
                    <a href="#about" className="text-gray-300 hover:text-white transition">About</a>
                    <a href="#experience" className="text-gray-300 hover:text-white transition">Experience</a>
                    <a href="#projects" className="text-gray-300 hover:text-white transition">Projects</a>
                    <a href="#contact" className="text-gray-300 hover:text-white transition">Contact</a>
                </nav>
            </div>
        </header>
    );
}

export default Header;