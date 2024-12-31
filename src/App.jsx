import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router';
import LoginPage from './pages/LoginPage';
import UnauthorizedPage from './pages/UnauthorizedPage';
import ProtectedRoute from './context/ProtectedRoute';
import AdminPage from './pages/AdminPage';
import UserPage from './pages/UserPage';
import GuestPage from './pages/GuestPage';

const App = () => (
      <Router>
          <Routes>
              <Route path="/login" element={<LoginPage />} />
              <Route path="/unauthorized" element={<UnauthorizedPage />} />

              {/* protected routes */}
              <Route path='/admin' element={
                <ProtectedRoute roles={['admin']}>
                  <AdminPage />
                </ProtectedRoute>
              }></Route>

              <Route path='/user' element={
                <ProtectedRoute roles={['admin', 'user']}>
                  <UserPage />
                </ProtectedRoute>
              }></Route>

              <Route path='/guest' element={
                <ProtectedRoute roles={['admin', 'user', 'guest']}>
                  <GuestPage />
                </ProtectedRoute>
              }></Route>
              
              <Route path="*" element={<Navigate to="/login" />} />
          </Routes >
      </Router>
);
export default App;