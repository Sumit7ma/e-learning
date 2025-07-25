import React from "react";
import Sidebar from "../../components/student/Sidebar";
import "../../style/Settings.css";

export default function Settings() {
  return (
    <div className="settings-layout">
      <Sidebar />
      <div className="settings-main">
        <div className="settings-header d-flex justify-content-between align-items-center">
          <h4 className="text-white">Account Settings</h4>
          <button className="btn btn-sm btn-secondary">✏️ View</button>
        </div>

        <div className="settings-card mt-3 p-4 rounded">
          <h6 className="text-white mb-3">Profile Information</h6>
          <div className="profile-circle bg-danger text-white d-flex align-items-center justify-content-center">
            S
          </div>

          <form>
            <div className="mb-3">
              <label className="form-label text-white">Full Name</label>
              <input
                type="text"
                className="form-control bg-dark text-white border-0"
                value="Sumit"
                disabled
              />
            </div>
            <div className="mb-3">
              <label className="form-label text-white">Email</label>
              <input
                type="email"
                className="form-control bg-dark text-white border-0"
                value="sumit7mai@gmail.com"
                disabled
              />
              <small className="text-muted">You cannot change your email address.</small>
            </div>
            <button className="btn btn-outline-light mt-2">Update Settings</button>
          </form>
        </div>
      </div>
    </div>
  );
}
