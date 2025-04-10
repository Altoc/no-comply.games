import './Project.css';

export default function Project() {
  return (
    <section className="project">
      <div className="project-content">
        <h2>Our First Game</h2>
        <p>
          We’re building a tactical roguelike deckbuilder where players pilot modular spaceships, 
          manage their crew, and survive deep-space cargo runs.
        </p>
        <p>
          Each run is different. Reroute power. Swap components mid-flight. Dodge asteroids. 
          Make it to the next station… or die trying.
        </p>
        <p>
          Launching TBD. Follow us on social media to track development!
        </p>
        <div className="project-buttons">
          <a href="https://twitter.com/YOUR_HANDLE" target="_blank" rel="noopener noreferrer">
            Follow for updates
          </a>
        </div>
      </div>
    </section>
  );
}
