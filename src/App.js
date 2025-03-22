import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SignUp from './components/SignUp';
import Login from './components/Login';
import Logout from './components/Logout';
import Navbar from './components/Navbar';
import ProtectedRoute from './components/ProtectedRoute';
import HomePage from './pages/HomePage';
import CourseListPage from "./pages/CourseListPage";
import CourseDetailsPage from "./pages/CourseDetailsPage";
import './App.css';

function App() {
  return (
    <Router>
      <Navbar />
      <div>
        <Routes>
          <Route path="/" element={ <ProtectedRoute element={ <HomePage /> } /> } />
          <Route path="/signup" element={ <SignUp /> } />
          <Route path="/login" element={ <Login /> } />
          <Route path="/logout" element={ <ProtectedRoute element={ <Logout /> } /> } />
          <Route path="/courses" element={<ProtectedRoute element={<CourseListPage/>} />} />
          <Route path="/courses/:courseId" element={<ProtectedRoute element={<CourseDetailsPage/>} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;