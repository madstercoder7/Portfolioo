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
            let maxVisible = 0;
            let mostVisibleSection = "about";

            navItems.forEach((item) => {
                const section = document.getElementById(item.id);
                if (section) {
                    const rect = section.getBoundingClientRect();
                    const scrollRect = scrollEl.getBoundingClientRect();

                    const visibleTop = Math.max(rect.top, scrollRect.top);
                    const visibleBottom = Math.min(rect.bottom, scrollRect.bottom);
                    const visibleHeight = Math.max(0, visibleBottom - visibleTop);

                    if (visibleHeight > maxVisible) {
                        maxVisible = visibleHeight;
                        mostVisibleSection = item.id;
                    }
                }
            });

            setActive(mostVisibleSection);
        };

        scrollEl.addEventListener("scroll", handleScroll);
        handleScroll();

        return () => scrollEl.removeEventListener("scroll", handleScroll);
    }, [scrollRef]);


    return (
        <nav className="mt-10 space-y-6">
            {navItems.map((item) => {
                const isActive = active === item.id;
                
                return(
                <a
                    key={item.id}
                    href={`#${item.id}`}
                    className="flex items-center space-x-4 group"
                    onClick={() => setActive(item.id)}
                >
                    <span
                        className={`transition-all duration-300 ${
                            isActive
                                ? "w-16 h-[2px] bg-white"
                                : "w-12 h-[1px] bg-gray-500 group-hover:w-8 group-hover:bg-white"
                        }`}
                    />
                    <span
                        className={`transition-all duration-300 ${
                            isActive
                                ? "text-white text-base font-bold scale-110"
                                : "text-gray-500 text-sm group-hover:text-white group-hover:scale-110"
                        }`}
                    >
                        {item.label}
                    </span>
                </a>
                )
            })}
        </nav>
    );
};

export default Navigation;
