import { useState, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { User, Building, ArrowRight, CheckCircle } from 'lucide-react';
import './Register.css';

const Register = () => {
    const [searchParams] = useSearchParams();
    const [activeTab, setActiveTab] = useState('visitor');
    const [submitted, setSubmitted] = useState(false);

    const [visitorForm, setVisitorForm] = useState({
        name: '',
        email: '',
        phone: '',
        city: '',
        weddingDate: '',
        additionalInfo: ''
    });

    const [vendorForm, setVendorForm] = useState({
        companyName: '',
        category: '',
        contactPerson: '',
        email: '',
        phone: '',
        city: '',
        website: '',
        description: ''
    });

    useEffect(() => {
        const type = searchParams.get('type');
        if (type === 'vendor') {
            setActiveTab('vendor');
        }
    }, [searchParams]);

    const handleVisitorSubmit = async (e) => {
        e.preventDefault();
        console.log('Visitor form submitted:', visitorForm);
        setSubmitted(true);
    };

    const handleVendorSubmit = async (e) => {
        e.preventDefault();
        console.log('Vendor form submitted:', vendorForm);
        setSubmitted(true);
    };

    const handleVisitorChange = (e) => {
        setVisitorForm({ ...visitorForm, [e.target.name]: e.target.value });
    };

    const handleVendorChange = (e) => {
        setVendorForm({ ...vendorForm, [e.target.name]: e.target.value });
    };

    const vendorCategories = [
        'Venues',
        'Caterers',
        'Photographers & Videographers',
        'Decorators',
        'Makeup Artists',
        'Entertainment & DJs',
        'Wedding Planners',
        'Florists',
        'Invitations & Stationery',
        'Transportation',
        'Other'
    ];

    if (submitted) {
        return (
            <div className="register-page">
                <section className="page-hero">
                    <div className="page-hero-bg"></div>
                    <div className="container">
                        <motion.div
                            className="page-hero-content"
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                        >
                            <h1>Thank You!</h1>
                            <p>We'll be in touch soon</p>
                        </motion.div>
                    </div>
                </section>

                <section className="section">
                    <div className="container">
                        <motion.div
                            className="success-message"
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                        >
                            <CheckCircle size={64} className="success-icon" />
                            <h2>Registration Successful!</h2>
                            <p>
                                {activeTab === 'visitor'
                                    ? "Thank you for registering! We'll notify you about upcoming exhibitions and events."
                                    : "Thank you for your vendor application! Our team will review it and get back to you within 2-3 business days."
                                }
                            </p>
                            <div className="success-actions">
                                <Link to="/" className="btn btn-primary">
                                    Back to Home
                                </Link>
                                <Link to="/how-it-works" className="btn btn-outline">
                                    Learn More
                                </Link>
                            </div>
                        </motion.div>
                    </div>
                </section>
            </div>
        );
    }

    return (
        <div className="register-page">
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
                        <h1>Register</h1>
                        <p>Join the Bandhoor community today</p>
                    </motion.div>
                </div>
            </section>

            {/* Registration Form */}
            <section className="section register-section">
                <div className="container">
                    <div className="register-container">
                        {/* Tab Switcher */}
                        <div className="register-tabs">
                            <button
                                className={`register-tab ${activeTab === 'visitor' ? 'active' : ''}`}
                                onClick={() => setActiveTab('visitor')}
                            >
                                <User size={20} />
                                <span>Visitor Registration</span>
                            </button>
                            <button
                                className={`register-tab ${activeTab === 'vendor' ? 'active' : ''}`}
                                onClick={() => setActiveTab('vendor')}
                            >
                                <Building size={20} />
                                <span>Vendor Application</span>
                            </button>
                        </div>

                        {/* Visitor Form */}
                        {activeTab === 'visitor' && (
                            <motion.form
                                className="register-form"
                                onSubmit={handleVisitorSubmit}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                            >
                                <div className="form-header">
                                    <h2>Visitor Registration</h2>
                                    <p>Register to get updates about exhibitions and connect with vendors</p>
                                </div>

                                <div className="form-grid">
                                    <div className="form-group">
                                        <label className="form-label">Full Name *</label>
                                        <input
                                            type="text"
                                            name="name"
                                            className="form-input"
                                            placeholder="Enter your full name"
                                            value={visitorForm.name}
                                            onChange={handleVisitorChange}
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
                                            value={visitorForm.email}
                                            onChange={handleVisitorChange}
                                            required
                                        />
                                    </div>

                                    <div className="form-group">
                                        <label className="form-label">Phone Number *</label>
                                        <input
                                            type="tel"
                                            name="phone"
                                            className="form-input"
                                            placeholder="+91 98765 43210"
                                            value={visitorForm.phone}
                                            onChange={handleVisitorChange}
                                            required
                                        />
                                    </div>

                                    <div className="form-group">
                                        <label className="form-label">City *</label>
                                        <input
                                            type="text"
                                            name="city"
                                            className="form-input"
                                            placeholder="Your city"
                                            value={visitorForm.city}
                                            onChange={handleVisitorChange}
                                            required
                                        />
                                    </div>

                                    <div className="form-group">
                                        <label className="form-label">Expected Wedding Date</label>
                                        <input
                                            type="date"
                                            name="weddingDate"
                                            className="form-input"
                                            value={visitorForm.weddingDate}
                                            onChange={handleVisitorChange}
                                        />
                                    </div>

                                    <div className="form-group form-group-full">
                                        <label className="form-label">Additional Information</label>
                                        <textarea
                                            name="additionalInfo"
                                            className="form-textarea"
                                            placeholder="Tell us about your wedding plans..."
                                            value={visitorForm.additionalInfo}
                                            onChange={handleVisitorChange}
                                            rows={4}
                                        ></textarea>
                                    </div>
                                </div>

                                <button type="submit" className="btn btn-primary btn-lg btn-full">
                                    Register Now
                                    <ArrowRight size={20} />
                                </button>
                            </motion.form>
                        )}

                        {/* Vendor Form */}
                        {activeTab === 'vendor' && (
                            <motion.form
                                className="register-form"
                                onSubmit={handleVendorSubmit}
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                            >
                                <div className="form-header">
                                    <h2>Vendor Application</h2>
                                    <p>Partner with Bandhoor to connect with high-intent wedding clients</p>
                                </div>

                                <div className="form-grid">
                                    <div className="form-group">
                                        <label className="form-label">Company/Brand Name *</label>
                                        <input
                                            type="text"
                                            name="companyName"
                                            className="form-input"
                                            placeholder="Your company name"
                                            value={vendorForm.companyName}
                                            onChange={handleVendorChange}
                                            required
                                        />
                                    </div>

                                    <div className="form-group">
                                        <label className="form-label">Category *</label>
                                        <select
                                            name="category"
                                            className="form-select"
                                            value={vendorForm.category}
                                            onChange={handleVendorChange}
                                            required
                                        >
                                            <option value="">Select category</option>
                                            {vendorCategories.map((cat) => (
                                                <option key={cat} value={cat}>{cat}</option>
                                            ))}
                                        </select>
                                    </div>

                                    <div className="form-group">
                                        <label className="form-label">Contact Person *</label>
                                        <input
                                            type="text"
                                            name="contactPerson"
                                            className="form-input"
                                            placeholder="Primary contact name"
                                            value={vendorForm.contactPerson}
                                            onChange={handleVendorChange}
                                            required
                                        />
                                    </div>

                                    <div className="form-group">
                                        <label className="form-label">Email Address *</label>
                                        <input
                                            type="email"
                                            name="email"
                                            className="form-input"
                                            placeholder="business@email.com"
                                            value={vendorForm.email}
                                            onChange={handleVendorChange}
                                            required
                                        />
                                    </div>

                                    <div className="form-group">
                                        <label className="form-label">Phone Number *</label>
                                        <input
                                            type="tel"
                                            name="phone"
                                            className="form-input"
                                            placeholder="+91 98765 43210"
                                            value={vendorForm.phone}
                                            onChange={handleVendorChange}
                                            required
                                        />
                                    </div>

                                    <div className="form-group">
                                        <label className="form-label">City *</label>
                                        <input
                                            type="text"
                                            name="city"
                                            className="form-input"
                                            placeholder="Your business location"
                                            value={vendorForm.city}
                                            onChange={handleVendorChange}
                                            required
                                        />
                                    </div>

                                    <div className="form-group form-group-full">
                                        <label className="form-label">Website / Portfolio Link</label>
                                        <input
                                            type="url"
                                            name="website"
                                            className="form-input"
                                            placeholder="https://yourwebsite.com"
                                            value={vendorForm.website}
                                            onChange={handleVendorChange}
                                        />
                                    </div>

                                    <div className="form-group form-group-full">
                                        <label className="form-label">About Your Business *</label>
                                        <textarea
                                            name="description"
                                            className="form-textarea"
                                            placeholder="Tell us about your services, experience, and what makes you unique..."
                                            value={vendorForm.description}
                                            onChange={handleVendorChange}
                                            rows={4}
                                            required
                                        ></textarea>
                                    </div>
                                </div>

                                <button type="submit" className="btn btn-accent btn-lg btn-full">
                                    Submit Application
                                    <ArrowRight size={20} />
                                </button>
                            </motion.form>
                        )}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Register;
