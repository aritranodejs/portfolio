import React, { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateForm = () => {
    const errors = {};
    if (!name) {
      errors.name = 'Name is required';
    }
    if (!email) {
      errors.email = 'Email is required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email)) {
      errors.email = 'Invalid email address';
    }
    if (!message) {
      errors.message = 'Message is required';
    }
    return errors;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const errors = validateForm();
    if (Object.keys(errors).length > 0) {
      setErrors(errors);
      return;
    }

    setErrors({});
    const baseUrl = process.env.REACT_APP_API_KEY || process.env.REACT_API_KEY || '';
    const url = `${baseUrl}/api/contact`;

    try {
      setIsSubmitting(true);
      const response = await axios.post(url, {
        name,
        email,
        message,
      });

      toast.success(
        (response && response.data && response.data.message) ||
        'Message sent successfully!',
        {
          position: 'top-center',
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        }
      );

      setName('');
      setEmail('');
      setMessage('');
    } catch (error) {
      const apiMessage =
        (error && error.response && error.response.data && error.response.data.message) ||
        'Failed to send message. Please try again later.';
      toast.error(apiMessage, {
        position: 'top-center',
        autoClose: 4000,
      });
      // eslint-disable-next-line no-console
      console.error('Contact form submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="contact" data-aos="fade-right">
      <h2>Contact Me</h2>
      <form id="contact-form" data-aos="fade-up" onSubmit={handleSubmit}>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Your Name"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
        {errors.name && <div className="error">{errors.name}</div>}
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Your Email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
        {errors.email && <div className="error">{errors.email}</div>}
        <textarea
          id="message"
          name="message"
          placeholder="Your Message"
          value={message}
          onChange={(event) => setMessage(event.target.value)}
        />
        {errors.message && <div className="error">{errors.message}</div>}
        <button type="submit" className="btn" disabled={isSubmitting}>
          {isSubmitting ? 'Sending...' : 'Send Message'}
        </button>
      </form>
    </section>
  );
};

export default Contact;