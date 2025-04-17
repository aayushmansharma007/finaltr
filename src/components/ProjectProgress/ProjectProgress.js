import React from 'react';
import './ProjectProgress.css';

const ProjectProgress = () => {
  const projects = [
    {
      id: 1,
      name: "Cloud Migration",
      progress: 75,
      status: "On Track",
      dueDate: "Oct 15, 2024",
      tasks: { completed: 15, total: 20 }
    },
    {
      id: 2,
      name: "Security Audit",
      progress: 40,
      status: "In Progress",
      dueDate: "Sep 30, 2024",
      tasks: { completed: 8, total: 12 }
    },
    {
      id: 3,
      name: "Network Upgrade",
      progress: 90,
      status: "Near Completion",
      dueDate: "Aug 25, 2024",
      tasks: { completed: 18, total: 20 }
    }
  ];

  return (
    <section className="project-progress">
      <h2>Project Progress</h2>
      <div className="projects-grid">
        {projects.map(project => (
          <div key={project.id} className="project-card">
            <div className="project-header">
              <h3>{project.name}</h3>
              <span className="status-badge">{project.status}</span>
            </div>
            <div className="progress-bar">
              <div 
                className="progress-fill" 
                style={{ width: `${project.progress}%` }}
              ></div>
            </div>
            <div className="project-details">
              <p>Due: {project.dueDate}</p>
              <p>Tasks: {project.tasks.completed}/{project.tasks.total}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectProgress;