import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import NavBar from "./components/NavBar";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import ProjectDetails from "./components/ProjectDetails";
import Credits from "./components/Credits";

import './App.css';
import "./styles/Global.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {/* Home Route: Show NavBar and all sections */}
          <Route
            path="/"
            element={
              <>
                <NavBar />
                <div id="content">
                  <About />
                  <Experience />
                  <Projects />
                  <Credits />
                </div>
              </>
            }
          />

          {/* Project Details Route: No NavBar, only Name */}
          <Route path="/projects/:projectName" element={<ProjectDetails />} />

          {/* Add routes for individual projects here */}
          <Route
            path="/projects/password-checker"
            element={<ProjectDetails projectName="Password Checker" />}
          />
          <Route
            path="/projects/ambient-lighting"
            element={<ProjectDetails projectName="Ambient Lighting" />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
