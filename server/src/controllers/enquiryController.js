import { Enquiry } from '../models/index.js';
import { sendEmail } from '../services/emailService.js';

// @desc    Submit enquiry
// @route   POST /api/enquiries
// @access  Public
export const submitEnquiry = async (req, res) => {
    try {
        const { name, email, phone, subject, message } = req.body;

        const enquiry = await Enquiry.create({
            name,
            email,
            phone,
            subject,
            message
        });

        // Send auto-reply
        sendEmail({
            to: email,
            subject: 'Bandhoor - We received your message',
            template: 'enquiryAutoReply',
            data: { name }
        }).catch(err => console.error('Email error:', err));

        res.status(201).json({
            success: true,
            message: 'Thank you for reaching out! We will get back to you soon.',
            data: { id: enquiry._id }
        });
    } catch (error) {
        console.error('Submit enquiry error:', error);
        res.status(500).json({
            success: false,
            message: 'Failed to submit enquiry. Please try again.'
        });
    }
};

// @desc    Get all enquiries (Admin)
// @route   GET /api/admin/enquiries
// @access  Private/Admin
export const getEnquiries = async (req, res) => {
    try {
        const { page = 1, limit = 20, isRead, subject } = req.query;

        const query = {};
        if (isRead !== undefined) query.isRead = isRead === 'true';
        if (subject) query.subject = subject;

        const enquiries = await Enquiry.find(query)
            .sort({ createdAt: -1 })
            .limit(limit * 1)
            .skip((page - 1) * limit);

        const total = await Enquiry.countDocuments(query);
        const unreadCount = await Enquiry.countDocuments({ isRead: false });

        res.json({
            success: true,
            data: enquiries,
            unreadCount,
            pagination: {
                page: parseInt(page),
                limit: parseInt(limit),
                total,
                pages: Math.ceil(total / limit)
            }
        });
    } catch (error) {
        console.error('Get enquiries error:', error);
        res.status(500).json({
            success: false,
            message: 'Failed to fetch enquiries'
        });
    }
};

// @desc    Mark enquiry as read (Admin)
// @route   PATCH /api/admin/enquiries/:id
// @access  Private/Admin
export const updateEnquiry = async (req, res) => {
    try {
        const { id } = req.params;
        const { isRead, isReplied, adminNotes } = req.body;

        const enquiry = await Enquiry.findByIdAndUpdate(
            id,
            { isRead, isReplied, adminNotes },
            { new: true, runValidators: true }
        );

        if (!enquiry) {
            return res.status(404).json({
                success: false,
                message: 'Enquiry not found'
            });
        }

        res.json({
            success: true,
            data: enquiry
        });
    } catch (error) {
        console.error('Update enquiry error:', error);
        res.status(500).json({
            success: false,
            message: 'Failed to update enquiry'
        });
    }
};
