import express from 'express';
import cors from 'cors';
import config from './config/index.js';
import connectDB from './config/db.js';
import { visitorRoutes, vendorRoutes, enquiryRoutes, adminRoutes } from './routes/index.js';

// Initialize express
const app = express();

// Connect to database
connectDB();

// Middleware
app.use(cors({
    origin: config.clientUrl,
    credentials: true
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Health check
app.get('/api/health', (req, res) => {
    res.json({
        success: true,
        message: 'Bandhoor API is running',
        timestamp: new Date().toISOString()
    });
});

// API Routes
app.use('/api/visitors', visitorRoutes);
app.use('/api/vendors', vendorRoutes);
app.use('/api/enquiries', enquiryRoutes);
app.use('/api/admin', adminRoutes);

// 404 handler
app.use((req, res) => {
    res.status(404).json({
        success: false,
        message: 'Route not found'
    });
});

// Error handler
app.use((err, req, res, next) => {
    console.error('Error:', err);
    res.status(err.statusCode || 500).json({
        success: false,
        message: err.message || 'Server Error'
    });
});

// Start server
const PORT = config.port;
app.listen(PORT, () => {
    console.log(`
╔═══════════════════════════════════════════╗
║     Bandhoor API Server Started           ║
║     Environment: ${config.nodeEnv.padEnd(24)}║
║     Port: ${String(PORT).padEnd(30)}║
╚═══════════════════════════════════════════╝
  `);
});

export default app;
