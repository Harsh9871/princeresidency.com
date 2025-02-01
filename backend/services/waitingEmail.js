import { sendEmail } from '../config/emailConfig.js';

export const sendWaitingEmail = async (userEmail, bookingDetails) => {
    const emailContent = `
        <h2>Booking Request Received</h2>
        <p>Dear ${bookingDetails.name},</p>
        <p>We have received your booking request for <strong>${bookingDetails.roomCategory}</strong> at Prince Residency.</p>
        <p>Check-in: <strong>${bookingDetails.checkInDate}</strong></p>
        <p>Check-out: <strong>${bookingDetails.checkOutDate}</strong></p>
        <p>Your booking is currently under review and will be confirmed shortly.</p>
        <p>We will notify you once your booking is confirmed.</p>
        <p>Thank you for choosing Prince Residency!</p>
    `;

    await sendEmail(userEmail, 'Booking Received - Awaiting Confirmation', emailContent);
};
