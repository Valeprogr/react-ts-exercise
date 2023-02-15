import React from "react";
import { Project } from "./Project";



interface ProjectCardProps {
    project: Project,
    onEdit: (project : Project) => void;
  }

function ProjectCard (props: ProjectCardProps) {
    const { project , onEdit} = props;
    
    const handleClick = (projectBeingEdited: Project) =>{
        onEdit(projectBeingEdited);
    }
    return (
        <div key={project.id} className="cols-sm">
        <div className="card">
          <img src={project.imageUrl} alt={project.name} />
          <section className="section dark">
            <h5 className="strong">
              <strong>{project.name}</strong>
            </h5>
            <p>{project.description}</p>
            <p>Budget : {project.budget.toLocaleString()}</p>
            ...
            <p>Budget...</p>
            <button className=" bordered" onClick={()=>{handleClick(project)}}>
            <span className="icon-edit "></span>
            Edit
            </button>
          </section>
        </div>
      </div>
    )
}

export default ProjectCard;
