import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Sidebar from "../../components/student/Sidebar";
import Topbar from "../../components/student/Topbar";
import BuyCard from "../../components/student/BuyCard";
import "../../style/CourseDetails.css";
import axios from "axios";

export default function CourseDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [course, setCourse] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:8080/api/courses/${id}`)
      .then(res => setCourse(res.data))
      .catch(() => alert("Error loading course details"));
  }, [id]);

  if (!course) return <div>Loading...</div>;

  return (
    <div className="course-details-layout">
      <Sidebar />
      <div className="course-details-main">
        <Topbar />
        <div className="course-details-content">
          <div className="course-info-area">
            <h2 className="course-title">{course.title}</h2>
            <p className="course-desc">{course.description}</p>
            <div className="course-tags">
              <span className="badge bg-primary">{course.language}</span>
              <span className="badge bg-success">{course.level}</span>
            </div>
            <hr />
            <h5>Course Sections</h5>
            <ul className="section-list">
              {course.sections.map((section, idx) => (
                <li key={idx}>
                  <strong>{section.title}</strong> ({section.lectures.length} lectures)
                </li>
              ))}
            </ul>
          </div>

          <BuyCard price={course.price} onBuy={() => navigate(`/payment/${course.id}`)} />
        </div>
      </div>
    </div>
  );
}
