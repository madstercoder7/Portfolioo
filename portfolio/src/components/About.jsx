import React from "react";

function About() {
    return (
        <section id="about" className="w-full min-h-screen bg-[#0a192f] text-gray-300 px-6 py-16 sm:px-16">
            <div className="max-w-5x1 mx-auto flex flex-col sm:flex-row items-start gap-10">
                {/* Section Title */}
                <div className="sm:w-1/3">
                    <h2 className="text-3x1 sm:text-4x1 font-bold text-white border-b-2 border-green-400 inline-block mb-4">About Me</h2>
                </div>

                {/* Text Content */}
                <div className="sm:w-2/3 space-y-4 text-sm sm:text-base leading-relaxed">
                    <p>I enjoy building clean, user-centric interfaces and tools that prioritize content over clutter. I love working with modern web technologies and exploring new ideas through code.</p>
                </div>
            </div>
        </section>
    );
}

export default About;
