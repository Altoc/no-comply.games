import React from 'react';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <p>&copy; 2024 No Comply Games</p>
      <div className="footer-links">
        <a href="https://twitter.com/YOUR_HANDLE" target="_blank" rel="noopener noreferrer">
          Twitter
        </a>
        <a href="https://altoc.itch.io/" target="_blank" rel="noopener noreferrer">
          Itch.io
        </a>
        <a href="mailto:youremail@nocomply.games">youremail@nocomply.games</a>
      </div>
    </footer>
  );
}
