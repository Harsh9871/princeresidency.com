import express from "express";
const formRoute = express.Router();
import { qrForForm, submitForm } from "../controllers/formController.js";
import validateQRRequest from "../validation/qrMiddleware.js";
import validateFormSubmission from "../validation/paymentMiddleware.js";

formRoute.post("/qr", qrForForm);
formRoute.post("/submit" , submitForm );

export default formRoute;
