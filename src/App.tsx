import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import ProfilePage from "./pages/ProfilePage";

const App: React.FC = () => {
  return (
    <Router>
      <Header />
      <main className=""></main>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/profile" element={<ProfilePage />} />
      </Routes>
    </Router>

    // <div>
    //   <Greeting name="TIKTOC" fullname="World" />
    // </div>
  );
};

export default App;
