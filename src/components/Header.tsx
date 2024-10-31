// src/components/Header.tsx
import React from "react";
import { Link } from "react-router-dom";

const Header: React.FC = () => {
  return (
    <header className="bg-blue-500 text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">My Website</h1>
        <nav className="space-x-4">
          <Link to="/" className="hover:text-gray-200 transition">
            Home
          </Link>
          <Link to="/profile" className="hover:text-gray-200 transition">
            Profile
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
