import React from "react";

function Contact() {
    return (
        <section id="contact" className="w-full bg-[#0a192f] text-gray-300 px-6 py-16 sm:px-16">
            <div className="max-x-2x1 mx-auto text-center">
                {/* Section Heading */}
                <h2 className="text-3x1 sm:text-4xl font-bold text-white border-b-2 border-green-400 inline-block mb-6">Contact</h2>

                {/* Message */}
                <p className="mt-4 text-sm sm:text-base leading-relaxed text-gray-400">I'm always open to connecting, collaborating or just chatting about programming or any other things.
                    Whether you have a project in mind or just want to say hi - feel free to drop a message.
                </p>

                {/* Email Link */}
                <a href="mailto:madsfield17@gmail.com" className="mt-8 inline-block border border-green-400 text-green-400 px-6 py-2 rounded hover:bg-green-400 hover:text-[#0a192f] transition duration-300">Say Hello</a>
            </div>
        </section>
    );
}

export default Contact;
