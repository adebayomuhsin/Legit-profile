import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can integrate with your backend or email service if necessary
    setSubmitted(true);
  };

  return (
    <div id="contact" className="contact"> {/* Add id="contact" */}
      {!submitted ? (
        <div className="contact-form">
          <h2>Contact Me</h2>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              required
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              required
            />
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message"
              required
            />
            <button type="submit">Submit</button>
          </form>
        </div>
      ) : (
        <div className="thank-you">
          <h2>Thank You!</h2>
          <p>You will get feedback soon.</p>
        </div>
      )}
    </div>
  );
};

export default Contact;