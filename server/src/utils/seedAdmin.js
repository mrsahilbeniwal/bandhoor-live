import mongoose from 'mongoose';
import dotenv from 'dotenv';
import { Admin } from '../models/index.js';
import config from '../config/index.js';

dotenv.config();

const seedAdmin = async () => {
    try {
        await mongoose.connect(config.mongodbUri);
        console.log('Connected to MongoDB');

        // Check if super-admin exists
        const existingAdmin = await Admin.findOne({ role: 'super-admin' });

        if (existingAdmin) {
            console.log('Super admin already exists:', existingAdmin.email);
            process.exit(0);
        }

        // Create super admin
        const admin = await Admin.create({
            name: 'Sahil Beniwal',
            email: 'sahilbeniwal789@gmail.com',
            password: 'bandhoor@2026', // Change this immediately after first login!
            role: 'super-admin',
            isActive: true
        });

        console.log('Super admin created successfully!');
        console.log('Email:', admin.email);
        console.log('Password: bandhoor@2026');
        console.log('\n⚠️  IMPORTANT: Change your password after first login!');

        process.exit(0);
    } catch (error) {
        console.error('Seeder error:', error);
        process.exit(1);
    }
};

seedAdmin();
