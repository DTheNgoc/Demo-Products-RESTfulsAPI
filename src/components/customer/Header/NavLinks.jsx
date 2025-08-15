import React from 'react';
import { Link } from 'react-router-dom';

const NavLinks = () => {
  return (
    <nav className="hidden md:flex space-x-6 text-lg font-medium">
      <Link to="/" className="text-gray-600 font-bold hover:text-blue-700 transition-colors duration-200">
        Trang chủ
      </Link>
      <Link to="/products" className="text-gray-600 font-bold hover:text-blue-700 transition-colors duration-200">
        Sản phẩm
      </Link>
      <Link to="/admin" className="text-gray-600 font-bold hover:text-blue-700 transition-colors duration-200">
        Quản trị
      </Link>
    </nav>
  );
};

export default NavLinks;
