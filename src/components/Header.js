import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import logo from '../assets/symbol.png';

export default function Header() {
  return (
    <header className="header">
      <div className="header-brand">
        <img src={logo} alt="No Comply Games logo" className="header-logo" />
        <h1>No Comply Games</h1>
      </div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/project">Project</Link>
        <Link to="/about">About</Link>
      </nav>
    </header>
  );
}
