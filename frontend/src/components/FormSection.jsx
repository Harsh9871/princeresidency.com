import React, { useEffect, useState } from 'react';
import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import useFormStore from '@/store/form';
import useStore from '@/store/index';

const FormSection = () => {
  const { currentExploration } = useStore();
  const {
    numberOfGuests,
    setNumberOfGuests,
    typeOfRoom,
    setTypeOfRoom,
    checkInDate,
    setCheckInDate,
    checkOutDate,
    setCheckOutDate,
    includeBreakfast,
    setIncludeBreakfast,
  } = useFormStore();

  const [qrCodeUrl, setQrCodeUrl] = useState('');
  const [showQrSection, setShowQrSection] = useState(false);

  useEffect(() => {
    flatpickr("#date-picker", {
      mode: "range",
      minDate: "today",
      dateFormat: "Y-m-d",
      onChange: (selectedDates) => {
        if (selectedDates.length === 2) {
          const formatDate = (date) => {
            const offsetDate = new Date(date.getTime() - date.getTimezoneOffset() * 60000);
            return offsetDate.toISOString().split("T")[0];
          };

          setCheckInDate(formatDate(selectedDates[0]));
          setCheckOutDate(formatDate(selectedDates[1]));
        }
      },
    });
  }, [setCheckInDate, setCheckOutDate]);

  const handleBookNow = async () => {
    if (!showQrSection) {
      // First step: Generate QR Code
      try {
        const formData = {
          name: document.getElementById("name").value.trim(),
          email: document.getElementById("email").value.trim(),
          phone_number: document.getElementById("number").value.trim(),
          check_in_date: checkInDate,
          check_out_date: checkOutDate,
          room_category: typeOfRoom,
          number_of_guests: numberOfGuests,
          include_breakfast: includeBreakfast ? 1 : 0,
        };

        // Validate form
        if (!checkInDate || !checkOutDate) {
          throw new Error("Please select a valid date range.");
        }
        if (!formData.name || !formData.email || !formData.phone_number || !formData.room_category) {
          throw new Error("Please fill all required fields.");
        }
        if (isNaN(formData.number_of_guests) || formData.number_of_guests <= 0) {
          throw new Error("Invalid number of guests.");
        }
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
          throw new Error("Invalid email format.");
        }
        if (!/^\d{10,15}$/.test(formData.phone_number)) {
          throw new Error("Invalid phone number (10-15 digits required).");
        }

        // Generate QR Code
        const response = await fetch("http://localhost:5000/api/forms/qr", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        });
        console.log("Response Status:", response);
        
        const responseData = await response.json();

        if (!response.ok) throw new Error(responseData.message || "QR generation failed");

        // Show QR Section
        setQrCodeUrl(responseData.qr_code_url || "");
        setShowQrSection(true);
        alert("QR code generated! Please upload payment confirmation.");
      } catch (error) {
        alert(error.message);
        console.error("QR Generation Error:", error);
      }
    } else {
      // Second step: Upload Image first
      try {
        const formData = new FormData();
        const imageInput = document.getElementById("image"); 
        const emailInput = document.getElementById("email");
    
        // Ensure input fields exist and contain values
        if (!imageInput || !imageInput.files[0]) {
          throw new Error("Please upload an image.");
        }
        if (!emailInput || !emailInput.value.trim()) {
          throw new Error("Email is required.");
        }
    
        const imageFile = imageInput.files[0]; // Get image
        const email = emailInput.value.trim(); // Get email
    
        formData.append("file", imageFile); // Append image
        formData.append("email", email); // Append email
    
        console.log("Uploading image with email:", email);
    
        // Upload the image first to the server
        const imageUploadResponse = await fetch("http://localhost:5000/upload", {
          method: "POST",
          body: formData, // Send FormData with file and email
        });
    
        // Check if the response is OK
        if (!imageUploadResponse.ok) {
          const errorText = await imageUploadResponse.text(); // Read error response as text
          throw new Error(errorText || "Image upload failed.");
        }
    
        console.log("Image uploaded successfully");
    
        // Try to parse the response as JSON
        let imageResponseData;
        try {
          imageResponseData = await imageUploadResponse.json();
        } catch (error) {
          const errorText = await imageUploadResponse.text();
          throw new Error("Invalid JSON response from image upload: " + errorText);
        }
    
        // Extract the uploaded image URL
        const ssLocation = imageResponseData.url;
    
        // Prepare the form data for the reservation
        const reservationData = {
          name: document.getElementById("name").value.trim(),
          email: email, // Pass email
          whatsappNumber: document.getElementById("number").value.trim(),
          checkInDate: new Date(checkInDate),
          checkOutDate: new Date(checkOutDate),
          roomLocation: currentExploration, // Assuming typeOfRoom is the room location
          roomType: typeOfRoom,
          numberOfGuests: numberOfGuests,
          breakfast: includeBreakfast ? "true" : "false",
          ssLocation, // URL of uploaded image
        };
        
        console.log("Submitting reservation data:", reservationData);
    
        // Submit final reservation form with ssLocation
        const reservationResponse = await fetch("http://localhost:5000/api/forms/submit", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(reservationData),
        });
    
        const reservationResponseData = await reservationResponse.json();
    
        
        console.log("Reservation Response:", reservationResponseData.message);
        alert("Booking confirmed successfully!");
        // window.location.reload(); // Refresh the page
      } catch (error) {
        alert(error.message);
        console.error("Submission Error:", error);
      }
    }
    
    
    
    
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      // Handle file upload logic if needed
    }
  };

  return (
    <section className="bg-background text-foreground py-12 px-4 md:px-0">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-extrabold mb-8 text-center tracking-tight">Hotel Booking Form</h2>
        <form className="bg-card p-10 rounded-2xl shadow-xl space-y-6 border border-border">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-muted-foreground">Name</label>
              <input id="name" name="name" type="text" maxLength={255} required className="w-full mt-2 p-3 bg-input text-foreground rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-ring" />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-muted-foreground">Email</label>
              <input id="email" name="email" type="email" maxLength={255} required className="w-full mt-2 p-3 bg-input text-foreground rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-ring" />
            </div>
          </div>
          <div>
            <label htmlFor="number" className="block text-sm font-medium text-muted-foreground">Phone Number</label>
            <input id="number" name="number" type="text" maxLength={15} required className="w-full mt-2 p-3 bg-input text-foreground rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-ring" />
          </div>
          <div>
            <label htmlFor="date-picker" className="block text-sm font-medium text-muted-foreground">Select Dates</label>
            <input id="date-picker" type="date" className="w-full mt-2 p-3 bg-input text-foreground rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-ring" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="room_category" className="block text-sm font-medium text-muted-foreground">Room Category</label>
              <select
                id="room_category"
                value={typeOfRoom}
                onChange={(e) => setTypeOfRoom(e.target.value)}
                className="w-full mt-2 p-3 bg-input text-foreground rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-ring"
              >
                <option value="">Select a category</option>
                <option value="executive">Exclusive</option>
                <option value="premium">Premium</option>
              </select>
            </div>
            <div>
              <label htmlFor="guests-dropdown" className="block text-sm font-medium text-muted-foreground">Number of Guests</label>
              <select
                id="guests-dropdown"
                value={numberOfGuests}
                onChange={(e) => setNumberOfGuests(Number(e.target.value))}
                className="w-full mt-2 p-3 bg-input text-foreground rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-ring"
              >
                <option value="">Select number of guests</option>
                <option value="1">1 Guest</option>
                <option value="2">2 Guests</option>
                <option value="3">3 Guests (additional bed)</option>
              </select>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <input
              id="include_breakfast"
              name="include_breakfast"
              type="checkbox"
              checked={includeBreakfast}
              onChange={(e) => setIncludeBreakfast(e.target.checked)}
              className="w-5 h-5 bg-input border-border rounded focus:ring-2 focus:ring-ring"
            />
            <label htmlFor="include_breakfast" className="text-sm font-medium text-muted-foreground">Include Breakfast</label>
          </div>
          {showQrSection && (
            <div id="qr-section" className="p-6 bg-accent rounded-lg border border-border">
              <h3 className="text-lg font-semibold text-muted-foreground mb-3">QR Code for Payment</h3>
              {qrCodeUrl ? (
                <img src={qrCodeUrl} alt="QR Code" className="w-48 h-48 mx-auto mb-4 shadow-md rounded-lg" />
              ) : (
                <div className="bg-gray-200 border-2 border-dashed rounded-xl w-48 h-48 mx-auto mb-4" />
              )}
              <div>
                <label htmlFor="image" className="block text-sm font-medium text-muted-foreground">Upload Image</label>
                <input id="image" name="image" type="file" accept="image/*" required className="w-full mt-2 p-3 bg-input text-foreground rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-ring" onChange={handleFileChange} />
                <p className="mt-2 text-xs text-muted-foreground">Please upload an image of your QR code (if applicable).</p>
              </div>
            </div>
          )}
          <button type="button" className="w-full bg-primary text-white font-semibold py-3 px-4 rounded-lg shadow-lg transition-all duration-200 transform hover:scale-105" onClick={handleBookNow}>
            {showQrSection ? "Confirm Booking" : "Book Now"}
          </button>
        </form>
      </div>
    </section>
  );
};

export default FormSection;