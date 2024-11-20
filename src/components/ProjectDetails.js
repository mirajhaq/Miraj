// src/components/ProjectDetails.js
import React from "react";
import { useParams, Link } from "react-router-dom";
import PasswordChecker from "./PasswordChecker";
import AmbientLighting from "./AmbientLighting";
import "../styles/ProjectDetails.css";

function ProjectDetails() {
  const { projectName } = useParams();

  // Map project names to components
  const renderProject = () => {
    switch (projectName) {
      case "Password Checker":
        return <PasswordChecker />;
      case "Ambient Lighting":
        return <AmbientLighting />;
      default:
        return <p>Project details for "{projectName}" are not available yet.</p>;
    }
  };

  return (
    <div className="project-details">
      <header className="fixed-header">
        <Link to="/" className="project-name-link">
          Miraj Haq
        </Link>
      </header>

      <article className="project-article">
        {renderProject()}
      </article>
    </div>
  );
}

export default ProjectDetails;
