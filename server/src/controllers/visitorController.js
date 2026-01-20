import { Visitor } from '../models/index.js';
import { sendEmail } from '../services/emailService.js';

// @desc    Register a new visitor
// @route   POST /api/visitors
// @access  Public
export const registerVisitor = async (req, res) => {
    try {
        const { fullName, email, phone, city, eventDate, interests, additionalNotes } = req.body;

        // Check if visitor already registered
        const existingVisitor = await Visitor.findOne({ email });
        if (existingVisitor) {
            return res.status(400).json({
                success: false,
                message: 'This email is already registered'
            });
        }

        // Create visitor
        const visitor = await Visitor.create({
            fullName,
            email,
            phone,
            city,
            eventDate,
            interests,
            additionalNotes
        });

        // Send confirmation email (async, don't await)
        sendEmail({
            to: email,
            subject: 'Welcome to Bandhoor - Registration Confirmed!',
            template: 'visitorRegistration',
            data: { name: fullName }
        }).catch(err => console.error('Email error:', err));

        res.status(201).json({
            success: true,
            message: 'Registration successful! Check your email for confirmation.',
            data: {
                id: visitor._id,
                fullName: visitor.fullName,
                email: visitor.email
            }
        });
    } catch (error) {
        console.error('Visitor registration error:', error);
        res.status(500).json({
            success: false,
            message: 'Registration failed. Please try again.'
        });
    }
};

// @desc    Get all visitors (Admin)
// @route   GET /api/admin/visitors
// @access  Private/Admin
export const getVisitors = async (req, res) => {
    try {
        const { page = 1, limit = 20, status, search } = req.query;

        const query = {};
        if (status) query.status = status;
        if (search) {
            query.$or = [
                { fullName: { $regex: search, $options: 'i' } },
                { email: { $regex: search, $options: 'i' } },
                { phone: { $regex: search, $options: 'i' } }
            ];
        }

        const visitors = await Visitor.find(query)
            .sort({ createdAt: -1 })
            .limit(limit * 1)
            .skip((page - 1) * limit);

        const total = await Visitor.countDocuments(query);

        res.json({
            success: true,
            data: visitors,
            pagination: {
                page: parseInt(page),
                limit: parseInt(limit),
                total,
                pages: Math.ceil(total / limit)
            }
        });
    } catch (error) {
        console.error('Get visitors error:', error);
        res.status(500).json({
            success: false,
            message: 'Failed to fetch visitors'
        });
    }
};

// @desc    Update visitor status (Admin)
// @route   PATCH /api/admin/visitors/:id
// @access  Private/Admin
export const updateVisitorStatus = async (req, res) => {
    try {
        const { id } = req.params;
        const { status } = req.body;

        const visitor = await Visitor.findByIdAndUpdate(
            id,
            { status },
            { new: true, runValidators: true }
        );

        if (!visitor) {
            return res.status(404).json({
                success: false,
                message: 'Visitor not found'
            });
        }

        res.json({
            success: true,
            data: visitor
        });
    } catch (error) {
        console.error('Update visitor error:', error);
        res.status(500).json({
            success: false,
            message: 'Failed to update visitor'
        });
    }
};
