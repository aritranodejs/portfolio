import React from 'react';

const Contact = () => {
    return (
        <section id="contact" className="contact" data-aos="fade-right">
            <h2>Contact Me</h2>
            <form id="contact-form" data-aos="fade-up">
                <input type="text" id="name" name="name" placeholder="Your Name" required />
                <input type="email" id="email" name="email" placeholder="Your Email" required />
                <textarea id="message" name="message" placeholder="Your Message" required></textarea>
                <button type="submit" className="btn">Send Message</button>
            </form>
        </section>
    );
};

export default Contact;
