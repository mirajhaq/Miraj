import React from "react";
import { Link } from "react-router-dom";
import "../styles/Projects.css";
import FolderOpenRoundedIcon from "@mui/icons-material/FolderOpenRounded";
import FadeInSection from "./FadeInSection";
import ExternalLinks from "./ExternalLinks";

class Projects extends React.Component {
  render() {
    const projects = {
      "Password Checker": {
        desc: "My own version of Have I been Pwned's password checker",
        techStack: "Javascript, PHP, HTML / CSS",
        link: "https://github.com/mirajhaq/Password-Checker",
        open: "https://passwordcheckerapp.azurewebsites.net/"
      },
      "Ambient Lighting": {
        desc: "Ambient lighting setup using SK6812 LEDs with Raspberry Pi.",
        techStack: "Raspberry Pi, SK6812 LEDs, Python",
        link: "https://github.com/mirajhaq/Ambient-Lighting",
        open: "https://ambientlighting.example.com/" // Example URL, replace with your actual link
      }
    };

    return (
      <div id="projects">
        <div className="section-header">
          <span className="section-title">/ projects</span>
        </div>
        <div className="project-container">
          <ul className="projects-grid">
            {Object.keys(projects).map((key, i) => (
              <FadeInSection key={i} delay={`${i + 1}00ms`}>
                <li className="projects-card">
                  <div className="card-header">
                    <div className="folder-icon">
                      <FolderOpenRoundedIcon style={{ fontSize: 35 }}></FolderOpenRoundedIcon>
                    </div>
                    <ExternalLinks
                      githubLink={projects[key]["link"]}
                      openLink={projects[key]["open"]}
                    />
                  </div>

                  <Link to={`/projects/${key}`} className="card-title-link">
                    <div className="card-title" style={{ color: "var(--lightest-slate)" }}>
                      {key}
                    </div>
                  </Link>

                  <div className="card-desc">{projects[key]["desc"]}</div>
                  <div className="card-tech">{projects[key]["techStack"]}</div>
                </li>
              </FadeInSection>
            ))}
          </ul>
        </div>
      </div>

    );
  }
}

export default Projects;


