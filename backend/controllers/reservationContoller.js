import Reservation from "../models/reservations.js";
const getReservation = async (req, res) => {
    const { id } = req.params;
    const reserv = await Reservation.findById(id);
    if (!reserv) {
        return res.status(404).json({ message: "Reservation not found" });
    }
    res.status(200).json(reserv);

}

const getunVerified = async (req, res) => {
    const reserv = await Reservation.find(
        { verified: false }, 
        {
            "verified": 1,
            "_id": 1,
            "name": 1,
            "email": 1,
            "whatsappNumber": 1,
            "checkInDate": 1,
            "checkOutDate": 1,
            "roomLocation": 1,
            "roomType": 1,
            "numberOfGuests": 1,
            "breakfast": 1,
            "ssLocation": 1
        }
    );
    
    if (!reserv) {
        return res.status(404).json({ message: "Reservation not found" });
    }
    res.status(200).json(reserv);
}

const verifyReservation = async (req, res) => {
    const { id } = req.params;
    const reserv = await Reservation.findByIdAndUpdate(id, { verified: true }, { new: true });
    if (!reserv) {
        return res.status(404).json({ message: "Reservation not found" });
    }
    res.status(200).json(reserv);
}
const getVerified = async (req, res) => {
    const reserv = await Reservation.find(
        { verified: true },
        {
            "verified": 1,
            "_id": 1,
            "name": 1,
            "email": 1,
            "whatsappNumber": 1,
            "checkInDate": 1,
            "checkOutDate": 1,
            "roomLocation": 1,
            "roomType": 1,
            "numberOfGuests": 1,
            "breakfast": 1,
            "ssLocation": 1
        }
    );

    if (!reserv) {
        return res.status(404).json({ message: "Reservation not found" });
    }
    res.status(200).json(reserv);
}
export { getReservation, getunVerified, verifyReservation, getVerified };