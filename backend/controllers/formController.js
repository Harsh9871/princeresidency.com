const qrForForm = async (req, res) => {
    
};  
import multer from 'multer';
import path from 'path';
import Reservation from '../models/reservations.js';

// Set up multer storage
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, '../assets/uploads/'); // Save to 'uploads/images' folder
  },
  filename: (req, file, cb) => {
    const fileExt = path.extname(file.originalname); // Get file extension
    cb(null, Date.now() + fileExt); // Use timestamp for unique file names
  }
});

// Initialize multer with storage options
const upload = multer({ storage: storage });

// Middleware to handle file upload
const uploadSingleImage = upload.single('ssLocation'); // 'ssLocation' is the form field name for the image

// submitForm function to handle form submission
const submitForm = async (req, res) => {
  // Upload the image first
  uploadSingleImage(req, res, async (err) => {
    if (err) {
      return res.status(500).json({ message: 'Error uploading image.' });
    }

    // Get the image URL (from the uploaded file)
    const imageUrl = req.file ? `/uploads/images/${req.file.filename}` : null;

    try {
      // Save the reservation data to the database
      const reservation = await Reservation.create({
        name: req.body.name,
        email: req.body.email,
        whatsappNumber: req.body.whatsappNumber,
        checkInDate: req.body.checkInDate,
        checkOutDate: req.body.checkOutDate,
        roomLocation: req.body.roomLocation,
        roomType: req.body.roomType,
        numberOfGuests: req.body.numberOfGuests,
        breakfast: req.body.breakfast,
        ssLocation: imageUrl, 
      });

      // Send a success response
      res.status(201).json({
        message: 'Reservation created successfully!',
        reservation,
      });
    } catch (error) {
      res.status(500).json({ message: 'Error saving reservation.', error });
    }
  });
};



export { qrForForm, submitForm };