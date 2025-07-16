import React, { useRef } from "react";
import Navigation from './components/Navigation'; // adjust path if needed
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import GradientBackground from './components/GradientBackground';

function App() {
    const scrollContainerRef = useRef(null);

    return (
        <div className="flex h-screen bg-[#0a192f] text-white font-sans relative">
            <GradientBackground />

            {/* Sidebar */}
            <div className="w-1/2 fixed h-full flex flex-col justify-between px-16 py-12 z-10">
                <div>
                    <h1 className="text-4xl font-bold">Mohit Dewani</h1>
                    <p className="text-lg mt-2">First year remote CS student at Golden Gate University</p>
                    <p className="text-sm mt-4 text-gray-400">I am passionate about web development and always open to learning new things.</p>
                    <Navigation scrollRef={scrollContainerRef} />
                </div>
            </div>

            {/* Main scrollable content */}
            <div
                ref={scrollContainerRef}
                className="ml-[50%] w-1/2 overflow-y-auto h-screen px-10 py-12 space-y-20 scroll-smooth"
            >
                <section id="about"><About /></section>
                <section id="experience"><Experience /></section>
                <section id="projects"><Projects /></section>
                <section id="contact"><Contact /></section>
            </div>
        </div>
    );
}

export default App;
