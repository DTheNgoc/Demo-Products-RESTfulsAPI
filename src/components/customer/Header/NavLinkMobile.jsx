import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const NavLinkMobile = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const closeMenu = () => setMobileMenuOpen(false);

  return (
    <nav className="md:hidden flex items-center">
      <button
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        className="text-blue-700 focus:outline-none"
        aria-label="Toggle menu"
      >
        <svg
          className="h-8 w-8"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          {mobileMenuOpen ? (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          ) : (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          )}
        </svg>
      </button>

      {mobileMenuOpen && (
        <div className="absolute top-16 left-0 w-full bg-gradient-to-r from-blue-500 to-blue-800 shadow-lg rounded-b-lg z-50 flex flex-col items-center py-4 animate-fade-in">
          <Link
            to="/"
            onClick={closeMenu}
            className="block py-2 px-4 text-white hover:bg-blue-700 w-full text-center transition-colors duration-300 font-bold"
          >
            Trang chủ
          </Link>
          <Link
            to="/products"
            onClick={closeMenu}
            className="block py-2 px-4 text-white hover:bg-blue-700 w-full text-center transition-colors duration-300 font-bold"
          >
            Sản phẩm
          </Link>
          <Link
            to="/admin"
            onClick={closeMenu}
            className="block py-2 px-4 text-white hover:bg-blue-700 w-full text-center transition-colors duration-300 font-bold"
          >
            Quản trị
          </Link>
        </div>
      )}
    </nav>
  );
};

export default NavLinkMobile;
