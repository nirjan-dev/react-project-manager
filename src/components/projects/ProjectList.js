import React from "react";
import ProjectSummary from "./ProjectSummary";
import { Link } from "react-router-dom";

function ProjectList({ projects }) {
  return (
    <div className="project-list section">
      {projects &&
        projects.map(project => {
          return (
            <Link key={project.id} to={"projects/" + project.id}>
              <ProjectSummary project={project} />
            </Link>
          );
        })}
    </div>
  );
}

export default ProjectList;
