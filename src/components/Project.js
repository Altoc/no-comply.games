import React from "react";
import "./Project.css";

export default function Project({ title, description, link, technologies}){
    const techList = technologies.split(', ');
    return (
        <div className="project-card">
            <h3 className="project-title">{title}</h3>
            <p className="project-description">{description}</p>
            <a className="project-link" href={link} target="_blank" rel="noopener noreferrer">
                Learn more
            </a>
            <div className="project-technologies">
                {techList.map((tech, index) => (
                    <span key={index} className="tech-bubble">{tech}</span>
                ))}
            </div>
        </div>
    );
}