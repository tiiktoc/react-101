// src/pages/HomePage.tsx
import React from "react";
import { useNavigate } from "react-router-dom";

const HomePage: React.FC = () => {
  const navigate = useNavigate();

  const goToNextPage = () => {
    navigate("/profile");
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-blue-500 mb-8 text-center">
        Welcome to the Home Page
      </h1>
      <button
        onClick={goToNextPage}
        className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition text-center"
      >
        Go to Tiktoc Profile
      </button>
    </div>
  );
};

export default HomePage;
