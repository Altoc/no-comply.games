import React from 'react';
import "./Footer.css";

export default function Footer() {
  return (
    <>
      <footer className="footer">
        <p>&copy; 2024 Ian Whitesel</p>
        <div className="footer-links">
          <a href="https://github.com/altoc" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
          <a href="https://www.linkedin.com/in/ian-whitesel-76ba40149/" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
          <a href="https://altoc.itch.io/" target="_blank" rel="noopener noreferrer">
            Itch.io
          </a>
          <p>ianwhitesel97@gmail.com</p>
        </div>
      </footer>
    </>
  );
}
