import React from 'react';
import './ConnectWithMe.css';

const ConnectWithMe = () => {
  return (
    <div className="connect-with-me">
      <h2>Connect With Me</h2>
      <p>I'd love to hear from you! Let's connect through any of the options below:</p>
      <div className="social-links">
        <a href="https://github.com/adebayomuhsin" target="_blank" rel="noopener noreferrer">
          <img src="https://img.icons8.com/material-outlined/48/000000/github.png" alt="GitHub" />
          <span>GitHub</span>
        </a>
        <a href="https://www.linkedin.com/in/muhsin-adebayo/" target="_blank" rel="noopener noreferrer">
          <img src="https://img.icons8.com/ios-filled/50/000000/linkedin.png" alt="LinkedIn" />
          <span>LinkedIn</span>
        </a>
        <a href="https://wa.me/message/7AXT23PBP6P5P1" target="_blank" rel="noopener noreferrer">
          <img src="https://img.icons8.com/ios-filled/50/000000/whatsapp.png" alt="WhatsApp" />
          <span>WhatsApp</span>
        </a>
        <a href="mailto:adebayomuhsir@gmail.com" target="_blank" rel="noopener noreferrer">
          <img src="https://img.icons8.com/ios-filled/50/000000/email-open.png" alt="Gmail" />
          <span>Gmail</span>
        </a>
      </div>
    </div>
  );
};

export default ConnectWithMe;
