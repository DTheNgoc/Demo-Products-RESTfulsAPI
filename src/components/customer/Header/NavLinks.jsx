import React from 'react';
import { NavLink } from 'react-router-dom';

const NavLinks = () => {
  const linkClass = ({ isActive }) =>
    `font-bold transition-colors duration-200 ${isActive ? 'text-blue-700' : 'text-gray-600 hover:text-blue-700'
    }`;

  return (
    <nav className="hidden md:flex space-x-6 text-lg font-medium">
      <NavLink to="/" className={linkClass}>
        Trang chủ
      </NavLink>
      <NavLink to="/products" className={linkClass}>
        Sản phẩm
      </NavLink>
      <NavLink to="/admin" className={linkClass}>
        Quản trị
      </NavLink>
    </nav>
  );
};

export default NavLinks;
