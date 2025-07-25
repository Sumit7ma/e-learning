import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const { pathname } = useLocation();

  return (
    <nav
      style={{
        width: "100%",
        padding: "32px 0 24px 0",
        background: "transparent",
        zIndex: 100,
      }}
    >
      <div className="container-fluid d-flex justify-content-between align-items-center px-4">
        <div className="fs-2 fw-bold" style={{ color: "#3976f6", letterSpacing: 0.5 }}>
          Courso
        </div>
        <div>
          <Link
            to="/instructor-register"
            className={`btn btn-outline-primary me-2 fw-semibold ${pathname === "/instructor-register" ? "active" : ""}`}
          >
            Teach on Courso
          </Link>
          <Link
            to="/login"
            className={`btn btn-outline-light me-2 fw-semibold ${pathname === "/login" ? "active" : ""}`}
          >
            Login
          </Link>
          <Link
            to="/register"
            className={`btn btn-primary fw-semibold ${pathname === "/register" ? "active" : ""}`}
          >
            Join now
          </Link>
        </div>
      </div>
    </nav>
  );
}
