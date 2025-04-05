import React from 'react';
import { Link } from 'react-router-dom';

export default function Header(){
    return (
        <>
        <header style={{ textAlign: 'center', padding: '1rem', backgroundColor: '#f1f1f1' }}>
            <h1>Ian Whitesel</h1>
            <nav>
            <Link to="/personal-site" style={{ margin: '0 10px' }}>Home</Link>
            <Link to="/personal-site/portfolio" style={{ margin: '0 10px' }}>Portfolio</Link>
            <Link to="/personal-site/contact" style={{ margin: '0 10px' }}>Contact</Link>
            </nav>
        </header>
        </>
    )
}