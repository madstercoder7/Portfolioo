import React from "react";

function Projects() {
    return (
        <section id="projects" className="mb-16 scroll-mt-16 min-h-[50vh] md:md-24 lg:mb-36 lg:scroll-mt-24 py-10" aria-label="Projects">
            <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12  lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-100">
                <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200">Projects</h2>
            </div>
            <div className="space-y-12">
                <div className="bg-[#112240] p-6 rounded-lg shadow-sm hover:shadow-lg transition">
                    <h3 className="text-xl font-bold text-white">GenProject</h3>
                    <p className="text-sm text-green-400 mb-2">Programming Project Idea Suggestion Engine</p>
                    <p className="text-sm sm:text-base leading-relaxed mb-4">A Coding Project Suggestion Engine built with Flask and Groq API. Features include saving your ideas, </p>
                    <a href="https://genproject.onrender.com/" target="_blank" rel="noopener noreferrer" className="text-green-400 hover:underline text-sm">View on Github →</a>
                </div>
                <div className="bg-[#112240] p-6 rounded-lg shadow-sm hover:shadow-lg transition">
                    <h3 className="text-xl font-bold text-white">Conductify</h3>
                    <p className="text-sm text-green-400 mb-2">Gesture-Based Music Control Player</p>
                    <p className="text-sm sm:text-base leading-relaxed mb-4">A fun and intuitive music player which allows to use hand gestures to control your music, powered by real-time computer vision and Tkinter GUI</p>
                    <a href="https://github.com/madstercoder7/Conductify" target="_blank" rel="noopener noreferrer" className="text-green-400 hover:underline text-sm">View on Github →</a>                        
                </div>
                <div className="bg-[#112240] p-6 rounded-lg shadow-sm hover:shadow-lg transition">
                    <h3 className="text-xl font-bold text-white">CryptNest</h3>
                    <p className="text-sm text-green-400 mb-2">Password Manager</p>
                    <p className="text-sm sm:text-base leading-relaxed mb-4">A secure password manager built with Flask. Features include face unlock, password generator, breach detection adn intrusion alerts.</p>
                    <a href="https://github.com/madstercoder7/CryptNest" target="_blank" rel="noopener noreferrer" className="text-green-400 hover:underline text-sm">View on Github →</a>                        
                </div>
                <div className="bg-[#112240] p-6 rounded-lg shadow-sm hover:shadow-lg transition">
                    <h3 className="text-xl font-bold text-white">Stashd</h3>
                    <p className="text-sm text-green-400 mb-2">Personal Expense and Savings Tracker</p>
                    <p className="text-sm sm:text-base leading-relaxed mb-4">Stashd is a web application that helps you master your money, achieve your savings goals, and most importantly help keep your pockets "Stashd!"</p>
                    <a href="https://stashd.onrender.com/" target="_blank" rel="noopener noreferrer" className="text-green-400 hover:underline text-sm">View on Github →</a>                        
                </div>
            </div>
        </section>
    );
}

export default Projects;
