import { Link } from 'react-router-dom';
import { Instagram, Facebook, Linkedin, Mail, Phone, MapPin } from 'lucide-react';
import './Footer.css';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="footer-main container">
                <div className="footer-grid">
                    {/* Brand Column */}
                    <div className="footer-brand">
                        <Link to="/" className="footer-logo">
                            <img src="/logo.png" alt="Bandhoor" className="footer-logo-img" />
                        </Link>
                        <p className="footer-tagline">
                            Where Celebrations Find Their Perfect Match
                        </p>
                        <div className="footer-social">
                            <a href="#" aria-label="Instagram" className="social-link">
                                <Instagram size={20} />
                            </a>
                            <a href="#" aria-label="Facebook" className="social-link">
                                <Facebook size={20} />
                            </a>
                            <a href="#" aria-label="LinkedIn" className="social-link">
                                <Linkedin size={20} />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="footer-column">
                        <h4 className="footer-title">Quick Links</h4>
                        <ul className="footer-links">
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/about">About Us</Link></li>
                            <li><Link to="/how-it-works">How It Works</Link></li>
                            <li><Link to="/vendors">Vendors</Link></li>
                            <li><Link to="/register">Register</Link></li>
                        </ul>
                    </div>

                    {/* For Vendors */}
                    <div className="footer-column">
                        <h4 className="footer-title">For Vendors</h4>
                        <ul className="footer-links">
                            <li><Link to="/register?type=vendor">Partner With Us</Link></li>
                            <li><Link to="/how-it-works">How It Works</Link></li>
                            <li><Link to="/contact">Get in Touch</Link></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div className="footer-column">
                        <h4 className="footer-title">Contact Us</h4>
                        <ul className="footer-contact">
                            <li>
                                <Mail size={16} />
                                <a href="mailto:hello@bandhoor.com">hello@bandhoor.com</a>
                            </li>
                            <li>
                                <Phone size={16} />
                                <a href="tel:+919876543210">+91 98765 43210</a>
                            </li>
                            <li>
                                <MapPin size={16} />
                                <span>India</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="footer-bottom">
                <div className="container footer-bottom-content">
                    <p>© {currentYear} Bandhoor. All rights reserved.</p>
                    <div className="footer-legal">
                        <Link to="/privacy">Privacy Policy</Link>
                        <Link to="/terms">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
