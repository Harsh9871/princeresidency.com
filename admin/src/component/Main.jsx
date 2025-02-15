import React, { useState } from "react";
import Cookies from "js-cookie";
const Main = ({ booking, onImageClick }) => {
    const {
        _id,
        name,
        email,
        whatsappNumber,
        checkInDate,
        checkOutDate,
        roomLocation,
        roomType,
        numberOfGuests,
        breakfast,
        ssLocation,
        verified,
    } = booking;

    const [isVerified, setIsVerified] = useState(verified);
    const [loading, setLoading] = useState(false);

    // Function to handle verification API call
    const handleVerify = async (id) => {
        const confirmVerification = window.confirm("Are you sure you want to verify this booking?");
        if (!confirmVerification) return;

        setLoading(true);
        try {
            const token = Cookies.get("token");

            const response = await fetch(`http://localhost:5000/reserve/${id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
            });

            if (!response.ok) throw new Error("Failed to verify booking");

            setIsVerified(true);
            alert("Booking successfully verified!");
        } catch (error) {
            alert(error.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="p-4 bg-gray-800 rounded-lg shadow-md space-y-2">
            <h2 className="text-lg font-semibold">{name}</h2>
            <p className="text-gray-400"><strong>Email:</strong> {email}</p>
            <p className="text-gray-400"><strong>WhatsApp:</strong> {whatsappNumber}</p>
            <p className="text-gray-400">
                <strong>Check-in:</strong> {new Date(checkInDate).toLocaleDateString()}
            </p>
            <p className="text-gray-400">
                <strong>Check-out:</strong> {new Date(checkOutDate).toLocaleDateString()}
            </p>
            <p className="text-gray-400"><strong>Room Location:</strong> {roomLocation}</p>
            <p className="text-gray-400"><strong>Room Type:</strong> {roomType}</p>
            <p className="text-gray-400"><strong>Guests:</strong> {numberOfGuests}</p>
            <p className="text-gray-400"><strong>Breakfast:</strong> {breakfast ? "Yes" : "No"}</p>

            {/* Image Click to View in Popup */}
            {ssLocation && (
                <img
                    src={ssLocation}
                    alt="Booking Screenshot"
                    className="mt-2 w-full h-40 object-cover rounded-lg cursor-pointer"
                    onClick={() => onImageClick(ssLocation)}
                />
            )}

            {/* Verify Button */}
            {!isVerified && (
                <button
                    onClick={() => handleVerify(_id)}
                    disabled={loading}
                    className={`mt-3 px-4 py-2 rounded-md text-white ${loading ? "bg-gray-600" : "bg-green-600 hover:bg-green-700"
                        }`}
                >
                    {loading ? "Verifying..." : "Verify Booking"}
                </button>
            )}

            {isVerified && <p className="text-green-400 mt-2">✔ Booking Verified</p>}
        </div>
    );
};

export default Main;
