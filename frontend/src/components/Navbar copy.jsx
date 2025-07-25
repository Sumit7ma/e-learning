import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

export default function Navbar() {
  return (
    <header className="landing-header">
      <h1 className="logo">Coursolern</h1>
      <div className="nav-links">
        <Link to="/signup-instructor" className="btn-outline">Teach on Courso</Link>
        <Link to="/login" className="btn-light">Login</Link>
        <Link to="/signup" className="btn-primary">Join now</Link>
      </div>
    </header>
  );
}
