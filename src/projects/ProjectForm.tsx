import React, { SyntheticEvent, useState } from "react";
import { Project } from "./Project";

interface ProjectFormProps {
  project: Project;
  onCancel: () => void;
  onSave: (project: Project) => void;
}

function ProjectForm({ project:initialProject ,onSave, onCancel }: ProjectFormProps) {
  const [project, setProject] = useState(initialProject);

  const handleSubmit = (event: SyntheticEvent) => {
    event.preventDefault();
    onSave(project);
  }

  const handleChange = (event: any) => {
    const { type, name, checked, value } = event.target;
    //se type e uguale a checkbox allora usa checked
    //per il contrario usa il value
    let updatedValue = type === 'checkbox' ? checked : value;
    //Se type e una "stringa" allora trasformalo in numero
    if (type === 'number') {
      updatedValue = Number(updatedValue);
    }

    const change = {
      [name]: updatedValue,
    };

    let updatedProject: Project;


    //Con questa funzione modifichi i dati che vuoi modificare ma non cancella i dati non modificati 
    setProject((p) => {
      updatedProject = new Project({ ...p, ...change });
      return updatedProject;
    });
  }

    return(
    <form className="input-group vertical" onSubmit={handleSubmit}>
        <label htmlFor="name">Project Name</label>
        <input
          type="text"
          name="name"
          placeholder="enter name"
          value={project.name}
          onChange={handleChange}/>
        <label htmlFor="description">Project Description</label>
        <textarea
          name="description"
          placeholder="enter description"
          value={project.description}
          onChange={handleChange}></textarea>
        

        <label htmlFor="budget">Project Budget</label>
        <input
          type="number"
          name="budget"
          placeholder="enter budget"
          value={project.budget}
          onChange={handleChange}/>
        <label htmlFor="isActive">Active?</label>
        <input
          type="checkbox"
          name="isActive"
          checked={project.isActive}
          onChange={handleChange}/>

        <div className="input-group">
        <button className="primary bordered medium">Save</button>
        <span></span>
        <button type="button" className="bordered medium" onClick={onCancel}>cancel</button>
        </div>
  </form>
    )
}

export default ProjectForm
