import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const [darkMode, setDarkMode] = useState(true); // Default is dark mode

  // Apply dark mode class to the document element on load
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <footer className="bg-background text-foreground border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Us Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">About Us</h3>
            <p className="text-sm">
              Prince Residency is your premier destination for luxury hotel bookings worldwide.
            </p>
          </div>

          {/* Quick Links Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/" className="text-sm hover:text-muted-foreground transition-colors">Home</a></li>
              <li><a href="/about" className="text-sm hover:text-muted-foreground transition-colors">About Us</a></li>
              <li><a href="/terms" className="text-sm hover:text-muted-foreground transition-colors">Terms & Conditions</a></li>
              <li><a href="/rules" className="text-sm hover:text-muted-foreground transition-colors">Rules</a></li>
            </ul>
          </div>

          {/* Contact Us Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li className="text-sm"><a href="https://wa.me/919879821119" target="_blank" rel="noopener noreferrer">(+91) 9879821119</a></li>
              <li className="text-sm"><a href="mailto:info@domain.com">info@domain.com</a></li>
              <li className="text-sm">Jamnagar, Gujarat 361005</li>
            </ul>
          </div>

          {/* Developers Contact Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Developers Contact</h3>
            <ul className="space-y-2">
              <li className="text-sm"><a href="https://www.linkedin.com/in/raithathaharsh" target="_blank" rel="noopener noreferrer">Harsh Raithatha</a></li>
              <li className="text-sm"><a href="https://wa.me/9327449233" target="_blank" rel="noopener noreferrer">Whatsapp</a></li>
              <li className="text-sm"><a href="mailto:harshraithatha0@gmail.com">Email</a></li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom Section */}
        <div className="mt-8 pt-8 border-t border-border flex flex-col sm:flex-row justify-between items-center">
          <p className="text-sm">© 2025 Prince Residency. All rights reserved.</p>
          <div className="flex space-x-4 items-center">
            <a href="/terms" className="text-sm hover:text-muted-foreground transition-colors">Terms & Conditions</a>
            <a href="/rules" className="text-sm hover:text-muted-foreground transition-colors">Rules</a>
            {/* Dark Mode Toggle Button */}
            <Button variant="ghost" size="icon" onClick={toggleDarkMode}>
              {darkMode ? (
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="5" />
                  <line x1="12" y1="1" x2="12" y2="3" />
                  <line x1="12" y1="21" x2="12" y2="23" />
                  <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                  <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                  <line x1="1" y1="12" x2="3" y2="12" />
                  <line x1="21" y1="12" x2="23" y2="12" />
                  <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
                  <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
                </svg>
              ) : (
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
                </svg>
              )}
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
