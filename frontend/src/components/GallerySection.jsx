import React from 'react';
import { Link } from 'react-router-dom'; // If you are using React Router for navigation
import useStore from '@/store/index'; // Import the store to get the current state

const GallerySection = () => {
  // Get the current state (Hotel or Club House)
  const currentState = useStore.getState().currentExploration;

  // Define galleryImages before the conditional check
  let galleryImages = [];

  // Conditional logic to set galleryImages based on currentState
  if (currentState === 'Hotel') {
    galleryImages = [
      {
        src: 'https://plus.unsplash.com/premium_photo-1661964071015-d97428970584?q=80&w=1920&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        alt: 'Room 1',
        caption: 'Executive Room',
      },
      {
        src: 'https://plus.unsplash.com/premium_photo-1661964071015-d97428970584?q=80&w=1920&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        alt: 'Room 2',
        caption: 'Premium Suite',
      },
      {
        src: 'https://plus.unsplash.com/premium_photo-1661964071015-d97428970584?q=80&w=1920&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        alt: 'Room 3',
        caption: 'Luxury Suite',
      },
    ];
  } else {
    galleryImages = [
      {
        src: 'https://plus.unsplash.com/premium_photo-1661964071015-d97428970584?q=80&w=1920&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        alt: 'Room 1',
        caption: 'Executive Room',
      },
      {
        src: 'https://plus.unsplash.com/premium_photo-1661964071015-d97428970584?q=80&w=1920&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        alt: 'Room 2',
        caption: 'Premium Suite',
      },
      {
        src: 'https://plus.unsplash.com/premium_photo-1661964071015-d97428970584?q=80&w=1920&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        alt: 'Room 3',
        caption: 'Luxury Suite',
      },
    ];
  }

  return (
    <section className="py-10 bg-background text-foreground">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-center mb-8">
          Explore Our Beautiful Rooms
        </h1>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 place-items-center ">
          {/* Loop through images */}
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="relative group rounded-lg overflow-hidden shadow-lg flex justify-center items-center"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-auto max-w-full max-h-60 object-cover transition-transform duration-300 transform group-hover:scale-110"
              />
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h3 className="text-lg font-semibold text-white text-center">
                  {image.caption}
                </h3>
              </div>
            </div>
          ))}
        </div>

        {/* "Explore More" Button */}
        <div className="text-center mt-8">
          <Link
            to="/gallery"
            className="bg-primary text-white px-6 py-3 rounded-lg text-lg font-bold hover:bg-primary-dark transition-colors duration-300"
          >
            Explore More
          </Link>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
