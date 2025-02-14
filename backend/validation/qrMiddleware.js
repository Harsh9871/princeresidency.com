import { body, validationResult } from "express-validator";

const validateQRRequest = [
    body("name").notEmpty().withMessage("Name is required."),
    body("email").isEmail().withMessage("Valid email is required."),
    body("whatsappNumber").notEmpty().withMessage("WhatsApp number is required."),
    body("checkInDate").isISO8601().toDate().withMessage("Valid check-in date is required."),
    body("checkOutDate").isISO8601().toDate().withMessage("Valid check-out date is required."),
    body("roomLocation").notEmpty().withMessage("Room location is required."),
    body("roomType").notEmpty().withMessage("Room type is required."),
    body("numberOfGuests").isInt({ min: 1 }).withMessage("Number of guests must be at least 1."),
    body("breakfast").isBoolean().withMessage("Breakfast must be true or false."),

    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        next();
    },
];

export default validateQRRequest;
