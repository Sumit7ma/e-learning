// src/pages/StudentDashboard.jsx

import React, { useEffect, useState } from "react";
import axios from "axios";
import CourseBlock from "../components/CourseBlock";
import Sidebar from "../components/Sidebar"; // ✅ Make sure this exists
import "../style/StudentDashboard.css";

export default function InstructorAllCourses() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8080/api/courses/list")
      .then((res) => {
        setCourses(res.data);
      })
      .catch((err) => {
        console.error("Failed to fetch courses", err);
      });
  }, []);

  return (
    <div className="dashboard-layout">
      <Sidebar />
      <div className="dashboard-main">
        <h1 className="dashboard-title">All Published Courses</h1>

        <div className="courses-container">
          {courses.map((course) => (
            <CourseBlock
              key={course.id}
              image={
                course.imageUrl === "string"
                  ? "https://via.placeholder.com/300x160?text=No+Image"
                  : course.imageUrl
              }
              lang={course.language}
              badge="PREMIUM"
              title={course.title}
              desc={course.description}
              author={`Teacher ID: ${course.createdByUserId}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
