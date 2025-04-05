import React from 'react';
import './Home.css';

export default function Home() {
  return (
    <div className="home-container">
      <div className="intro-section">
        <img src={`${process.env.PUBLIC_URL}/headshot.jpeg`} alt="Ian Whitesel" className="headshot" />
        <h1>Hello!</h1>
        <p>I'm Ian Whitesel, a passionate Software Developer and Engineer based near beautiful, cloudy Cleveland, Ohio.</p>
        <p>With a keen enthusiasm for computers, programming, video games, and fitness, I strive to bring creativity and innovation to every project I undertake. I believe in using technology to solve real-world problems and make a positive impact on people’s lives.</p>
        <div className="buttons">
          <a href="/personal-site/portfolio" className="btn">View Portfolio</a>
          <a href="/personal-site/contact" className="btn">Contact Me</a>
        </div>
      </div>
      <div className="about-me-section">
        <h2>About Me</h2>
        <p>I hold a Bachelor’s Degree in Computer Science from Kent State University, where I not only excelled academically but also led my team to victory as a KSU Intramural Golf Champion. My professional journey has been characterized by a profound commitment to excellence, innovation, and continuous learning.</p>
        <p>Currently, I am a Fullstack Java Application Developer at Sherwin-Williams, where I leverage a diverse set of programming languages and technologies to build and enhance software solutions that drive business success.</p>
      </div>
      <div className="skills-section">
        <h2>Key Skills</h2>
        <ul className="skills-list">
          <li>Java, Spring Boot, Gradle, Junit</li>
          <li>JavaScript, React, Node.js, Typescript</li>
          <li>Kubernetes, Docker, Github Actions, Helm</li>
          <li>AWS, Bare-metal Servers</li>
          <li>Python, Django</li>
          <li>HTML, CSS</li>
          <li>REST, SOAP, Rsync-over-ssh, carrier pigeon</li>
          <li>Relational (SQL) and Non-relational (MongoDB) Databases</li>
          <li>Git, Microservices, Databases, Unit testing</li>
          <li>Mentor, student</li>
        </ul>
      </div>
      <div className="hobbies-section">
        <h2>Hobbies & Interests</h2>
        <p>When I am not coding, you might find me trail running in the local park, swinging clubs on a golf course, or working on a new Raspberry Pi project. These activities not only challenge me but also allow me to stay energetic and balanced.</p>
      </div>
    </div>
  );
}
