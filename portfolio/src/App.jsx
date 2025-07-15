import React from "react";

import GradientBackground from "./components/GradientBackground";
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

function App() {
    return ( 
        <div className="relative min-h-screen font-sans text-white bg-[#0a192f]">
            <GradientBackground />
            <div className="flex relative z-10">
                <div className="w-1/2 fixed h-full flex flex-col justify-between px-16 py-12">
                    <div>
                        <h1 className="text-4xl font-bold">Mohit Dewani</h1>
                        <p className="text-lg mt-2">First year remote CS student ast Golden Gate University</p>
                        <p className="text-sm mt-4 text-gray-400">I am passionate about web development and always open to learning new things.</p>

                        <nav className="mt-10 space-y-4 text-gray-400">
                            <a href="#about" className="hover:text-white hover:font-semibold">About</a>
                            <a href="#experience" className="hover:text-white hover:font-semibold">Experience</a>
                            <a href="#projects" className="hover:text-white hover:font-semibold">Projects</a>
                            <a href="#contact" className="hover:text-white hover:font-semibold">Contact</a>
                        </nav>
                    </div>

                    <div className="flex space-x-4 text-xl mt-8">
                        <a href="https://github.com/madstercoder7"><FaGithub /></a>
                        <a href="https://www.linkedin.com/in/mohit-dewani-00727a374/"><FaLinkedin /></a>
                        <a href="https://www.instagram.com/mohit_y188/"><FaInstagram /></a>
                    </div>
                </div>

                <div className="ml-[50%] w-1/2 overflow-y-auto h-screen relative px-10 py-12">
                    <section id="about">
                        <About />
                    </section>

                    <section id="experience" className="mt-16">
                        <Experience />
                    </section>

                    <section id="projects" className="mt-16">
                        <Projects />
                    </section>

                    <section id="contact" className="mt-16">
                        <Contact />
                    </section>
                </div>
            </div>
        </div>
    );
}

export default App;