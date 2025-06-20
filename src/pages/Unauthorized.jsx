import React from 'react';
import { Link } from 'react-router-dom';

const Unauthorized = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-yellow-50 px-6">
      <h1 className="text-5xl font-bold text-yellow-600 mb-4">403</h1>
      <p className="text-xl text-gray-700 mb-6">Access Denied. You’re not authorized to view this page.</p>
      <Link
        to="/login"
        className="bg-yellow-500 text-white px-6 py-2 rounded hover:bg-yellow-600 transition"
      >
        Login
      </Link>
    </div>
  );
};

export default Unauthorized;
