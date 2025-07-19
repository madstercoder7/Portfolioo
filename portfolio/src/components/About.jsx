import React from "react";

function About() {
    return (
        <section id="about" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24" aria-label="About Me">
            <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-100">
                <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200">About</h2>
            </div>
            <div>
                <p className="mb-4">Hi, I'm Mohit, someone who believes that curiosity drives consistency. If I'm genuinely curious about something, I'll naturally stay committed to exploring it. I'm a computer science enthusiast with a deep passion for learning about technology and writing code.
                <br />While I haven't yet decided on a specific area of specialization, I enjoy experimenting and exploring different domains before making informed decisions. Currently, I'm especially interested in web development, blockchain, cybersecurity, and artificial intelligence.
                <br /> I'm a first-year remote student at Golden Gate University and actively looking for my first internship opportunity in the tech world. <br /> Outside of technology, I enjoy playing table tennis, exploring video games, and constantly learning new things.
                </p>
            </div>
        </section>
    );
}

export default About;
