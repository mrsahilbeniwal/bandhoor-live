import { motion } from 'framer-motion';
import { Target, Heart, Eye, Award, Users, TrendingUp } from 'lucide-react';
import './About.css';

const About = () => {
    const values = [
        {
            icon: <Heart size={28} />,
            title: 'Trust',
            description: 'Building relationships based on transparency and reliability'
        },
        {
            icon: <Award size={28} />,
            title: 'Quality',
            description: 'Curating only the finest wedding vendors and experiences'
        },
        {
            icon: <Users size={28} />,
            title: 'Connection',
            description: 'Bridging the gap between vendors and wedding planners'
        },
        {
            icon: <TrendingUp size={28} />,
            title: 'Innovation',
            description: 'Continuously evolving to serve you better'
        }
    ];

    const stats = [
        { number: '50+', label: 'Verified Vendors' },
        { number: '1000+', label: 'Happy Couples' },
        { number: '5+', label: 'Cities' },
        { number: '100%', label: 'Satisfaction' }
    ];

    return (
        <div className="about-page">
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
                        <h1>About Bandhoor</h1>
                        <p>Redefining the wedding planning experience in India</p>
                    </motion.div>
                </div>
            </section>

            {/* Our Story */}
            <section className="section story-section">
                <div className="container">
                    <div className="story-grid">
                        <motion.div
                            className="story-content"
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <span className="section-label">Our Story</span>
                            <h2>A Platform Born From Passion</h2>
                            <div className="divider"></div>
                            <p>
                                Bandhoor was born from a simple observation: planning a wedding in India
                                can be overwhelming. With countless vendors, varying quality standards,
                                and no central platform for comparison, couples often struggle to make
                                informed decisions.
                            </p>
                            <p>
                                We created Bandhoor to be different – not just another listing site,
                                but a true wedding decision platform. We handpick vendors, verify their
                                credentials, and bring them together at exclusive exhibitions where
                                couples can meet, compare, and choose with confidence.
                            </p>
                            <p>
                                Our vision is to transform wedding planning from a stressful task into
                                an enjoyable journey of discovery and connection.
                            </p>
                        </motion.div>
                        <motion.div
                            className="story-image"
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <img src="/logo.jpg" alt="Bandhoor Story" />
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Vision & Mission */}
            <section className="section vision-section bg-cream">
                <div className="container">
                    <div className="vision-grid">
                        <motion.div
                            className="vision-card"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            <div className="vision-icon">
                                <Eye size={32} />
                            </div>
                            <h3>Our Vision</h3>
                            <p>
                                To become India's most trusted wedding decision platform, empowering
                                every couple to plan their dream celebration with clarity and confidence.
                            </p>
                        </motion.div>
                        <motion.div
                            className="vision-card"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                        >
                            <div className="vision-icon">
                                <Target size={32} />
                            </div>
                            <h3>Our Mission</h3>
                            <p>
                                To curate exceptional wedding experiences by connecting couples with
                                verified, premium vendors through innovative exhibition events and
                                digital solutions.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Stats */}
            <section className="section stats-section bg-primary">
                <div className="container">
                    <div className="stats-grid">
                        {stats.map((stat, index) => (
                            <motion.div
                                key={index}
                                className="stat-item"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                            >
                                <span className="stat-number">{stat.number}</span>
                                <span className="stat-label">{stat.label}</span>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Values */}
            <section className="section values-section">
                <div className="container">
                    <motion.div
                        className="section-header text-center"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <span className="section-label">Our Values</span>
                        <h2>What Drives Us</h2>
                        <div className="divider divider-center"></div>
                    </motion.div>

                    <div className="values-grid">
                        {values.map((value, index) => (
                            <motion.div
                                key={index}
                                className="value-card"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                            >
                                <div className="value-icon">{value.icon}</div>
                                <h3>{value.title}</h3>
                                <p>{value.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;
