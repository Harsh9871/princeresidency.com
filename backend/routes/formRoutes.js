import express from "express";
const router = express.Router();
import { qrForForm, submitForm } from "../controllers/formController.js";
import validateQRRequest from "../validation/qrMiddleware.js";
import validateFormSubmission from "../validation/paymentMiddleware.js";

router.post("/qr", validateQRRequest, qrForForm);
router.post("/submit", validateFormSubmission, submitForm);

export default router;
