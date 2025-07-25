import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

// Auth + Common
import Register from "./pages/Register";
import InstructorRegister from "./pages/InstructorRegister";
import Login from "./pages/Login";
import ForgotPassword from "./pages/ForgotPassword";
import ResetPassword from "./pages/ResetPassword";
import InstructorAllCourses from './pages/InstructorAllCourses';
import ManageCourses from './pages/ManageCourses';

// Auth handling
import RoleRedirector from "./routes/RoleRedirector";
import ProtectedRoute from "./routes/ProtectedRoute";

// Instructor
import InstructorDashboard from "./pages/InstructorDashboard";

// New Student UI Pages
import Dashboard from "./pages/student/Dashboard";
import CourseDetails from "./pages/student/CourseDetails";
import EnrolledCourses from "./pages/student/EnrolledCourses";
import LecturePlayer from "./pages/student/LecturePlayer";
import StudentHome from "./pages/StudentHome"; 
import Settings from "./pages/student/Settings";

export default function App() {
  return (
    <Router>
      <Routes>
       
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/register" element={<Register />} />
        <Route path="/instructor-register" element={<InstructorRegister />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/reset-password/:token" element={<ResetPassword />} />

       
        <Route path="/dashboard" element={<RoleRedirector />} />

        
        <Route path="/student/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
        <Route path="/course/:id" element={<ProtectedRoute><CourseDetails /></ProtectedRoute>} />
        <Route path="/student/enrollments" element={<ProtectedRoute><EnrolledCourses /></ProtectedRoute>} />
        <Route path="/student/lecture/:courseId" element={<ProtectedRoute><LecturePlayer /></ProtectedRoute>} />
        <Route path="/student-home" element={<ProtectedRoute><StudentHome /></ProtectedRoute>} /> {/* ✅ optional */}
        <Route path="/student/settings" element={<Settings />} />
        
        <Route path="/instructor-dashboard" element={<ProtectedRoute><InstructorDashboard /></ProtectedRoute>} />
             <Route path="/InstructorAllCourses" element={<InstructorAllCourses />} />
      <Route path="/manage-courses" element={<ManageCourses />} />
      </Routes>
    </Router>
  );
}
