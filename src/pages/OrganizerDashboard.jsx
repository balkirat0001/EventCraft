import React from 'react';
import { useNavigate } from 'react-router-dom';

const mockStats = {
  totalEvents: 5,
  upcoming: 2,
  past: 3,
  totalAttendees: 425,
};

const OrganizerDashboard = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-blue-700 mb-6">
          📊 Organizer Dashboard
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          <div className="bg-white p-4 rounded shadow text-center">
            <p className="text-4xl font-bold text-blue-600">{mockStats.totalEvents}</p>
            <p className="text-gray-600">Total Events</p>
          </div>
          <div className="bg-white p-4 rounded shadow text-center">
            <p className="text-4xl font-bold text-green-600">{mockStats.upcoming}</p>
            <p className="text-gray-600">Upcoming</p>
          </div>
          <div className="bg-white p-4 rounded shadow text-center">
            <p className="text-4xl font-bold text-yellow-600">{mockStats.past}</p>
            <p className="text-gray-600">Past Events</p>
          </div>
          <div className="bg-white p-4 rounded shadow text-center">
            <p className="text-4xl font-bold text-purple-600">{mockStats.totalAttendees}</p>
            <p className="text-gray-600">Total Attendees</p>
          </div>
        </div>

        <div className="flex flex-wrap gap-4">
          <button
            onClick={() => navigate('/create-event')}
            className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
          >
            ➕ Create New Event
          </button>

          <button
            onClick={() => navigate('/manage-events')}
            className="bg-gray-100 border px-6 py-2 rounded hover:bg-gray-200 transition"
          >
            🛠 Manage Events
          </button>

          <button
            onClick={() => navigate('/vendors')}
            className="bg-gray-100 border px-6 py-2 rounded hover:bg-gray-200 transition"
          >
            🍽 Manage Vendors
          </button>
        </div>
      </div>
    </div>
  );
};

export default OrganizerDashboard;
