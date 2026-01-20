import express from 'express';
import { submitEnquiry } from '../controllers/index.js';

const router = express.Router();

// Public routes
router.post('/', submitEnquiry);

export default router;
