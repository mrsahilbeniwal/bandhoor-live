import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Calendar, Users, Star, ArrowRight, CheckCircle } from 'lucide-react';
import './Home.css';

const Home = () => {
    const features = [
        {
            icon: <Users size={32} />,
            title: 'Curated Vendors',
            description: 'Handpicked premium wedding vendors across all categories'
        },
        {
            icon: <Star size={32} />,
            title: 'One Platform',
            description: 'Compare, connect and book – all in one place'
        },
        {
            icon: <Calendar size={32} />,
            title: 'Exhibition Events',
            description: 'Meet vendors in person at our exclusive exhibitions'
        }
    ];

    const categories = [
        { name: 'Venues', count: '50+' },
        { name: 'Caterers', count: '40+' },
        { name: 'Photographers', count: '30+' },
        { name: 'Decorators', count: '35+' },
        { name: 'Makeup Artists', count: '25+' },
        { name: 'Entertainment', count: '20+' }
    ];

    const steps = [
        { number: '01', title: 'Register', desc: 'Sign up as a visitor or vendor' },
        { number: '02', title: 'Explore', desc: 'Browse curated wedding vendors' },
        { number: '03', title: 'Connect', desc: 'Meet at our exhibitions or online' },
        { number: '04', title: 'Celebrate', desc: 'Plan your perfect wedding' }
    ];

    return (
        <div className="home">
            {/* Hero Section */}
            <section className="hero">
                <div className="hero-bg">
                    <div className="hero-overlay"></div>
                </div>
                <div className="hero-content container">
                    <motion.div
                        className="hero-text"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="hero-badge">Wedding Decision Platform</span>
                        <h1 className="hero-title">
                            Where Celebrations Find Their <span>Perfect Match</span>
                        </h1>
                        <p className="hero-subtitle">
                            Discover, compare, and connect with premium wedding vendors at India's most
                            exclusive wedding exhibition platform.
                        </p>
                        <div className="hero-cta">
                            <Link to="/register" className="btn btn-accent btn-lg">
                                Register Now
                                <ArrowRight size={20} />
                            </Link>
                            <Link to="/how-it-works" className="btn btn-outline btn-lg" style={{ borderColor: 'white', color: 'white' }}>
                                How It Works
                            </Link>
                        </div>
                    </motion.div>
                </div>
                <div className="hero-scroll">
                    <span>Scroll to explore</span>
                    <div className="scroll-line"></div>
                </div>
            </section>

            {/* Features Section */}
            <section className="section features bg-cream">
                <div className="container">
                    <motion.div
                        className="section-header text-center"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2>Why Choose Bandhoor?</h2>
                        <div className="divider divider-center"></div>
                        <p className="section-subtitle">
                            Making wedding planning easier, one connection at a time
                        </p>
                    </motion.div>

                    <div className="features-grid">
                        {features.map((feature, index) => (
                            <motion.div
                                key={index}
                                className="feature-card"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                            >
                                <div className="feature-icon">{feature.icon}</div>
                                <h3>{feature.title}</h3>
                                <p>{feature.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* About Preview Section */}
            <section className="section about-preview">
                <div className="container">
                    <div className="about-grid">
                        <motion.div
                            className="about-image"
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <img src="/logo.jpg" alt="Bandhoor Exhibition" className="about-img" />
                            <div className="about-image-accent"></div>
                        </motion.div>
                        <motion.div
                            className="about-content"
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <span className="section-label">About Bandhoor</span>
                            <h2>Redefining How India Plans Weddings</h2>
                            <div className="divider"></div>
                            <p>
                                Bandhoor is not just another wedding platform – it's a decision-making
                                companion for couples and families planning their special day. We bring
                                together India's finest wedding vendors under one roof, making it easier
                                for you to compare, connect, and choose.
                            </p>
                            <ul className="about-list">
                                <li><CheckCircle size={20} /> Verified & premium vendors only</li>
                                <li><CheckCircle size={20} /> In-person exhibition events</li>
                                <li><CheckCircle size={20} /> Transparent pricing & portfolios</li>
                                <li><CheckCircle size={20} /> Personalized recommendations</li>
                            </ul>
                            <Link to="/about" className="btn btn-primary">
                                Learn More About Us
                                <ArrowRight size={18} />
                            </Link>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Categories Section */}
            <section className="section categories bg-primary">
                <div className="container">
                    <motion.div
                        className="section-header text-center"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-white">Vendor Categories</h2>
                        <div className="divider divider-center"></div>
                        <p className="section-subtitle text-white" style={{ opacity: 0.8 }}>
                            Everything you need for your perfect wedding, all in one place
                        </p>
                    </motion.div>

                    <div className="categories-grid">
                        {categories.map((cat, index) => (
                            <motion.div
                                key={index}
                                className="category-card"
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.05 }}
                                whileHover={{ scale: 1.05 }}
                            >
                                <span className="category-count">{cat.count}</span>
                                <h4>{cat.name}</h4>
                            </motion.div>
                        ))}
                    </div>

                    <div className="text-center" style={{ marginTop: 'var(--space-2xl)' }}>
                        <Link to="/vendors" className="btn btn-accent btn-lg">
                            Explore All Vendors
                            <ArrowRight size={20} />
                        </Link>
                    </div>
                </div>
            </section>

            {/* How It Works Preview */}
            <section className="section how-preview">
                <div className="container">
                    <motion.div
                        className="section-header text-center"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <span className="section-label">How It Works</span>
                        <h2>Your Journey With Bandhoor</h2>
                        <div className="divider divider-center"></div>
                    </motion.div>

                    <div className="steps-grid">
                        {steps.map((step, index) => (
                            <motion.div
                                key={index}
                                className="step-card"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                            >
                                <span className="step-number">{step.number}</span>
                                <h3>{step.title}</h3>
                                <p>{step.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="section cta-section bg-cream">
                <div className="container">
                    <motion.div
                        className="cta-content text-center"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2>Ready to Start Your Wedding Journey?</h2>
                        <p>
                            Join thousands of couples who found their perfect wedding vendors through Bandhoor
                        </p>
                        <div className="cta-buttons">
                            <Link to="/register" className="btn btn-primary btn-lg">
                                Register as Visitor
                            </Link>
                            <Link to="/register?type=vendor" className="btn btn-accent btn-lg">
                                Partner as Vendor
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default Home;
