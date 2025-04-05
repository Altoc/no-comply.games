import React from 'react';
import './Contact.css';

export default function Contact() {
  return (
    <div className="contact-container">
      <h1>Contact Me</h1>
      <p>If you would like to get in touch, please reach out to me through one of the following channels:</p>
      <div className="contact-info">
        <p><strong>Email:</strong> <a href="mailto:ianwhitesel97@gmail.com">ianwhitesel97@gmail.com</a></p>
        <p><strong>Phone:</strong> 234-716-7006</p>
        <div className="social-links">
          <a href="https://github.com/altoc" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="https://www.linkedin.com/in/ian-whitesel" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="https://altoc.itch.io/" target="_blank" rel="noopener noreferrer">Itch.io</a>
        </div>
        <div>
          <img src={`${process.env.PUBLIC_URL}/mybaby.jpeg`} alt="Ian Whitesel" className="contact-picture" />
        </div>
      </div>
      {/*
      <form className="contact-form">
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" required />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" required />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" rows="4" required></textarea>
        </div>
        <button type="submit" className="btn">Send Message</button>
      </form>
    */}
    </div>
  );
}
