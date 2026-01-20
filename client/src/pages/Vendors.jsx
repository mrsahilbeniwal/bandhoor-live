import { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Filter } from 'lucide-react';
import './Vendors.css';

const Vendors = () => {
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [searchQuery, setSearchQuery] = useState('');

    const categories = [
        { id: 'all', name: 'All Categories' },
        { id: 'venues', name: 'Venues' },
        { id: 'caterers', name: 'Caterers' },
        { id: 'photographers', name: 'Photographers' },
        { id: 'decorators', name: 'Decorators' },
        { id: 'makeup', name: 'Makeup Artists' },
        { id: 'entertainment', name: 'Entertainment' }
    ];

    // Placeholder vendors - will be replaced with API data
    const vendors = [
        { id: 1, name: 'Royal Palace Venues', category: 'venues', location: 'Delhi', badge: 'Premium', image: '/images/vendor-venue.png' },
        { id: 2, name: 'Grand Feast Caterers', category: 'caterers', location: 'Mumbai', badge: 'Featured', image: '/images/vendor-catering.png' },
        { id: 3, name: 'Capture Moments Studio', category: 'photographers', location: 'Bangalore', badge: 'Premium', image: '/images/vendor-photography.png' },
        { id: 4, name: 'Elegant Decor Co', category: 'decorators', location: 'Jaipur', badge: 'Featured', image: '/images/vendor-decor.png' },
        { id: 5, name: 'Glam Squad Makeup', category: 'makeup', location: 'Delhi', badge: 'Premium', image: '/images/couple.png' },
        { id: 6, name: 'DJ Beats Entertainment', category: 'entertainment', location: 'Mumbai', badge: 'Featured', image: '/images/hero-bg.png' },
        { id: 7, name: 'Lakeside Resort', category: 'venues', location: 'Udaipur', badge: 'Premium', image: '/images/vendor-venue.png' },
        { id: 8, name: 'Divine Cuisines', category: 'caterers', location: 'Chennai', badge: 'Featured', image: '/images/vendor-catering.png' }
    ];

    const filteredVendors = vendors.filter(vendor => {
        const matchesCategory = selectedCategory === 'all' || vendor.category === selectedCategory;
        const matchesSearch = vendor.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            vendor.location.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    return (
        <div className="vendors-page">
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
                        <h1>Our Vendors</h1>
                        <p>Discover premium wedding vendors curated just for you</p>
                    </motion.div>
                </div>
            </section>

            {/* Filters */}
            <section className="vendors-filters">
                <div className="container">
                    <div className="filters-bar">
                        <div className="search-box">
                            <Search size={20} />
                            <input
                                type="text"
                                placeholder="Search vendors..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="search-input"
                            />
                        </div>
                        <div className="category-filters">
                            <Filter size={18} className="filter-icon" />
                            {categories.map((cat) => (
                                <button
                                    key={cat.id}
                                    className={`filter-btn ${selectedCategory === cat.id ? 'active' : ''}`}
                                    onClick={() => setSelectedCategory(cat.id)}
                                >
                                    {cat.name}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Vendors Grid */}
            <section className="section vendors-section">
                <div className="container">
                    {filteredVendors.length > 0 ? (
                        <motion.div
                            className="vendors-grid"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                        >
                            {filteredVendors.map((vendor, index) => (
                                <motion.div
                                    key={vendor.id}
                                    className="vendor-card"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.05 }}
                                >
                                    <div className="vendor-image">
                                        <img src={vendor.image} alt={vendor.name} />
                                        <span className="vendor-badge">{vendor.badge}</span>
                                    </div>
                                    <div className="vendor-info">
                                        <span className="vendor-category">{vendor.category}</span>
                                        <h3>{vendor.name}</h3>
                                        <p className="vendor-location">📍 {vendor.location}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>
                    ) : (
                        <div className="no-vendors">
                            <h3>No vendors found</h3>
                            <p>Try adjusting your search or filters</p>
                        </div>
                    )}
                </div>
            </section>

            {/* Coming Soon Note */}
            <section className="section coming-soon-section bg-cream">
                <div className="container">
                    <motion.div
                        className="coming-soon-content text-center"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <span className="section-label">Coming Soon</span>
                        <h2>More Vendors After Our First Exhibition</h2>
                        <p>
                            We're currently curating our vendor showcase. After our first exhibition,
                            you'll be able to explore detailed vendor profiles, portfolios, and reviews.
                        </p>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default Vendors;
