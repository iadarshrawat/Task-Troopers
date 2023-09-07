import express from "express";
import {verifyToken} from '../middleware/jwt.js'
import {
    createGig,
    deleteGig,
    getGig,
    getGigs
} from '../controllers/gig.controller.js'

const router = express.Router()

router.post('/', verifyToken, createGig);
router.delete('/:id', verifyToken, deleteGig);
router.post('/single/:id', verifyToken, getGig);
router.post('/', verifyToken, getGigs);

export default router;
