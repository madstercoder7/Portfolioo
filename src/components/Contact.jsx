import React from "react";

function Contact() {
    return (
        <section id="contact" className="min-h-screen mb-16 scroll-mt-16 md:md-24 lg:mb-36 lg:scroll-mt-24" aria-label="Contact">
            <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-100">
                <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200">Contact</h2>
            </div>
            <div className="max-x-2x1 mx-auto text-center">
                <p className="mt-4 text-sm sm:text-base leading-relaxed text-gray-400">I'm always open to connecting, collaborating or just chatting about programming or any other things.
                    Whether you have a project in mind or just want to say hi - feel free to drop a message on my mail or any of my social media pages.
                </p>
                <a href="mailto:madsfield17@gmail.com" className="mt-8 inline-block border border-green-400 text-green-400 px-6 py-2 rounded hover:bg-green-400 hover:text-[#0f172a] transition duration-300">Say Hello</a>
            </div>
        </section>
    );
}

export default Contact;
