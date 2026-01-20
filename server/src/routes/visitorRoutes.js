import express from 'express';
import { registerVisitor } from '../controllers/index.js';

const router = express.Router();

// Public routes
router.post('/', registerVisitor);

export default router;
