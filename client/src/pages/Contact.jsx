import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Instagram, Facebook, Linkedin } from 'lucide-react';
import './Contact.css';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
    });
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log('Contact form submitted:', formData);
        setSubmitted(true);
    };

    return (
        <div className="contact-page">
            {/* Hero */}
            <section className="page-hero">
                <div className="page-hero-bg"></div>
                <div className="container">
                    <motion.div
                        className="page-hero-content"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h1>Contact Us</h1>
                        <p>We'd love to hear from you</p>
                    </motion.div>
                </div>
            </section>

            {/* Contact Section */}
            <section className="section contact-section">
                <div className="container">
                    <div className="contact-grid">
                        {/* Contact Info */}
                        <motion.div
                            className="contact-info"
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <h2>Get In Touch</h2>
                            <p>
                                Have questions about Bandhoor? Want to learn more about our exhibitions
                                or partnership opportunities? We're here to help!
                            </p>

                            <div className="contact-details">
                                <div className="contact-item">
                                    <div className="contact-icon">
                                        <Mail size={22} />
                                    </div>
                                    <div>
                                        <h4>Email Us</h4>
                                        <a href="mailto:hello@bandhoor.com">hello@bandhoor.com</a>
                                    </div>
                                </div>

                                <div className="contact-item">
                                    <div className="contact-icon">
                                        <Phone size={22} />
                                    </div>
                                    <div>
                                        <h4>Call Us</h4>
                                        <a href="tel:+919876543210">+91 98765 43210</a>
                                    </div>
                                </div>

                                <div className="contact-item">
                                    <div className="contact-icon">
                                        <MapPin size={22} />
                                    </div>
                                    <div>
                                        <h4>Location</h4>
                                        <span>India</span>
                                    </div>
                                </div>
                            </div>

                            <div className="contact-social">
                                <h4>Follow Us</h4>
                                <div className="social-links">
                                    <a href="#" className="social-link-contact">
                                        <Instagram size={20} />
                                    </a>
                                    <a href="#" className="social-link-contact">
                                        <Facebook size={20} />
                                    </a>
                                    <a href="#" className="social-link-contact">
                                        <Linkedin size={20} />
                                    </a>
                                </div>
                            </div>
                        </motion.div>

                        {/* Contact Form */}
                        <motion.div
                            className="contact-form-container"
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            {submitted ? (
                                <div className="form-success">
                                    <div className="form-success-icon">✓</div>
                                    <h3>Message Sent!</h3>
                                    <p>Thank you for reaching out. We'll get back to you within 24 hours.</p>
                                    <button
                                        className="btn btn-outline"
                                        onClick={() => {
                                            setSubmitted(false);
                                            setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
                                        }}
                                    >
                                        Send Another Message
                                    </button>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit} className="contact-form">
                                    <h3>Send us a Message</h3>

                                    <div className="form-row">
                                        <div className="form-group">
                                            <label className="form-label">Your Name *</label>
                                            <input
                                                type="text"
                                                name="name"
                                                className="form-input"
                                                placeholder="John Doe"
                                                value={formData.name}
                                                onChange={handleChange}
                                                required
                                            />
                                        </div>

                                        <div className="form-group">
                                            <label className="form-label">Email Address *</label>
                                            <input
                                                type="email"
                                                name="email"
                                                className="form-input"
                                                placeholder="your@email.com"
                                                value={formData.email}
                                                onChange={handleChange}
                                                required
                                            />
                                        </div>
                                    </div>

                                    <div className="form-row">
                                        <div className="form-group">
                                            <label className="form-label">Phone Number</label>
                                            <input
                                                type="tel"
                                                name="phone"
                                                className="form-input"
                                                placeholder="+91 98765 43210"
                                                value={formData.phone}
                                                onChange={handleChange}
                                            />
                                        </div>

                                        <div className="form-group">
                                            <label className="form-label">Subject *</label>
                                            <select
                                                name="subject"
                                                className="form-select"
                                                value={formData.subject}
                                                onChange={handleChange}
                                                required
                                            >
                                                <option value="">Select subject</option>
                                                <option value="general">General Inquiry</option>
                                                <option value="visitor">Visitor Question</option>
                                                <option value="vendor">Vendor Partnership</option>
                                                <option value="exhibition">Exhibition Information</option>
                                                <option value="other">Other</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div className="form-group">
                                        <label className="form-label">Your Message *</label>
                                        <textarea
                                            name="message"
                                            className="form-textarea"
                                            placeholder="How can we help you?"
                                            value={formData.message}
                                            onChange={handleChange}
                                            rows={5}
                                            required
                                        ></textarea>
                                    </div>

                                    <button type="submit" className="btn btn-primary btn-lg">
                                        Send Message
                                        <Send size={18} />
                                    </button>
                                </form>
                            )}
                        </motion.div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contact;
