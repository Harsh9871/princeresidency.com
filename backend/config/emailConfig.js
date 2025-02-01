import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: process.env.EMAIL_PORT,
    secure: process.env.EMAIL_SECURE === 'true', // True for 465, false for 587
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
    },
});

export const sendEmail = async (to, subject, htmlContent) => {
    try {
        await transporter.sendMail({
            from: `"Prince Residency" <${process.env.EMAIL_USER}>`,
            to,
            subject,
            html: htmlContent,
        });
        console.log(`Email sent to ${to}`);
    } catch (error) {
        console.error(`Email sending failed: ${error.message}`);
    }
};

export default transporter;
