// src/pages/NextPage.tsx
import React from "react";
import { useNavigate } from "react-router-dom";

const NextPage: React.FC = () => {
  const navigate = useNavigate();

  const goToHomePage = () => {
    navigate("/");
  };

  return (
    <div>
      <h1>Next Page</h1>
      <button onClick={goToHomePage}>back to Home Page</button>
    </div>
  );
};

export default NextPage;
