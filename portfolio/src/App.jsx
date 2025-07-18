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
        <div className="flex min-h-screen bg-[#0f172a] text-white font-sans relative overflow-hidden">
            <GradientBackground />

            {/* Sidebar */}
            <aside className="fixed left-0 top-0 w-1/2 h-screen px-20 py-16 flex flex-col justify-between z-10">
                <div>
                    <h1 className="text-4xl font-bold">Mohit Dewani</h1>
                    <p className="text-lg mt-2">First year remote CS student at Golden Gate University</p>
                    <p className="text-sm mt-4 text-gray-400">More curious than consistent. More creative than correct.</p>
                    <Navigation scrollRef={scrollContainerRef} />
                </div>
            </aside>

            {/* Main scrollable content */}
            <main
                ref={scrollContainerRef}
                className="ml-auto w-1/2 overflow-y-auto h-screen px-20 py-16 space-y-24 scroll-smooth relative z-10"
            >
                <section id="about"><About /></section>
                <section id="experience"><Experience /></section>
                <section id="projects"><Projects /></section>
                <section id="contact"><Contact /></section>
            </main>
        </div>
    );
}

export default App;
