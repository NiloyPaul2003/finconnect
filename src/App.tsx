import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Box } from '@mui/material';

// Layout Components
import Layout from './components/layout/Layout';

// Auth Pages
import LoginPage from './pages/auth/LoginPage';
import RegisterPage from './pages/auth/RegisterPage';

// Dashboard
import Dashboard from './pages/dashboard/Dashboard';

// Profile Pages
import CustomerProfile from './pages/profile/CustomerProfile';
import AccountantProfile from './pages/profile/AccountantProfile';

// Discovery & Booking Pages
import SearchPage from './pages/discovery/SearchPage';
import AccountantProfilePage from './pages/discovery/AccountantProfilePage';

// Workspace Pages
import MessageCenter from './pages/workspace/MessageCenter';

// Payment & Review Pages
import CheckoutPage from './pages/payment/CheckoutPage';
import ReviewForm from './pages/payment/ReviewForm';

// Admin Pages
import AdminDashboard from './pages/admin/AdminDashboard';
import KYCApprovalPanel from './pages/admin/KYCApprovalPanel';
import DisputeResolution from './pages/admin/DisputeResolution';

const App: React.FC = () => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Routes>
        {/* Root Route */}
        <Route path="/" element={<Navigate to="/login" replace />} />

        {/* Auth Routes */}
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />

        {/* Protected Routes */}
        <Route element={<Layout />}>
          {/* Dashboard Route */}
          <Route path="/dashboard" element={<Dashboard />} />

          {/* Profile Routes */}
          <Route path="/profile/customer" element={<CustomerProfile />} />
          <Route path="/profile/accountant" element={<AccountantProfile />} />

          {/* Discovery & Booking Routes */}
          <Route path="/search" element={<SearchPage />} />
          <Route path="/accountant/:id" element={<AccountantProfilePage />} />

          {/* Workspace Routes */}
          <Route path="/messages" element={<MessageCenter />} />

          {/* Payment & Review Routes */}
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route path="/review/:bookingId" element={<ReviewForm />} />

          {/* Admin Routes */}
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/admin/kyc" element={<KYCApprovalPanel />} />
          <Route path="/admin/disputes" element={<DisputeResolution />} />
        </Route>
      </Routes>
    </Box>
  );
};

export default App; 