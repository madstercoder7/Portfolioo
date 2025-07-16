import React, { useEffect, useState } from "react";

const navItems = [
    { id: "about", label: "About" },
    { id: "experience", label: "Experience" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact" },
];

const Navigation = ({ scrollRef }) => {
    const [active, setActive] = useState("about");

    useEffect(() => {
        const scrollEl = scrollRef.current;
        if (!scrollEl) return;

        const handleScroll = () => {
            let currentSection = "about";

            navItems.forEach((item) => {
                const section = document.getElementById(item.id);
                if (section) {
                    const rect = section.getBoundingClientRect();
                    const top = rect.top - scrollEl.getBoundingClientRect().top;
                    const height = rect.height;

                    if (top <= scrollEl.clientHeight / 2 && top + height >= scrollEl.clientHeight / 2) {
                        currentSection = item.id;
                    }
                }
            });

            setActive(currentSection);
        };

        scrollEl.addEventListener("scroll", handleScroll);
        handleScroll();

        return () => scrollEl.removeEventListener("scroll", handleScroll);
    }, [scrollRef]);

    return (
        <nav className="mt-10 space-y-6">
            {navItems.map((item) => (
                <a
                    key={item.id}
                    href={`#${item.id}`}
                    className="flex items-center space-x-4 group"
                    onClick={() => setActive(item.id)}
                >
                    <span
                        className={`transition-all duration-300 ${
                            active === item.id
                                ? "w-8 h-[2px] bg-white"
                                : "w-6 h-[1px] bg-gray-500"
                        }`}
                    />
                    <span
                        className={`transition-all duration-300 ${
                            active === item.id
                                ? "text-white text-base font-bold scale-105"
                                : "text-gray-500 text-sm group-hover:text-white"
                        }`}
                    >
                        {item.label}
                    </span>
                </a>
            ))}
        </nav>
    );
};

export default Navigation;
