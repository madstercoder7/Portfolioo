import React, { useEffect, useRef } from "react";

const GradientBackground = () => {
    const gradientRef = useRef(null);

    useEffect(() => {
        const handleMouseMove = (e) => {
            const { clientX, clientY } = e;

            if (gradientRef.current) {
                gradientRef.current.style.setProperty("--x", `${clientX}px`);
                gradientRef.current.style.setProperty("--y", `${clientY}px`);
            }
        };

        window.addEventListener("mousemove", handleMouseMove);

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
        };
    }, []);

    return (
        <div ref={gradientRef} className="fixed inset-0 z-0 pointer-events-none" style={{background: `radial-gradient(600px circle at var(--x, 50%) var(--y, 50%), rgba(56, 189, 248, 0.15), transparent 90%)`, transition: "background 0.2s ease",}}/>
    );
};

export default GradientBackground;