import express from "express";
import {verifyToken} from '../middleware/jwt.js'
import {createOrder, getOrders} from '../controllers/order.controller.js'

const router = express.Router();


export default router;