// ✅ src/pages/student/Dashboard.jsx
import React, { useEffect, useState } from "react";
import Sidebar from "../../components/student/Sidebar";
import Topbar from "../../components/student/Topbar";
import CourseCard from "../../components/student/CourseCard";
import "../../style/Dashboard.css";
import axios from "axios";
import Swal from "sweetalert2";

export default function Dashboard() {
  const [courses, setCourses] = useState([]);
  const [search, setSearch] = useState("");

  // ✅ Welcome popup
  useEffect(() => {
    try {
      const userData = localStorage.getItem("courso_user");
      if (userData && !sessionStorage.getItem("welcome_shown")) {
        const user = JSON.parse(userData);
        const username = user?.name || "Student";

        Swal.fire({
          title: `👋 Welcome, ${username}!`,
          text: "Let's continue learning.",
          icon: "success",
          confirmButtonText: "Let's go!",
          backdrop: true,
        });

        sessionStorage.setItem("welcome_shown", "true");
      }
    } catch (err) {
      console.warn("Error showing welcome message:", err);
    }
  }, []);

  useEffect(() => {
    axios
      .get("http://localhost:8080/api/courses/list")
      .then((res) => setCourses(res.data))
      .catch(() => alert("Failed to load courses"));
  }, []);

  const filteredCourses = courses.filter((course) =>
    course.title?.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="dashboard-layout">
      <Sidebar />
      <div className="dashboard-main">
        <Topbar search={search} setSearch={setSearch} />
        <div className="courses-grid">
          {filteredCourses.length === 0 ? (
            <p className="text-center text-muted">No courses found.</p>
          ) : (
            filteredCourses.map((course) => (
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
