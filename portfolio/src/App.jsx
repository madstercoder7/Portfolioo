import React from "react";

import Header from "./components/Header"
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
    return (
        <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-16 lg:py-0">
            <a href="#contents" className="absolute left-0 top-0 block -translate-x-full rounded bg-gradient-to-br from-teal-400 via-blue-500 to-purple-600 px-4 py-3 text-sm font-bold uppercase tracking-widest text-white focus-visible:translate-x-0">Skip to Content</a>
            <div className="lg:flex lg:justify-between lg:gap-4">
                <Header />
                <main id="content" className="pt-24 lg:w-[52%] lg:py-24">
                    <About />
                    <Experience />
                    <Projects />
                    <Contact />
                </main>
            </div>
        </div>
    );
}


export default App;
