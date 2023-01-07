import express from 'express';
const router = express.Router();
import { addOrderItems } from '../../controllers/order.controller.js';
import { authMiddleware } from '../../lib/utils.js';

// @route    POST /api/orders
router.post('/',authMiddleware, addOrderItems);

export default router;
