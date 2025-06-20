import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Navbar from './components/Navbar';
import ProtectedRoute from './components/ProtectedRoute';

// Common Pages
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import ForgotPassword from './pages/ForgotPassword';
import Profile from './pages/Profile';
import EventDetails from './pages/EventDetails';
import NotFound from './pages/NotFound';
import Unauthorized from './pages/Unauthorized';

// Attendee Pages
import AttendeeDashboard from './pages/AttendeeDashboard';
import EventRegistration from './pages/EventRegistration';
import CalendarView from './pages/CalendarView';

// Organizer Pages
import OrganizerDashboard from './pages/OrganizerDashboard';
import CreateEvent from './pages/CreateEvent';
import EventManagement from './pages/EventManagement';
import VendorManagement from './pages/VendorManagement';

// Admin Pages
import AdminDashboard from './pages/AdminDashboard';
import UserManagement from './pages/UserManagement';
import EventModeration from './pages/EventModeration';
import ReportsFeedback from './pages/ReportsFeedback';

const App = () => {
  const user = useSelector((state) => state.user.user);

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <Routes>
        {/* Common Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/profile" element={<ProtectedRoute><Profile /></ProtectedRoute>} />
        <Route path="/event/:id" element={<ProtectedRoute><EventDetails /></ProtectedRoute>} />

        {/* Attendee Routes */}
        <Route path="/attendee/dashboard" element={<ProtectedRoute><AttendeeDashboard /></ProtectedRoute>} />
        <Route path="/attendee/register/:eventId" element={<ProtectedRoute><EventRegistration /></ProtectedRoute>} />
        <Route path="/attendee/calendar" element={<ProtectedRoute><CalendarView /></ProtectedRoute>} />

        {/* Organizer Routes */}
        <Route path="/organizer/dashboard" element={<ProtectedRoute><OrganizerDashboard /></ProtectedRoute>} />
        <Route path="/organizer/create-event" element={<ProtectedRoute><CreateEvent /></ProtectedRoute>} />
        <Route path="/organizer/manage-events" element={<ProtectedRoute><EventManagement /></ProtectedRoute>} />
        <Route path="/organizer/vendors" element={<ProtectedRoute><VendorManagement /></ProtectedRoute>} />

        {/* Admin Routes */}
        <Route path="/admin/dashboard" element={<ProtectedRoute><AdminDashboard /></ProtectedRoute>} />
        <Route path="/admin/users" element={<ProtectedRoute><UserManagement /></ProtectedRoute>} />
        <Route path="/admin/moderation" element={<ProtectedRoute><EventModeration /></ProtectedRoute>} />
        <Route path="/admin/reports" element={<ProtectedRoute><ReportsFeedback /></ProtectedRoute>} />

        {/* Misc Routes */}
        <Route path="/unauthorized" element={<Unauthorized />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default App;