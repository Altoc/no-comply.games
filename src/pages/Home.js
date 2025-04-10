import './Home.css';
import logo from '../assets/symbol.png';

export default function Home() {
  return (
    <section className="home">
      <div className="home-content">
        <img src={logo} alt="No Comply Games logo" className="home-logo" />
        <h1>No Comply Games</h1>
        <p>We make experimental, systems-driven games from the edge of the void.</p>
        <div className="home-buttons">
          <a href="https://twitter.com/YOUR_HANDLE" target="_blank" rel="noopener noreferrer">
            Follow us on X
          </a>
          <a href="/project">
            Learn about our first game
          </a>
        </div>
      </div>
    </section>
  );
}
