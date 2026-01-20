import express from 'express';
import { submitVendorApplication, getApprovedVendors } from '../controllers/index.js';

const router = express.Router();

// Public routes
router.post('/', submitVendorApplication);
router.get('/approved', getApprovedVendors);

export default router;
