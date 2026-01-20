import mongoose from 'mongoose';

const vendorSchema = new mongoose.Schema({
    companyName: {
        type: String,
        required: [true, 'Company name is required'],
        trim: true
    },
    category: {
        type: String,
        required: [true, 'Category is required'],
        enum: ['venue', 'catering', 'photography', 'videography', 'decor', 'makeup', 'entertainment', 'planner', 'invitation', 'jewellery', 'clothing', 'other']
    },
    contactPerson: {
        type: String,
        required: [true, 'Contact person name is required'],
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
        required: [true, 'Phone number is required'],
        trim: true
    },
    city: {
        type: String,
        required: [true, 'City is required'],
        trim: true
    },
    website: {
        type: String,
        trim: true
    },
    instagram: {
        type: String,
        trim: true
    },
    description: {
        type: String,
        trim: true,
        maxlength: 500
    },
    status: {
        type: String,
        enum: ['pending', 'approved', 'rejected', 'participated'],
        default: 'pending'
    },
    adminNotes: {
        type: String,
        trim: true
    },
    exhibitionHistory: [{
        exhibitionName: String,
        date: Date,
        location: String
    }]
}, {
    timestamps: true
});

// Indexes
vendorSchema.index({ email: 1 });
vendorSchema.index({ category: 1 });
vendorSchema.index({ status: 1 });
vendorSchema.index({ createdAt: -1 });

const Vendor = mongoose.model('Vendor', vendorSchema);

export default Vendor;
