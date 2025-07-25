import { Link, useNavigate } from "react-router-dom";
import { FaBook, FaCog, FaSignOutAlt, FaUserGraduate, FaMoneyBill } from "react-icons/fa";
import { removeToken } from "../../utils/storage";
import "../../style/Sidebar.css";

export default function Sidebar() {
  const navigate = useNavigate();

  // Get user info from localStorage
  const user = JSON.parse(localStorage.getItem("courso_user"));

  const logout = () => {
    removeToken();
    localStorage.removeItem("courso_user");
    sessionStorage.removeItem("welcome_shown");
    navigate("/login");
  };

  return (
    <div className="sidebar">
      <div className="sidebar-title">CoursoLearn</div>

      <ul className="sidebar-nav">
        <li><Link to="/student/dashboard"><FaBook /> All Courses</Link></li>
        <li><Link to="/student/enrollments"><FaUserGraduate /> Enrollments</Link></li>
        <li><Link to="/student/payments"><FaMoneyBill /> Payment History</Link></li>
        <li><Link to="/student/settings"><FaCog /> Settings</Link></li>
        <li><button onClick={logout} className="sidebar-logout"><FaSignOutAlt /> Logout</button></li>
      </ul>

      <div className="sidebar-user">
        <p>{user?.name || "Student"}</p>
        <p>{user?.email || ""}</p>
      </div>
    </div>
  );
}
