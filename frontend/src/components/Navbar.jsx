import React, { useState } from 'react';
import { Button } from '../components/ui/button';
import { Link } from 'react-router-dom'; // or 'next/link' if using Next.js

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-background shadow-md fixed w-full z-10 border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="text-2xl font-bold text-foreground">
              <img src="http://localhost:5000/assets/hotel/logo.jpg" alt="Logo" className="h-8 w-auto" />
            </Link>
          </div>
          <div className="hidden md:flex items-center space-x-4">
            <Link to="/" className="text-foreground hover:text-muted-foreground px-3 py-2 rounded-md text-sm font-medium">
              Home
            </Link>
            <Link to="/aboutUs" className="text-foreground hover:text-muted-foreground px-3 py-2 rounded-md text-sm font-medium">
              About Us
            </Link>
            <Link to="/gallery" className="text-foreground hover:text-muted-foreground px-3 py-2 rounded-md text-sm font-medium">
              Gallery
            </Link>
            <Link to="/rules" className="text-foreground hover:text-muted-foreground px-3 py-2 rounded-md text-sm font-medium">
              Rules
            </Link>
          </div>

          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-foreground hover:text-muted-foreground focus:outline-none"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-background border-t border-border">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link to="/" className="block text-foreground hover:text-muted-foreground px-3 py-2 rounded-md text-base font-medium">
              Home
            </Link>
            <Link to="/aboutUs" className="block text-foreground hover:text-muted-foreground px-3 py-2 rounded-md text-base font-medium">
              About Us
            </Link>
            <Link to="/gallery" className="block text-foreground hover:text-muted-foreground px-3 py-2 rounded-md text-base font-medium">
              Gallery
            </Link>
            <Link to="/rules" className="block text-foreground hover:text-muted-foreground px-3 py-2 rounded-md text-base font-medium">
              Rules
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
