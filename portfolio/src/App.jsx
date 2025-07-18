import React, { useRef } from "react";
import Navigation from './components/Navigation';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import GradientBackground from './components/GradientBackground';

function App() {
  const scrollContainerRef = useRef(null);

  return (
    <div className="min-h-screen bg-[#0f172a] text-white font-sans relative">
      <GradientBackground />

      {/* Desktop / Large (≥900px) */}
      <div className="hidden half:flex h-screen">
        {/* Sidebar */}
        <div className="w-1/2 fixed h-full flex flex-col justify-between px-16 py-12 z-10">
          <div>
            <h1 className="text-4xl font-bold">Mohit Dewani</h1>
            <p className="text-lg mt-2">First year remote CS student at Golden Gate University</p>
            <p className="text-sm mt-4 text-gray-400">
              I am passionate about web development and always open to learning new things.
            </p>
            <Navigation scrollRef={scrollContainerRef} />
          </div>
        </div>

        {/* Scrollable Content */}
        <div
          ref={scrollContainerRef}
          className="ml-[50%] w-1/2 overflow-y-auto h-screen px-10 py-12 space-y-20 scroll-smooth z-10"
        >
          <section id="about"><About /></section>
          <section id="experience"><Experience /></section>
          <section id="projects"><Projects /></section>
          <section id="contact"><Contact /></section>
        </div>
      </div>

      {/* Mobile / Small (<900px) */}
      <div className="block half:hidden px-6 py-10 space-y-10">
        <div className="text-center">
          <h1 className="text-3xl font-bold">Mohit Dewani</h1>
          <p className="text-md mt-2">First year remote CS student at Golden Gate University</p>
          <p className="text-sm mt-4 text-gray-400">
            I am passionate about web development and always open to learning new things.
          </p>
        </div>
        <section id="about"><About /></section>
        <section id="experience"><Experience /></section>
        <section id="projects"><Projects /></section>
        <section id="contact"><Contact /></section>
      </div>
    </div>
  );
}

export default App;
