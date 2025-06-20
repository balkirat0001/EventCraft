import React from 'react';
import { useSelector } from 'react-redux';

const AttendeeDashboard = () => {
  const user = useSelector((state) => state.user.user);


  const upcomingEvents = [
    {
      id: '1',
      title: 'Startup Meetup 2025',
      date: '2025-07-05',
      location: 'Bangalore',
      rsvp: 'Yes',
    },
    {
      id: '2',
      title: 'AI & Ethics Panel',
      date: '2025-08-12',
      location: 'Hyderabad',
      rsvp: 'Pending',
    },
  ];

  const pastEvents = [
    {
      id: '3',
      title: 'Blockchain Bootcamp',
      date: '2025-05-10',
      location: 'Mumbai',
      rsvp: 'Yes',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-blue-700 mb-4">
          Welcome, {user?.name || 'Attendee'} 
        </h2>

        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-2">📅 Upcoming Events</h3>
          <ul className="space-y-3">
            {upcomingEvents.map((event) => (
              <li
                key={event.id}
                className="bg-white p-4 rounded shadow flex justify-between items-center"
              >
                <div>
                  <p className="font-medium text-lg">{event.title}</p>
                  <p className="text-sm text-gray-500">
                    {event.date} • {event.location}
                  </p>
                </div>
                <span
                  className={`px-3 py-1 rounded-full text-sm ${
                    event.rsvp === 'Yes'
                      ? 'bg-green-100 text-green-600'
                      : event.rsvp === 'No'
                      ? 'bg-red-100 text-red-600'
                      : 'bg-yellow-100 text-yellow-600'
                  }`}
                >
                  {event.rsvp}
                </span>
              </li>
            ))}
          </ul>
        </div>


        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-2"> Past Events</h3>
          <ul className="space-y-3">
            {pastEvents.map((event) => (
              <li key={event.id} className="bg-white p-4 rounded shadow">
                <div className="flex justify-between items-center">
                  <div>
                    <p className="font-medium text-lg">{event.title}</p>
                    <p className="text-sm text-gray-500">
                      {event.date} • {event.location}
                    </p>
                  </div>
                  <a
                    href="#"
                    className="text-blue-600 underline text-sm hover:text-blue-800"
                  >
                    Download Ticket
                  </a>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AttendeeDashboard;

