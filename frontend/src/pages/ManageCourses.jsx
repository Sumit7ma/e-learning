import React, { useEffect, useState } from "react";
import axios from "axios";
import ManageCourseBlock from "../components/ManageCourseBlock";
import Sidebar from "../components/Sidebar";
import DeleteCourseModal from "../components/DeleteCourseModal.jsx";
import "../style/ManageCourse.css";

export default function ManageCourses() {
  const [courses, setCourses] = useState([]);
  const [courseToDelete, setCourseToDelete] = useState(null); // for modal

  useEffect(() => {
    axios
      .get("http://localhost:8080/api/courses/by-teacher/1")
      .then((res) => {
        setCourses(res.data);
      })
      .catch((err) => {
        console.error("Failed to fetch courses:", err);
      });
  }, []);

  const handleDeleteConfirm = (courseId) => {
    axios
      .delete(`http://localhost:8080/api/courses/delete/${courseId}`)
      .then(() => {
        setCourses((prev) => prev.filter((c) => c.id !== courseId));
        setCourseToDelete(null); // close modal
        alert("✅ Course deleted successfully.");
      })
      .catch((err) => {
        console.error("Delete failed:", err);
        alert("❌ Failed to delete course.");
      });
  };

  return (
    <div className="dashboard-layout">
      <Sidebar />
      <div className="dashboard-main">
        <h1 className="dashboard-title">Manage Your Courses</h1>

        <div className="courses-container">
          {courses.map((course) => (
            <ManageCourseBlock
              key={course.id}
              id={course.id}
              image={
                course.imageUrl === "string" || !course.imageUrl
                  ? "https://via.placeholder.com/300x160?text=No+Image"
                  : course.imageUrl
              }
              lang={course.language}
              title={course.title}
              desc={course.description}
              teacherName={course.teacherName}
              onEdit={() => (window.location.href = `/edit-course/${course.id}`)}
              onDelete={() => setCourseToDelete(course)} // 💥 trigger modal
            />
          ))}

          <div
            className="new-course-card"
            onClick={() => (window.location.href = "/dashboard/course/create/1")}
          >
            <div className="plus-icon">+</div>
            <p>Add New Course</p>
          </div>
        </div>
      </div>

      {/* 🚨 Show modal if needed */}
      {courseToDelete && (
        <DeleteCourseModal
          course={courseToDelete}
          onCancel={() => setCourseToDelete(null)}
          onConfirm={handleDeleteConfirm}
        />
      )}
    </div>
  );
}
