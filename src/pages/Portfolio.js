import React, { useEffect, useState } from "react";
import Project from "../components/Project";
import "./Portfolio.css";

export default function Portfolio() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {    
    const basePath = process.env.PUBLIC_URL || '';
    fetch(`${basePath}/data/portfolio.json`)
    .then(response => {
      console.log('Response:', response); // Log the response object
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.text(); // Get the response as text
    })
    .then(text => {
      console.log('Response Text:', text); // Log the response text
      try {
        const data = JSON.parse(text); // Manually parse JSON
        console.log('Parsed Data:', data); // Log the parsed data
        setProjects(data);
      } catch (error) {
        console.error('Error parsing JSON:', error);
      }
    })
    .catch(error => console.error('Error fetching the data:', error));
  }, []);

  return (
    <div className="portfolio">
      <h2>The Works of Ian Whitesel</h2>
      <div className="projects">
        {projects.map(project => (
          <Project key={project.id} {...project} />
        ))}
      </div>
    </div>
  );
};
