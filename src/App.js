import React from 'react';
// import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import Home from './pages/Home';
import Contact from './pages/Contact';
import About from './pages/About';
import Register from './pages/register';
import Dashboard from './pages/dashboard';
import User from './pages/User';
import RecomMain from './Recommendation/recom_main';
import PrivateRoutes from './utils/PrivateRoutes';
import { AuthProvider } from './utils/AuthContext';
import Room from './pages/Room/Room';

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />  
          <Route path="/Register" element={<Register />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/Contact" element={<Contact />} />    
          <Route path="/About" element={<About />} />
          <Route element={<PrivateRoutes />}>
            <Route path="/user" element={<User />} />
            <Route path="/recom_main" element={<RecomMain />} />
            <Route path="/room" element={<Room />} />
          </Route>
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
