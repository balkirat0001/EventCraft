import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../redux/userSlice';

const Navbar = () => {
  const user = useSelector((state) => state.user.user);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <nav className="bg-white shadow px-6 py-4 flex justify-between items-center">
      <Link to="/" className="text-2xl font-bold text-blue-600">
        EventCraft
      </Link>
      <div className="space-x-4">
        {!user ? (
          <>
            <Link to="/login" className="text-blue-600 hover:underline">Login</Link>
            <Link to="/register" className="text-green-600 hover:underline">Register</Link>
          </>
        ) : (
          <>
            <Link to="/profile" className="text-gray-700 hover:underline">Profile</Link>
            <button onClick={handleLogout} className="text-red-600 hover:underline">Logout</button>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
