// src/components/AmbientLighting.js
import React from "react";
import "../styles/ProjectDetails.css";
import NavBar from "./NavBar";

const AmbientLighting = () => {
  return (
    <div className="project-details">
      <header className="fixed-header">
        <Link to="/" className="project-name-link">Miraj Haq</Link>
      </header>

      <article className="project-article">
        <h1 className="project-title">Ambient Lighting</h1>

        <section className="intro-image">
          <img
            src="/images/ambient-lighting-setup.jpg"
            alt="Ambient Lighting Setup"
          />
        </section>

        <section className="project-description">
          <h2>Description</h2>
          <p>
            An immersive ambient lighting system for TVs using SK6812 LEDs and a
            Raspberry Pi to enhance visual immersion.
          </p>
        </section>

        <section className="project-steps">
          <h2>Steps</h2>
          <ul>
            <li>Connect the SK6812 LEDs to the Raspberry Pi.</li>
            <li>Install necessary libraries and set up the control system.</li>
            <li>Configure lighting effects to match TV content.</li>
          </ul>
        </section>

        <section className="project-images">
          <img
            src="/images/ambient-lighting-step1.jpg"
            alt="Ambient Lighting Step 1"
          />
          <img
            src="/images/ambient-lighting-step2.jpg"
            alt="Ambient Lighting Step 2"
          />
        </section>
      </article>
    </div>
  );
};

export default AmbientLighting;

