import express from 'express';
import path from 'path';
import fs from 'fs'; // To check if file exists

const router = express.Router();

// Route to serve images dynamically based on filename
router.get('/hotel/:filename', (req, res) => {
    let __dirname = path.dirname(new URL(import.meta.url).pathname);
    let imagesPath = path.join(__dirname, '../assets/hotel'); // Correct path to the hotel folder
    let { filename } = req.params; // Extract filename from URL
    let filePath = path.join(imagesPath, filename); // Get the full path to the image file

    // Check if the file exists
    fs.access(filePath, fs.constants.F_OK, (err) => {
        if (err) {
            return res.status(404).send(`File not found`);
        }

        res.sendFile(filePath, (err) => {
            if (err) {
                return res.status(500).send('Error serving the file');
            }
        });
    });
});

router.get('/hotel/e/:filename', (req, res) => {
    let __dirname = path.dirname(new URL(import.meta.url).pathname);
    let imagesPath = path.join(__dirname, '../assets/hotel/executive'); // Correct path to the hotel folder
    let { filename } = req.params; // Extract filename from URL
    let filePath = path.join(imagesPath, filename); // Get the full path to the image file

    // Check if the file exists
    fs.access(filePath, fs.constants.F_OK, (err) => {
        if (err) {
            return res.status(404).send(`File not found`);
        }

        res.sendFile(filePath, (err) => {
            if (err) {
                return res.status(500).send('Error serving the file');
            }
        });
    });
});
router.get('/hotel/p/:filename', (req, res) => {
    let __dirname = path.dirname(new URL(import.meta.url).pathname);
    let imagesPath = path.join(__dirname, '../assets/hotel/premium'); // Correct path to the hotel folder
    let { filename } = req.params; // Extract filename from URL
    let filePath = path.join(imagesPath, filename); // Get the full path to the image file

    // Check if the file exists
    fs.access(filePath, fs.constants.F_OK, (err) => {
        if (err) {
            return res.status(404).send(`File not found`);
        }

        res.sendFile(filePath, (err) => {
            if (err) {
                return res.status(500).send('Error serving the file');
            }
        });
    });
});
router.get('/clubhouse/e/:filename', (req, res) => {
    let __dirname = path.dirname(new URL(import.meta.url).pathname);
    let imagesPath = path.join(__dirname, '../assets/hotel/executive'); // Correct path to the hotel folder
    let { filename } = req.params; // Extract filename from URL
    let filePath = path.join(imagesPath, filename); // Get the full path to the image file

    // Check if the file exists
    fs.access(filePath, fs.constants.F_OK, (err) => {
        if (err) {
            return res.status(404).send(`File not found`);
        }

        res.sendFile(filePath, (err) => {
            if (err) {
                return res.status(500).send('Error serving the file');
            }
        });
    });
});
router.get('/clubhouse/p/:filename', (req, res) => {
    let __dirname = path.dirname(new URL(import.meta.url).pathname);
    let imagesPath = path.join(__dirname, '../assets/hotel/premium'); // Correct path to the hotel folder
    let { filename } = req.params; // Extract filename from URL
    let filePath = path.join(imagesPath, filename); // Get the full path to the image file

    // Check if the file exists
    fs.access(filePath, fs.constants.F_OK, (err) => {
        if (err) {
            return res.status(404).send(`File not found`);
        }

        res.sendFile(filePath, (err) => {
            if (err) {
                return res.status(500).send('Error serving the file');
            }
        });
    });
});
router.get('/qr/:filename', (req, res) => {
    let __dirname = path.dirname(new URL(import.meta.url).pathname);
    let imagesPath = path.join(__dirname, '../assets/qr'); // Correct path to the hotel folder
    let { filename } = req.params; // Extract filename from URL
    let filePath = path.join(imagesPath, filename); // Get the full path to the image file
    
    // Check if the file exists
    fs.access(filePath, fs.constants.F_OK, (err) => {
        if (err) {
            return res.status(404).send(`File not found`);
        }

        res.sendFile(filePath, (err) => {
            if (err) {
                return res.status(500).send('Error serving the file');
            }
        });
    });
});
router.get('/uploads/images/:filename', (req, res) => {
    let __dirname = path.dirname(new URL(import.meta.url).pathname);
    let imagesPath = path.join(__dirname, '../assets/uploads'); // Correct path to the hotel folder
    let { filename } = req.params; // Extract filename from URL
    let filePath = path.join(imagesPath, filename); // Get the full path to the image file

    // Check if the file exists
    fs.access(filePath, fs.constants.F_OK, (err) => {
        if (err) {
            return res.status(404).send(`File not found`);
        }

        res.sendFile(filePath, (err) => {
            if (err) {
                return res.status(500).send('Error serving the file');
            }
        });
    });
});

export default router;
