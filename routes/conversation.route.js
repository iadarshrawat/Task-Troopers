import express from "express";
import {verifyToken} from '../middleware/jwt.js'
import {createOrder, getOrders} from '../controllers/order.controller.js'
import { createConversation, getConversation, getSingleConversation, updateConversation } from "../controllers/conversation.controller.js";

const router = express.Router();

router.get('/', verifyToken, getConversation);
router.get('/', verifyToken, createConversation);
router.get('/single/:id', verifyToken, getSingleConversation);
router.get('/:id', verifyToken, updateConversation);

export default router;