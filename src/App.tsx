import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/homePage";
import NextPage from "./pages/nextPage";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/next" element={<NextPage />} />
      </Routes>
    </Router>

    // <div>
    //   <Greeting name="TIKTOC" fullname="World" />
    // </div>
  );
};

export default App;
