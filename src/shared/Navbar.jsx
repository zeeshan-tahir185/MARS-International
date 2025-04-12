import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
    setMenuOpen(false); // close mobile menu on click
  };

  const menuItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About Us' },
    { id: 'our-mission', label: 'Our Mission' },
    { id: 'our-vision', label: 'Our Vision' },
    { id: 'our-services', label: 'Our Services' },
    { id: 'contact', label: 'Contact Us' },
  ];

  return (
    <header className="fixed w-full bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold text-blue-700 cursor-pointer">
          <img src="/logo.png" alt="" className='w-[100px]' />
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-6">
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="text-gray-700 hover:text-blue-600 font-medium transition"
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow-lg px-4 pb-4">
          {menuItems.map((item) => (
            <div key={item.id} className="py-2">
              <button
                onClick={() => scrollToSection(item.id)}
                className="text-gray-700 hover:text-blue-600 font-medium block w-full text-left"
              >
                {item.label}
              </button>
            </div>
          ))}
        </div>
      )}
    </header>
  );
};

export default Navbar;
