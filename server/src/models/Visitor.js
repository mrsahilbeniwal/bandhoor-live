import mongoose from 'mongoose';

const visitorSchema = new mongoose.Schema({
    fullName: {
        type: String,
        required: [true, 'Full name is required'],
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
    eventDate: {
        type: String,
        trim: true
    },
    interests: [{
        type: String,
        enum: ['venues', 'catering', 'photography', 'decor', 'makeup', 'entertainment', 'planners', 'other']
    }],
    additionalNotes: {
        type: String,
        trim: true
    },
    source: {
        type: String,
        default: 'website'
    },
    status: {
        type: String,
        enum: ['registered', 'confirmed', 'attended', 'no-show'],
        default: 'registered'
    }
}, {
    timestamps: true
});

// Index for faster queries
visitorSchema.index({ email: 1 });
visitorSchema.index({ createdAt: -1 });

const Visitor = mongoose.model('Visitor', visitorSchema);

export default Visitor;
