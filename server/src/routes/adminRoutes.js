import express from 'express';
import { protect, authorize } from '../middleware/auth.js';
import {
    adminLogin,
    getMe,
    getDashboardStats,
    createAdmin,
    getVisitors,
    updateVisitorStatus,
    getVendors,
    updateVendorStatus,
    getEnquiries,
    updateEnquiry
} from '../controllers/index.js';

const router = express.Router();

// Public admin routes
router.post('/login', adminLogin);

// Protected admin routes
router.use(protect);

router.get('/me', getMe);
router.get('/stats', getDashboardStats);

// Visitor management
router.get('/visitors', getVisitors);
router.patch('/visitors/:id', updateVisitorStatus);

// Vendor management
router.get('/vendors', getVendors);
router.patch('/vendors/:id', updateVendorStatus);

// Enquiry management
router.get('/enquiries', getEnquiries);
router.patch('/enquiries/:id', updateEnquiry);

// Super admin only
router.post('/create', authorize('super-admin'), createAdmin);

export default router;
