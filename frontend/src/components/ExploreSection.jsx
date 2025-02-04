import React, { useEffect, useState } from 'react';
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from '@/components/ui/select';
import useFormStore from '@/store/form'; // Import the form store to manage state
import useStore from '@/store/index'; // Import the store to manage exploration state

const ExploreSection = () => {
  // Access the current exploration state from the store
  const currentState = useStore.getState().currentExploration;
  
  // Set initial state for session based on currentState (Hotel or Club House)
  const [currentSession, setCurrentSession] = useState(currentState === 'Hotel' ? 'hotel' : 'clubHouse');

  const [rooms, setRooms] = useState([]);
  const [selectedGuests, setSelectedGuests] = useState('1'); // Default guest selection

  // Access the state and actions from the form store
  const { setTypeOfRoom, setNumberOfGuests, typeOfRoom, numberOfGuests } = useFormStore();

  // Fetch data from the API based on the current session
  useEffect(() => {
    fetch(`http://localhost:5000/explore/${currentSession}`)
      .then((response) => response.json())
      .then((data) => {
        setRooms(data.rooms);
        // Optionally, you can update the session here if it's dynamic
      })
      .catch((error) => console.error('Error fetching data:', error));
  }, [currentSession]); // Re-run fetch if `currentSession` changes

  // Function to be triggered when a selection is made in the dropdown
  const handleGuestChange = (value) => {
    setSelectedGuests(value);
    setNumberOfGuests(value); // Update the number of guests in the store
    console.log('Selected guests:', value); // Custom logic can be added here
  };

  // Function to handle room selection and set room type and number of guests accordingly
  const handleRoomSelection = (roomType) => {
    setTypeOfRoom(roomType); // Set the room type in the store
    if (roomType === 'Executive') {
      setNumberOfGuests('1'); // Default to 1 guest for Executive room
    } else if (roomType === 'Premium') {
      setNumberOfGuests('2'); // Default to 2 guests for Premium room
    }
    console.log('Room selected:', roomType);
  };

  const scrollToForm = (roomType) => {
    console.log('Scrolling to form for:', roomType);
  };

  return (
    <section className="py-10 bg-background text-foreground">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-center mb-4">
          Explore Our <span id="current_session">{currentSession}</span>
        </h1>
        <div className="flex flex-wrap justify-center items-center gap-6">
          {/* Map through rooms and display room cards dynamically */}
          {rooms.map((room, index) => (
            <div key={index} className="rounded-lg shadow-lg p-6 w-full sm:w-1/2 md:w-1/3 bg-card text-foreground">
              <h2 className="text-2xl font-bold mb-2">{room.type}</h2>
              <p className="text-muted-foreground mb-4">{room.description}</p>
              <img
                src={room.image}
                alt={room.type}
                className="w-full h-40 object-cover mb-4 rounded-lg"
              />
              <div className="flex justify-between items-center mb-4">
                <span className="text-xl font-bold">{`Starting from ${room.price}`}</span>
                <span className="text-muted-foreground">
                  <i className="fas fa-user-friends"></i> including gst
                </span>
              </div>

              <div className="mb-4">
                <label htmlFor="guests-dropdown" className="block text-muted-foreground mb-1">
                  Number of Guests
                </label>
                {/* Select Dropdown for number of guests */}
                <Select value={selectedGuests} onValueChange={handleGuestChange}>
                  <SelectTrigger className="w-full p-2 bg-background text-foreground rounded-lg">
                    <SelectValue placeholder="Select number of guests" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Guests</SelectLabel>
                      <SelectItem value="1">1 Guest</SelectItem>
                      <SelectItem value="2">2 Guests</SelectItem>
                      <SelectItem value="3">3 Guests (additional bed)</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>

              <button
                id="book-now-btn"
                className="w-full bg-primary hover:bg-primary-dark text-white font-bold py-2 rounded-lg"
                onClick={() => {
                  handleRoomSelection(room.type); // Set the room type and guest number
                  scrollToForm(room.type);
                }}
              >
                Book Now
              </button>

              <p id="price-display" className="mt-4 text-success hidden">
                Price: $<span id="price"></span>
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExploreSection;
