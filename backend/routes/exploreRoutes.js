import express from 'express';
const router = express.Router();


// Define a route to fetch hotel rooms
router.get('/hotel', (req, res) => {

    const response  = {
        "option": "Hotel",
        "rooms": [
          {
            "type": "Executive Room",
            "description": "A luxurious room with all amenities.",
            "image": "http://localhost:5000/assets/hotel/e/DSC_9079.jpg",
            "price": "1344"
          },
          {
            "type": "Premium Room",
            "description": "A spacious suite with a beautiful view.",
            "image": "http://localhost:5000/assets/hotel/e/DSC_9079.jpg",
            "price": "1680"
          }
        ]
      }
    res.send(response).status(200);  
})
router.get('/clubhouse', (req, res) => {
    const response  = {
        "option": "Club House",
        "rooms": [
          {
            "type": "Executive Room",
            "description": "A luxurious room with all amenities.",
            "image": "http://localhost:5000/assets/hotel/e/DSC_9079.jpg",
            "price": "1344"
          },
          {
            "type": "Premium Room",
            "description": "A spacious suite with a beautiful view.",
            "image": "http://localhost:5000/assets/hotel/e/DSC_9079.jpg",
            "price": "1680"
          }
        ]
      }
    res.send(response).status(200);
})
export default router;