import React, { useState } from 'react';
import '../assets/css/Footer.css';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    if (email) {
      // Here you would typically send the email to your backend
      console.log('Newsletter subscription:', email);
      setIsSubscribed(true);
      setEmail('');
      setTimeout(() => setIsSubscribed(false), 3000);
    }
  };
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Main Footer Content */}
        <div className="footer-main">
          {/* Small Map Section */}
          <div className="footer-section map-section-small">
            <h3>Location</h3>
            <div className="map-container-small">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3684.0!2d88.3636!3d22.5726!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a0277a7f3c4a3c7%3A0x1b1b1b1b1b1b1b1b!2sKolkata%2C%20West%20Bengal%2C%20India!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin"
                width="100%"
                height="150"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Kolkata Location Map"
              ></iframe>
            </div>
          </div>

          {/* Contact Info */}
          <div className="footer-section">
            <h3>Contact Info</h3>
            <div className="contact-info">
              <div className="contact-item">
                <i className="fas fa-map-marker-alt"></i>
                <span>Kolkata, India</span>
              </div>
              <div className="contact-item">
                <i className="fas fa-phone"></i>
                <span>+91 8420222247</span>
              </div>
              <div className="contact-item">
                <i className="fas fa-envelope"></i>
                <span>aritra.nodejsdeveloper@gmail.com</span>
              </div>
            </div>
            <div className="social-links">
              <a href="https://www.linkedin.com/in/aritra-dutta-2a3a8322b" target="_blank" rel="noopener noreferrer" className="social-link">
                <i className="fab fa-linkedin"></i>
                <span>LinkedIn</span>
              </a>
              <a href="https://github.com/aritranodejs" target="_blank" rel="noopener noreferrer" className="social-link">
                <i className="fab fa-github"></i>
                <span>GitHub</span>
              </a>
              <a href="mailto:aritra.nodejsdeveloper@gmail.com" className="social-link">
                <i className="fas fa-envelope"></i>
                <span>Email</span>
              </a>
            </div>
          </div>

          {/* Newsletter Signup */}
          <div className="footer-section">
            <h3>Stay Updated</h3>
            <p>Get notified about my latest projects and tech insights.</p>
            <form className="newsletter-form" onSubmit={handleNewsletterSubmit}>
              <div className="newsletter-input-group">
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <button type="submit" className="newsletter-btn">
                  <i className="fas fa-paper-plane"></i>
                </button>
              </div>
              {isSubscribed && (
                <p className="newsletter-success">Thanks for subscribing!</p>
              )}
            </form>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <p>&copy; {new Date().getFullYear()} Aritra Dutta. All rights reserved</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
