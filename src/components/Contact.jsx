import React, { useState } from 'react';
import { motion } from 'framer-motion';
import axios from 'axios';
import { toast } from 'react-toastify';

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
      <motion.div
        className="section-header"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.6 }}
      >
        <span className="section-number">06</span>
        <h2 className="section-title">Get In Touch</h2>
      </motion.div>

      <motion.form
        id="contact-form"
        onSubmit={handleSubmit}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <div className="form-group">
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          {errors.name && <div className="error">{errors.name}</div>}
        </div>
        <div className="form-group">
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {errors.email && <div className="error">{errors.email}</div>}
        </div>
        <div className="form-group">
          <textarea
            id="message"
            name="message"
            placeholder="Your Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          {errors.message && <div className="error">{errors.message}</div>}
        </div>
        <motion.button
          type="submit"
          className="btn btn-primary"
          disabled={isSubmitting}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          {isSubmitting ? 'Sending…' : 'Send Message'}
        </motion.button>
      </motion.form>
    </section>
  );
};

export default Contact;
