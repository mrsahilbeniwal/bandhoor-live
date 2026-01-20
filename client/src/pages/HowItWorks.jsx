import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { UserCheck, Search, Calendar, Heart, ArrowRight, Building, Users } from 'lucide-react';
import './HowItWorks.css';

const HowItWorks = () => {
    const visitorSteps = [
        {
            icon: <UserCheck size={28} />,
            step: '01',
            title: 'Register Online',
            description: 'Sign up on our website with your wedding details and preferences'
        },
        {
            icon: <Calendar size={28} />,
            step: '02',
            title: 'Visit Our Exhibition',
            description: 'Attend our exclusive wedding exhibition in your city'
        },
        {
            icon: <Search size={28} />,
            step: '03',
            title: 'Explore & Compare',
            description: 'Meet vendors in person, view portfolios, and compare options'
        },
        {
            icon: <Heart size={28} />,
            step: '04',
            title: 'Connect & Book',
            description: 'Connect with your chosen vendors and book their services'
        }
    ];

    const vendorSteps = [
        {
            icon: <Building size={28} />,
            step: '01',
            title: 'Apply as Vendor',
            description: 'Submit your application with portfolio and business details'
        },
        {
            icon: <UserCheck size={28} />,
            step: '02',
            title: 'Get Verified',
            description: 'Our team reviews and verifies your credentials'
        },
        {
            icon: <Calendar size={28} />,
            step: '03',
            title: 'Participate in Exhibition',
            description: 'Showcase your services at our premium wedding exhibitions'
        },
        {
            icon: <Users size={28} />,
            step: '04',
            title: 'Connect with Clients',
            description: 'Meet high-intent couples and grow your business'
        }
    ];

    const benefits = {
        visitors: [
            'Access to verified, premium vendors',
            'Compare multiple options in one place',
            'Meet vendors face-to-face',
            'Exclusive exhibition offers',
            'Personalized recommendations',
            'Transparent pricing'
        ],
        vendors: [
            'Connect with high-intent clients',
            'Showcase at premium venues',
            'Build brand credibility',
            'Quality lead generation',
            'Network with industry peers',
            'Marketing support'
        ]
    };

    return (
        <div className="how-it-works-page">
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
                        <h1>How Bandhoor Works</h1>
                        <p>Your complete guide to the Bandhoor experience</p>
                    </motion.div>
                </div>
            </section>

            {/* For Visitors */}
            <section className="section visitor-section">
                <div className="container">
                    <motion.div
                        className="section-header text-center"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <span className="section-label">For Couples & Families</span>
                        <h2>Your Journey to the Perfect Wedding</h2>
                        <div className="divider divider-center"></div>
                    </motion.div>

                    <div className="steps-timeline">
                        {visitorSteps.map((item, index) => (
                            <motion.div
                                key={index}
                                className="timeline-item"
                                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                            >
                                <div className="timeline-icon">{item.icon}</div>
                                <div className="timeline-content">
                                    <span className="timeline-step">{item.step}</span>
                                    <h3>{item.title}</h3>
                                    <p>{item.description}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    <motion.div
                        className="benefits-box"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h3>Benefits for Visitors</h3>
                        <div className="benefits-grid">
                            {benefits.visitors.map((benefit, index) => (
                                <div key={index} className="benefit-item">
                                    <span className="benefit-check">✓</span>
                                    {benefit}
                                </div>
                            ))}
                        </div>
                        <Link to="/register" className="btn btn-primary btn-lg">
                            Register as Visitor
                            <ArrowRight size={20} />
                        </Link>
                    </motion.div>
                </div>
            </section>

            {/* For Vendors */}
            <section className="section vendor-section bg-cream">
                <div className="container">
                    <motion.div
                        className="section-header text-center"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <span className="section-label">For Wedding Vendors</span>
                        <h2>Grow Your Business With Bandhoor</h2>
                        <div className="divider divider-center"></div>
                    </motion.div>

                    <div className="steps-timeline">
                        {vendorSteps.map((item, index) => (
                            <motion.div
                                key={index}
                                className="timeline-item"
                                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                            >
                                <div className="timeline-icon timeline-icon-vendor">{item.icon}</div>
                                <div className="timeline-content">
                                    <span className="timeline-step">{item.step}</span>
                                    <h3>{item.title}</h3>
                                    <p>{item.description}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    <motion.div
                        className="benefits-box benefits-box-vendor"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h3>Benefits for Vendors</h3>
                        <div className="benefits-grid">
                            {benefits.vendors.map((benefit, index) => (
                                <div key={index} className="benefit-item">
                                    <span className="benefit-check benefit-check-vendor">✓</span>
                                    {benefit}
                                </div>
                            ))}
                        </div>
                        <Link to="/register?type=vendor" className="btn btn-accent btn-lg">
                            Partner With Us
                            <ArrowRight size={20} />
                        </Link>
                    </motion.div>
                </div>
            </section>

            {/* FAQ Preview */}
            <section className="section faq-section">
                <div className="container">
                    <motion.div
                        className="section-header text-center"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <span className="section-label">Questions?</span>
                        <h2>Frequently Asked Questions</h2>
                        <div className="divider divider-center"></div>
                    </motion.div>

                    <div className="faq-list">
                        <motion.div
                            className="faq-item"
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            <h4>Is registration free for visitors?</h4>
                            <p>Yes, visitor registration is completely free. You only pay when you decide to book a vendor's services directly.</p>
                        </motion.div>
                        <motion.div
                            className="faq-item"
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                        >
                            <h4>How are vendors verified?</h4>
                            <p>We have a rigorous verification process that includes portfolio review, credential checks, and quality assessment.</p>
                        </motion.div>
                        <motion.div
                            className="faq-item"
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                        >
                            <h4>Where are the exhibitions held?</h4>
                            <p>We organize exhibitions in major cities across India. Stay tuned for announcements about upcoming events in your area.</p>
                        </motion.div>
                    </div>

                    <div className="text-center" style={{ marginTop: 'var(--space-2xl)' }}>
                        <Link to="/contact" className="btn btn-outline">
                            Have More Questions? Contact Us
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default HowItWorks;
