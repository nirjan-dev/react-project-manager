import React from "react";
import Moment from "react-moment";

function ProjectSummary({ project }) {
  return (
    <div className="card z-depth-0 project-summary">
      <div className="card-content grey-text text-darken-3">
        <span className="card-title">{project.title}</span>
        <p>
          Posted by the {project.authorFirstName} {project.authorLastName}
        </p>
        <p className="grey-text">
          <Moment calendar>{project.createdAt.toDate()}</Moment>
        </p>
      </div>
    </div>
  );
}

export default ProjectSummary;
