import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => (
  <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-tr from-blue-100 to-blue-300 p-6 text-center">
    <h1 className="text-4xl font-extrabold text-blue-800 mb-2 animate-bounce">EventCraft </h1>
    <p className="text-gray-700 text-lg mb-6">Streamline your events. Impress your attendees.</p>
    <div className="space-x-4">
      <Link to="/login" className="bg-blue-600 text-white px-4 py-2 rounded hover:scale-105 transition">Login</Link>
      <Link to="/register" className="bg-green-500 text-white px-4 py-2 rounded hover:scale-105 transition">Sign Up</Link>
      <Link to="/attendee/dashboard" className="bg-gray-200 px-4 py-2 rounded text-blue-700 hover:scale-105 transition">Explore</Link>
    </div>
  </div>
);

export default Home;
// comment