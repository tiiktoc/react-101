// src/pages/ProfilePage.tsx
import React from "react";

const ProfilePage: React.FC = () => {
  // Sample profile data (could be replaced with props or data from an API)
  const profile = {
    name: "Tiktoc KS",
    email: "tiktoc@example.com",
    avatar: "/images/avatar.png", // Placeholder image URL
  };

  return (
    <div className="flex flex-col items-center p-8 bg-gray-100 h-screen">
      <div className="bg-white rounded-lg shadow-md p-6 w-full max-w-sm text-center">
        <img
          src={profile.avatar}
          alt="Profile Avatar"
          className="w-24 h-24 rounded-full mx-auto mb-4"
        />
        <h2 className="text-2xl font-bold mb-2">{profile.name}</h2>
        <p className="text-gray-600 mb-4">{profile.email}</p>
        <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition">
          Edit Profile
        </button>
      </div>
    </div>
  );
};

export default ProfilePage;
