import React from "react";

function Projects() {
    return (
        <section className="projects">
            <h2>Projects</h2>
            <div className="project-list">
                <div className="project-card">
                    <h3>GenProject</h3>
                    <p>Coding project idea generator powered by randomness and creativity.</p>
                </div>
                <div className="project-card">
                    <h3>Conductify</h3>
                    <p>Gesture-based music controller using MediaPipe and OpenCV.</p>
                </div>
                <div className="project-card">
                    <h3>CryptNest</h3>
                    <p>Local password vault with face unlock and intrusion detection.</p>
                </div>
                <div className="project-card">
                    <h3>Stashd</h3>
                    <p>Personal expense and savings tracker built with simplicity in mind.</p>
                </div>
            </div>
        </section>
    );
}

export default Projects;
