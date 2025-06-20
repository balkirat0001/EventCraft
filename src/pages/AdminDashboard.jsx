import React from 'react';

const stats = {
  totalUsers: 874,
  organizers: 123,
  attendees: 751,
  totalEvents: 148,
  revenue: '₹1.45L',
  reports: 12,
};

const AdminDashboard = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-blue-800 mb-6">🛡 Admin Dashboard</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          <div className="bg-white p-4 shadow rounded">
            <p className="text-2xl font-semibold text-blue-600">{stats.totalUsers}</p>
            <p className="text-gray-600">Total Users</p>
            <p className="text-sm text-gray-400 mt-1">
              👤 {stats.organizers} Organizers, 👥 {stats.attendees} Attendees
            </p>
          </div>
          <div className="bg-white p-4 shadow rounded">
            <p className="text-2xl font-semibold text-purple-600">{stats.totalEvents}</p>
            <p className="text-gray-600">Total Events</p>
          </div>
          <div className="bg-white p-4 shadow rounded">
            <p className="text-2xl font-semibold text-green-600">{stats.revenue}</p>
            <p className="text-gray-600">Revenue Generated</p>
          </div>
          <div className="bg-white p-4 shadow rounded">
            <p className="text-2xl font-semibold text-red-600">{stats.reports}</p>
            <p className="text-gray-600">Reports/Flagged Events</p>
          </div>
        </div>

        <div className="bg-white p-6 rounded shadow">
          <h3 className="text-xl font-semibold text-gray-700 mb-4">🚨 Latest Reports</h3>
          <ul className="space-y-3">
            <li className="flex justify-between border-b pb-2">
              <p>
                 <strong>AI Summit 2025</strong> flagged for inappropriate content
              </p>
              <button className="text-sm text-blue-600 hover:underline">
                Review
              </button>
            </li>
            <li className="flex justify-between border-b pb-2">
              <p>
                 <strong>Crypto Workshop</strong> reported for spam
              </p>
              <button className="text-sm text-blue-600 hover:underline">
                Review
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;

