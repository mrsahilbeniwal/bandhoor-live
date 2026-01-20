import jwt from 'jsonwebtoken';
import { Admin, Visitor, Vendor, Enquiry } from '../models/index.js';
import config from '../config/index.js';

// Generate JWT token
const generateToken = (id) => {
    return jwt.sign({ id }, config.jwtSecret, {
        expiresIn: config.jwtExpiresIn
    });
};

// @desc    Admin login
// @route   POST /api/admin/login
// @access  Public
export const adminLogin = async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({
                success: false,
                message: 'Please provide email and password'
            });
        }

        // Find admin and include password
        const admin = await Admin.findOne({ email }).select('+password');

        if (!admin || !(await admin.comparePassword(password))) {
            return res.status(401).json({
                success: false,
                message: 'Invalid email or password'
            });
        }

        if (!admin.isActive) {
            return res.status(401).json({
                success: false,
                message: 'Account is deactivated'
            });
        }

        // Update last login
        admin.lastLogin = new Date();
        await admin.save({ validateBeforeSave: false });

        // Generate token
        const token = generateToken(admin._id);

        res.json({
            success: true,
            data: {
                id: admin._id,
                name: admin.name,
                email: admin.email,
                role: admin.role,
                token
            }
        });
    } catch (error) {
        console.error('Admin login error:', error);
        res.status(500).json({
            success: false,
            message: 'Login failed. Please try again.'
        });
    }
};

// @desc    Get current admin
// @route   GET /api/admin/me
// @access  Private/Admin
export const getMe = async (req, res) => {
    res.json({
        success: true,
        data: req.admin
    });
};

// @desc    Get dashboard stats
// @route   GET /api/admin/stats
// @access  Private/Admin
export const getDashboardStats = async (req, res) => {
    try {
        const [
            totalVisitors,
            totalVendors,
            pendingVendors,
            totalEnquiries,
            unreadEnquiries,
            recentVisitors,
            recentVendors
        ] = await Promise.all([
            Visitor.countDocuments(),
            Vendor.countDocuments(),
            Vendor.countDocuments({ status: 'pending' }),
            Enquiry.countDocuments(),
            Enquiry.countDocuments({ isRead: false }),
            Visitor.find().sort({ createdAt: -1 }).limit(5).select('fullName email city createdAt'),
            Vendor.find().sort({ createdAt: -1 }).limit(5).select('companyName category status createdAt')
        ]);

        res.json({
            success: true,
            data: {
                stats: {
                    totalVisitors,
                    totalVendors,
                    pendingVendors,
                    totalEnquiries,
                    unreadEnquiries
                },
                recentVisitors,
                recentVendors
            }
        });
    } catch (error) {
        console.error('Get stats error:', error);
        res.status(500).json({
            success: false,
            message: 'Failed to fetch dashboard stats'
        });
    }
};

// @desc    Create admin (Super Admin only)
// @route   POST /api/admin/create
// @access  Private/Super-Admin
export const createAdmin = async (req, res) => {
    try {
        const { name, email, password, role } = req.body;

        // Only super-admin can create admins
        if (req.admin.role !== 'super-admin') {
            return res.status(403).json({
                success: false,
                message: 'Not authorized to create admins'
            });
        }

        const admin = await Admin.create({
            name,
            email,
            password,
            role: role || 'admin'
        });

        res.status(201).json({
            success: true,
            data: {
                id: admin._id,
                name: admin.name,
                email: admin.email,
                role: admin.role
            }
        });
    } catch (error) {
        console.error('Create admin error:', error);
        res.status(500).json({
            success: false,
            message: 'Failed to create admin'
        });
    }
};
