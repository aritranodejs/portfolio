import React, { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState({});

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

  const handleSubmit = (event) => {
    event.preventDefault();
    const errors = validateForm();
    if (Object.keys(errors).length > 0) {
      setErrors(errors);
    } else {
        setErrors({});
        toast.success('Form submitted successfully!', {
            position: 'top-center',
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
        console.log(name, email, message);
        setName(''); // Reset name field
        setEmail(''); // Reset email field
        setMessage(''); // Reset message field
    //   axios.post('baseURL/api/contact-me', {
    //     name,
    //     email,
    //     message,
    //   })
    //   .then((response) => {
    //     console.log(response);
    //     // handle success
    //   })
    //   .catch((error) => {
    //     console.error(error);
    //     // handle error
    //   });
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
        <button type="submit" className="btn">Send Message</button>
      </form>
    </section>
  );
};

export default Contact;