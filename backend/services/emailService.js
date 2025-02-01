import { sendEmail } from '../config/emailConfig.js';

export const sendBookingConfirmation = async (userEmail, bookingDetails) => {
    const emailContent = `
        <h2>Booking Confirmation</h2>
        <p>Dear ${bookingDetails.name},</p>
        <p>Your booking for ${bookingDetails.roomCategory} at Prince Residency has been confirmed.</p>
        <p>Check-in: ${bookingDetails.checkInDate}</p>
        <p>Check-out: ${bookingDetails.checkOutDate}</p>
        <p>Thank you for choosing us!</p>
    `;

    await sendEmail(userEmail, 'Booking Confirmation - Prince Residency', emailContent);
};
