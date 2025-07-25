import React, { useEffect, useState } from "react";
import Sidebar from "../../components/student/Sidebar";
import Topbar from "../../components/student/Topbar";
import CourseCard from "../../components/student/CourseCard";
import "../../style/Dashboard.css"; // Reuse existing grid + layout CSS
import axios from "axios";

export default function EnrolledCourses() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8080/api/student/enrolled-courses")
      .then((res) => setCourses(res.data))
      .catch(() => alert("Failed to load enrolled courses"));
  }, []);

  return (
    <div className="dashboard-layout">
      <Sidebar />
      <div className="dashboard-main">
        <Topbar />
        <h2 className="text-light text-center my-3">My Enrolled Courses</h2>
        <div className="courses-grid">
          {courses.length === 0 ? (
            <p className="text-muted text-center">No enrolled courses yet.</p>
          ) : (
            courses.map((course) => (
              <CourseCard
                key={course.id}
                id={course.id}
                image={course.imageUrl}
                title={course.title}
                desc={course.description}
                lang={course.language}
                instructor={course.createdByUserId}
              />
            ))
          )}
        </div>
      </div>
    </div>
  );
}
