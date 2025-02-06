import express from 'express';
import multer from 'multer';
import path from 'path';
import fs from 'fs';

// Use import.meta.url to get the directory name in ESM
const __filename = new URL(import.meta.url).pathname;
const __dirname = path.dirname(__filename);

// Create an uploads directory if it doesn't exist
const uploadDir = path.join(__dirname, '../assets/uploads/images');
if (!fs.existsSync(uploadDir)) {
    fs.mkdirSync(uploadDir, { recursive: true });
}


// Set storage engine for multer to specify the destination and filename
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, uploadDir); // Destination folder
    },
    filename: (req, file, cb) => {
        const timestamp = Date.now();
        const fileExtension = path.extname(file.originalname); // Get file extension

        // Construct the filename as email-currentTimeStamp.jpg
        const newFileName = `${timestamp}${fileExtension}`;
        cb(null, newFileName);
    }
});

// Initialize multer with the storage configuration
const upload = multer({ storage: storage });

const router = express.Router();

// Handle POST request to upload a file
router.post('/', upload.single('file'), (req, res) => {
    console.log(req.body.email);
    
    if (!req.file) {
        return res.status(400).send('No file uploaded');
    }

    // Construct the URL for the uploaded file
    const uploadedFileUrl = `http://localhost:${process.env.PORT || 5000}/assets/uploads/images/${req.file.filename}`;

    // Respond with the URL of the uploaded file
    res.json({
        url: uploadedFileUrl
    });
});

export default router;
