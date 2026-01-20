import mongoose from 'mongoose';

const enquirySchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Name is required'],
        trim: true
    },
    email: {
        type: String,
        required: [true, 'Email is required'],
        lowercase: true,
        trim: true
    },
    phone: {
        type: String,
        trim: true
    },
    subject: {
        type: String,
        required: [true, 'Subject is required'],
        enum: ['general', 'visitor', 'vendor', 'partnership', 'media', 'other'],
        default: 'general'
    },
    message: {
        type: String,
        required: [true, 'Message is required'],
        trim: true,
        maxlength: 2000
    },
    isRead: {
        type: Boolean,
        default: false
    },
    isReplied: {
        type: Boolean,
        default: false
    },
    adminNotes: {
        type: String,
        trim: true
    }
}, {
    timestamps: true
});

// Indexes
enquirySchema.index({ isRead: 1 });
enquirySchema.index({ createdAt: -1 });

const Enquiry = mongoose.model('Enquiry', enquirySchema);

export default Enquiry;
