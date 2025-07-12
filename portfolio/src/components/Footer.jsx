import React from "react";

function Footer() {
    return (
        <footer className="w-full bg-[#0a192f] text-gray-500 text-center py-8 text-sm">
            <div className="max-w-4x1 mx-auto px-4">
                <p>Built by Mohit Dewani · Designed with React and Tailwind CSS</p>
                <p className="mt-2">&copy; {new Date().getFullYear()} All rights reserved.</p>
            </div>
        </footer>
    );
}

export default Footer;