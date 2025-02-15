import React, { useState, useEffect } from "react";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import Main from "../component/Main";

const Unverified = () => {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchBookings = async () => {
      const token = Cookies.get("token");

      if (!token) {
        setError("Unauthorized: No token found");
        setLoading(false);
        return;
      }

      try {
        const response = await fetch("http://localhost:5000/reserve/unverified", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        });

        if (!response.ok) throw new Error("Failed to fetch unverified bookings");

        const data = await response.json();
        setBookings(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchBookings();
  }, []);

  return (
    <div className="min-h-screen bg-gray-900 text-white px-6 py-4">
      {/* Sticky Header */}
      <div className="sticky top-0 bg-gray-800 shadow-md p-4 mb-6 flex justify-between items-center rounded-lg z-10">
        <h1 className="text-xl font-semibold">Unverified Bookings</h1>
        <button
          onClick={() => navigate("/verified")}
          className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition duration-300"
        >
          ✅ Verified Bookings
        </button>
      </div>

      {/* Loading & Error Handling */}
      {loading && <p className="text-center text-gray-400">Loading...</p>}
      {error && <p className="text-center text-red-500">{error}</p>}
      {bookings.length === 0 && !loading && !error && (
        <p className="text-center text-gray-400">No unverified bookings found.</p>
      )}

      {/* Grid Layout for Unverified Bookings */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {!loading &&
          !error &&
          bookings.map((booking) => (
            <Main
              key={booking._id}
              booking={booking}
              onImageClick={() => setSelectedImage(booking.ssLocation)}
            />
          ))}
      </div>

      {/* Image Modal Popup */}
      {selectedImage && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 backdrop-blur-sm transition-opacity">
          <div className="relative max-w-lg p-4">
            <img
              src={selectedImage}
              alt="Booking Screenshot"
              className="max-w-full max-h-[90vh] rounded-lg shadow-lg"
            />
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-2 right-2 bg-red-500 text-white px-3 py-1 rounded-full shadow-lg hover:bg-red-600 transition duration-300"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Unverified;
