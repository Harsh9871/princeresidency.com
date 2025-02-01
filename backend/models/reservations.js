import mongoose from 'mongoose';
const reservationSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  whatsappNumber: {
    type: String,
    required: true,
  },
  checkInDate: {
    type: Date,
    required: true,
  },
  checkOutDate: {
    type: Date,
    required: true,
  },
  roomLocation: {
    type: String,
    required: true,
    enum:['hotel','clubHouse']
  },
  roomType: {
    type: String,
    required: true,
    enum:['executive','premium']
  },
  numberOfGuests: {
    type: Number,
    required: true,
    min: 1,
    max: 3,
  },
  breakfast: {
    type: Boolean,
    required: true,
  },
  ssLocation: {
    type: String,
    required: true,
  }
});

const Reservation = mongoose.model('Reservation', reservationSchema);
export default Reservation;