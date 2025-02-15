import React from "react";

const Main2 = ({ booking }) => {
  const {
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
  } = booking;

  return (
    <div className="p-4 bg-gray-800 rounded-lg shadow-md space-y-2 mb-4">
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

      {/* Image Preview */}
      {ssLocation && (
        <img
          src={ssLocation}
          alt="Booking Screenshot"
          className="mt-2 w-full h-40 object-cover rounded-lg cursor-pointer"
          onClick={() => window.open(ssLocation, "_blank")}
        />
      )}

      {/* Verified Label */}
      <p className="text-green-400 mt-2">✔ Verified</p>
    </div>
  );
};

export default Main2;
