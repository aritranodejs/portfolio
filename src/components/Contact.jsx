import React, { useState } from 'react';
import { motion } from 'framer-motion';
import axios from 'axios';
import { toast } from 'react-toastify';

const CONTACT_INFO = [
  {
    icon: 'fa-envelope',
    label: 'Email',
    value: 'aritra.nodejsdeveloper@gmail.com',
    href: 'mailto:aritra.nodejsdeveloper@gmail.com',
  },
  {
    icon: 'fa-phone',
    label: 'Phone',
    value: '+91 8420222247',
    href: 'tel:+918420222247',
  },
  {
    icon: 'fa-map-marker-alt',
    label: 'Location',
    value: 'Kolkata, India',
  },
  {
    icon: 'fab fa-linkedin-in',
    label: 'LinkedIn',
    value: 'aritra-dutta',
    href: 'https://www.linkedin.com/in/aritra-dutta-2a3a8322b',
  },
];

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateForm = () => {
    const errs = {};
    if (!name) errs.name = 'Name is required';
    if (!email) {
      errs.email = 'Email is required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email)) {
      errs.email = 'Invalid email address';
    }
    if (!message) errs.message = 'Message is required';
    return errs;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const errs = validateForm();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }

    setErrors({});
    const baseUrl = process.env.REACT_APP_API_KEY || process.env.REACT_API_KEY || '';
    const url = `${baseUrl}/api/contact`;

    try {
      setIsSubmitting(true);
      const response = await axios.post(url, { name, email, message });
      toast.success(
        (response?.data?.message) || 'Message sent successfully!',
        { position: 'top-center', autoClose: 3000 }
      );
      setName('');
      setEmail('');
      setMessage('');
    } catch (error) {
      const apiMessage =
        error?.response?.data?.message || 'Failed to send message. Please try again later.';
      toast.error(apiMessage, { position: 'top-center', autoClose: 4000 });
      console.error('Contact form submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="contact section">
      <div className="contact-ambient" aria-hidden="true" />

      <motion.div
        className="section-header"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.6 }}
      >
        <div className="section-header-row">
          <span className="section-number">07</span>
          <h2 className="section-title">Get In Touch</h2>
        </div>
        <p className="section-subtitle">
          Have a project in mind or want to collaborate? I&apos;d love to hear from you.
        </p>
      </motion.div>

      <div className="contact-shell">
        <motion.div
          className="contact-sidebar"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="contact-sidebar-header">
            <h3>Let&apos;s Connect</h3>
            <p>Open to full-time roles, freelance projects, and technical collaborations.</p>
          </div>

          <div className="contact-availability">
            <span className="pulse-dot" />
            <span>Typically responds within 24 hours</span>
          </div>

          <div className="contact-cards">
            {CONTACT_INFO.map((item, i) => (
              <motion.div
                className="contact-card"
                key={item.label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
              >
                <div className="contact-card-icon">
                  <i className={`fas ${item.icon}`} />
                </div>
                <div className="contact-card-body">
                  <span className="contact-card-label">{item.label}</span>
                  {item.href ? (
                    <a
                      href={item.href}
                      target={item.href.startsWith('http') ? '_blank' : undefined}
                      rel="noopener noreferrer"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <p>{item.value}</p>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.form
          id="contact-form"
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          <div className="contact-form-header">
            <h3>Send a Message</h3>
            <p>Fill out the form and I&apos;ll get back to you shortly.</p>
          </div>

          <div className="contact-form-row">
            <div className="form-group">
              <label htmlFor="name">Your Name</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="John Doe"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              {errors.name && <div className="error">{errors.name}</div>}
            </div>
            <div className="form-group">
              <label htmlFor="email">Your Email</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="john@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              {errors.email && <div className="error">{errors.email}</div>}
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="message">Your Message</label>
            <textarea
              id="message"
              name="message"
              placeholder="Tell me about your project or opportunity..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            {errors.message && <div className="error">{errors.message}</div>}
          </div>

          <motion.button
            type="submit"
            className="btn btn-primary contact-submit"
            disabled={isSubmitting}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            {isSubmitting ? (
              <>
                <i className="fas fa-circle-notch fa-spin" /> Sending…
              </>
            ) : (
              <>
                <i className="fas fa-paper-plane" /> Send Message
              </>
            )}
          </motion.button>
        </motion.form>
      </div>
    </section>
  );
};

export default Contact;
