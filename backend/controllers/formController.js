import Reservation from "../models/reservations.js";
const submitForm = async (req, res) => {
    console.log("Received form data:", req.body);

    try {
        
        const reservation = await Reservation({
            name: req.body.name,
            email: req.body.email,
            whatsappNumber: req.body.whatsappNumber,
            checkInDate: new Date(req.body.checkInDate), 
            checkOutDate: new Date(req.body.checkOutDate),
            roomLocation: req.body.roomLocation,
            roomType: req.body.roomType,
            numberOfGuests: parseInt(req.body.numberOfGuests), 
            breakfast: req.body.breakfast === "true", 
            ssLocation: req.body.ssLocation, 
        });
        await reservation.save();
        
        res.status(201).json({
            message: "Reservation created successfully!",
            reservation,
        });
    } catch (error) {
        res.status(500).json({ message: "Error saving reservation.", error });
    }

};

const qrForForm = async (req, res) => { 
    console.log("Received form data:", req.body);
    
    res.send({
        qrCode: "http://localhost:5000/assets/qr/qrcode.png",
        
    })
};

export { qrForForm, submitForm };