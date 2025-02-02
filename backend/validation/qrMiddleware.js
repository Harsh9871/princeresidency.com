// Middleware to validate QR Generation request
const validateQRRequest = (req, res, next) => {
  const errors = [];

  // Manual validation checks for each field
  if (!req.body.name || req.body.name.trim() === "") {
    errors.push({ msg: req.body.name });
  }

  if (!req.body.email || !/\S+@\S+\.\S+/.test(req.body.email)) {
    errors.push({ msg: req.body.email });
  }

  if (!req.body.whatsappNumber || req.body.whatsappNumber.trim() === "") {
    errors.push({ msg: req.body.whatsappNumber });
  }

  if (!req.body.checkInDate || !isValidDate(req.body.checkInDate)) {
    errors.push({ msg: req.body.checkInDate });
  }

  if (!req.body.checkOutDate || !isValidDate(req.body.checkOutDate)) {
    errors.push({ msg: req.body.checkOutDate });
  }

  if (!req.body.roomCategory || req.body.roomCategory.trim() === "") {
    errors.push({ msg: req.body.roomCategory });
  }

  if (!req.body.numberOfGuests || isNaN(req.body.numberOfGuests) || req.body.numberOfGuests < 1) {
    errors.push({ msg: req.body.numberOfGuests });
  }

  if (typeof req.body.includeBreakfast !== 'boolean') {
    errors.push({ msg: req.body.includeBreakfast });
  }

  // If there are errors, return a response with the error details
  if (errors.length > 0) {
    return res.status(400).json({ errors,reqest:req.body });
  }

  // If no errors, pass control to the next middleware
  next();
};

// Utility function to validate ISO 8601 date format
const isValidDate = (date) => {
  return !isNaN(Date.parse(date)); // Check if the date can be parsed into a valid date
};

export default  validateQRRequest ;
