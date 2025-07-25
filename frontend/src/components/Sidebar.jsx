import React from 'react';
import {
  FaTachometerAlt, FaBook, FaUser, FaCog, FaMoneyBill, FaSignOutAlt
} from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './Sidebar.css';

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar-title">Coursolern</div>

      <ul className="sidebar-nav">
        <li><Link to="/dashboard"><FaTachometerAlt /> Dashboard</Link></li>
        <li><Link to="/InstructorAllCourses"><FaBook /> All Courses</Link></li>
        <li><Link to="/manage-courses"><FaBook /> Manage Courses</Link></li>
        <li><Link to="/performance"><FaTachometerAlt /> Performance</Link></li>
        <li><Link to="/enrollments"><FaUser /> Enrollments</Link></li>
        <li><Link to="/settings"><FaCog /> Settings</Link></li>
        <li><Link to="/payments"><FaMoneyBill /> Payment History</Link></li>
        <li><Link to="/login"><FaSignOutAlt /> Logout</Link></li>
      </ul>

      <div className="sidebar-user">
        <p className="user-name">Sumit</p>
        <p className="user-email">sumit7rma@gmail.com</p>
      </div>
    </div>
  );
}
