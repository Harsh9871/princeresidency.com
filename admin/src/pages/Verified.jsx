import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import Main2 from "../component/Main2";

const Verified = () => {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
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
        const response = await fetch("http://localhost:5000/reserve/verified", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        });

        if (!response.ok) throw new Error("Failed to fetch verified bookings");

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
      {/* Sticky Header with Navigation */}
      <div className="sticky top-0 bg-gray-800 shadow-md p-4 mb-6 flex justify-between items-center rounded-lg z-10">
        <h1 className="text-xl font-semibold">Verified Bookings</h1>
        <button
          onClick={() => navigate("/unverified")}
          className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition duration-300"
        >
          🔄 Unverified Bookings
        </button>
      </div>

      {/* Loading & Error Handling */}
      {loading && <p className="text-center text-gray-400">Loading...</p>}
      {error && <p className="text-center text-red-500">{error}</p>}
      {bookings.length === 0 && !loading && !error && (
        <p className="text-center text-gray-400">No verified bookings found.</p>
      )}

      {/* Grid Layout for Cards */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {!loading && !error && bookings.map((booking) => (
          <Main2 key={booking._id} booking={booking} />
        ))}
      </div>
    </div>
  );
};

export default Verified;
