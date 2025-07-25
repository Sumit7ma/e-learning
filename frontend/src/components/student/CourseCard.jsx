// src/components/student/CourseCard.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import "../../style/CourseCard.css";

export default function CourseCard({ id, image, title, desc, lang, instructor }) {
  const navigate = useNavigate();

  return (
    <div className="course-card">
      <img src={image === "string" ? "https://via.placeholder.com/300x160?text=No+Image" : image}
           alt="cover" className="course-image" />
      <div className="course-meta">
        <span className="badge bg-warning text-dark">PREMIUM</span>
        <span className="badge bg-secondary">{lang}</span>
      </div>
      <h5 className="course-title">{title}</h5>
      <p className="course-description">{desc}</p>
      <small className="text-light">By Teacher ID: {instructor}</small><br />
      <button onClick={() => navigate(`/course/${id}`)} className="btn btn-primary mt-2">
        View Details
      </button>
    </div>
  );
}
