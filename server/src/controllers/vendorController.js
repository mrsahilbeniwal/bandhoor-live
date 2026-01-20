import { Vendor } from '../models/index.js';
import { sendEmail } from '../services/emailService.js';

// @desc    Submit vendor application
// @route   POST /api/vendors
// @access  Public
export const submitVendorApplication = async (req, res) => {
    try {
        const {
            companyName,
            category,
            contactPerson,
            email,
            phone,
            city,
            website,
            instagram,
            description
        } = req.body;

        // Check if vendor already applied
        const existingVendor = await Vendor.findOne({ email });
        if (existingVendor) {
            return res.status(400).json({
                success: false,
                message: 'An application with this email already exists'
            });
        }

        // Create vendor application
        const vendor = await Vendor.create({
            companyName,
            category,
            contactPerson,
            email,
            phone,
            city,
            website,
            instagram,
            description,
            status: 'pending'
        });

        // Send confirmation email
        sendEmail({
            to: email,
            subject: 'Bandhoor - Vendor Application Received',
            template: 'vendorApplication',
            data: { name: contactPerson, company: companyName }
        }).catch(err => console.error('Email error:', err));

        res.status(201).json({
            success: true,
            message: 'Application submitted successfully! We will contact you soon.',
            data: {
                id: vendor._id,
                companyName: vendor.companyName,
                status: vendor.status
            }
        });
    } catch (error) {
        console.error('Vendor application error:', error);
        res.status(500).json({
            success: false,
            message: 'Application submission failed. Please try again.'
        });
    }
};

// @desc    Get all vendors (Admin)
// @route   GET /api/admin/vendors
// @access  Private/Admin
export const getVendors = async (req, res) => {
    try {
        const { page = 1, limit = 20, status, category, search } = req.query;

        const query = {};
        if (status) query.status = status;
        if (category) query.category = category;
        if (search) {
            query.$or = [
                { companyName: { $regex: search, $options: 'i' } },
                { contactPerson: { $regex: search, $options: 'i' } },
                { email: { $regex: search, $options: 'i' } }
            ];
        }

        const vendors = await Vendor.find(query)
            .sort({ createdAt: -1 })
            .limit(limit * 1)
            .skip((page - 1) * limit);

        const total = await Vendor.countDocuments(query);

        res.json({
            success: true,
            data: vendors,
            pagination: {
                page: parseInt(page),
                limit: parseInt(limit),
                total,
                pages: Math.ceil(total / limit)
            }
        });
    } catch (error) {
        console.error('Get vendors error:', error);
        res.status(500).json({
            success: false,
            message: 'Failed to fetch vendors'
        });
    }
};

// @desc    Update vendor status (Admin)
// @route   PATCH /api/admin/vendors/:id
// @access  Private/Admin
export const updateVendorStatus = async (req, res) => {
    try {
        const { id } = req.params;
        const { status, adminNotes } = req.body;

        const vendor = await Vendor.findByIdAndUpdate(
            id,
            { status, adminNotes },
            { new: true, runValidators: true }
        );

        if (!vendor) {
            return res.status(404).json({
                success: false,
                message: 'Vendor not found'
            });
        }

        // Send status update email
        if (status === 'approved') {
            sendEmail({
                to: vendor.email,
                subject: 'Bandhoor - Vendor Application Approved!',
                template: 'vendorApproved',
                data: { name: vendor.contactPerson, company: vendor.companyName }
            }).catch(err => console.error('Email error:', err));
        }

        res.json({
            success: true,
            data: vendor
        });
    } catch (error) {
        console.error('Update vendor error:', error);
        res.status(500).json({
            success: false,
            message: 'Failed to update vendor'
        });
    }
};

// @desc    Get approved vendors (Public)
// @route   GET /api/vendors/approved
// @access  Public
export const getApprovedVendors = async (req, res) => {
    try {
        const { category } = req.query;

        const query = { status: 'approved' };
        if (category) query.category = category;

        const vendors = await Vendor.find(query)
            .select('companyName category city description website instagram')
            .sort({ createdAt: -1 });

        res.json({
            success: true,
            data: vendors
        });
    } catch (error) {
        console.error('Get approved vendors error:', error);
        res.status(500).json({
            success: false,
            message: 'Failed to fetch vendors'
        });
    }
};
