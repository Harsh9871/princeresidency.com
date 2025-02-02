const validatePaymentRequest = (req, res, next) => {
    const errors = [];

    if (!req.body.name || req.body.name.trim() === "") {
        errors.push({ msg: "Name is required" });
    }

    if (!req.body.email || !/\S+@\S+\.\S+/.test(req.body.email)) {
        errors.push({ msg: "Valid email is required" });
    }

    if (!req.body.whatsappNumber || req.body.whatsappNumber.trim() === "") {
        errors.push({ msg: "WhatsApp number is required" });
    }

    if (!req.body.checkInDate || !isValidDate(req.body.checkInDate)) {
        errors.push({ msg: "Valid check-in date is required" });
    }

    if (!req.body.checkOutDate || !isValidDate(req.body.checkOutDate)) {
        errors.push({ msg: "Valid check-out date is required" });
    }

    if (!req.body.roomLocation || req.body.roomLocation.trim() === "") {
        errors.push({ msg: "Room location is required" });
    }

    if (!req.body.roomType || req.body.roomType.trim() === "") {
        errors.push({ msg: "Room type is required" });
    }

    if (!req.body.numberOfGuests || isNaN(req.body.numberOfGuests) || req.body.numberOfGuests < 1 || req.body.numberOfGuests > 3 ) {
        errors.push({ msg: "Number of guests must be between 1 and 3" });
    }

    if (req.body.breakfast !== "true" && req.body.breakfast !== "false") {
        errors.push({ msg: "Breakfast must be a boolean (true or false)" });
    }

    if (new Date(req.body.checkInDate) > new Date(req.body.checkOutDate)) {
        errors.push({ msg: "Check-in date must be before check-out date" });
    }

    if (errors.length > 0) {
        return res.status(400).json({ errors });
    }

    next();
};

// Helper function to validate dates
const isValidDate = (date) => {
    return !isNaN(Date.parse(date));
};

export default validatePaymentRequest;
