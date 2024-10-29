// src/pages/HomePage.tsx
import React from "react";
import { useNavigate } from "react-router-dom";

const HomePage: React.FC = () => {
  const navigate = useNavigate();

  const goToNextPage = () => {
    navigate("/next");
  };

  return (
    <div>
      <h1>Home Page</h1>
      <button onClick={goToNextPage}>Go to Next Page</button>
    </div>
  );
};

export default HomePage;
