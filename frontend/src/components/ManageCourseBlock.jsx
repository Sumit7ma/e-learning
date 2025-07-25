import React from "react";
import "./ManageCourseBlock.css"; // Reuse same styles
import { FaUser } from "react-icons/fa";

export default function ManageCourseBlock({
  image,
  lang,
  title,
  desc,
  teacherName,
  onEdit,
  onDelete,
}) {
  return (
    <div className="course-block">
      <img src={image} alt={`${title} Thumbnail`} className="course-image" />

      <div className="course-info">
        {/* Lang only */}
        <div className="course-meta">
          <div></div> {/* Empty left side */}
          <span className="course-lang">{lang}</span>
        </div>

        {/* Title */}
        <h3 className="course-title">{title}</h3>

        {/* One-line description */}
        <p className="course-description">{desc}</p>

        {/* Teacher name */}
        <p className="course-author">
          <FaUser style={{ marginRight: "6px", opacity: 0.6 }} />
          <span style={{ opacity: 0.8, fontWeight: 500 }}>Teacher:</span> {teacherName}
        </p>

        {/* Manage Buttons */}
        <div className="manage-buttons">
  <button className="edit-btn" onClick={onEdit}>Edit Course</button>
  <button className="delete-btn" onClick={onDelete}>Delete</button>
</div>

      </div>
    </div>
  );
}
