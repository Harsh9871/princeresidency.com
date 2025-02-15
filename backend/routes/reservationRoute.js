import express from "express";

import { authenticateUser } from "../middleware/authMiddleware.js";
import {getReservation,getunVerified,verifyReservation,getVerified} from  "../controllers/reservationContoller.js";

const router = express.Router();


router.get('/unverified',authenticateUser,getunVerified);
router.get('/verified',authenticateUser,getVerified);
router.post('/:id',authenticateUser,getReservation);
router.put('/:id',authenticateUser,verifyReservation);

export default router;
