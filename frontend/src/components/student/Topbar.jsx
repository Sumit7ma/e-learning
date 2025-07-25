// src/components/student/Topbar.jsx
export default function Topbar({ search, setSearch }) {
  return (
    <div className="topbar d-flex justify-content-between align-items-center px-4 py-3 bg-black text-white">
      <div>
        <span className="me-4 fw-bold">📊 Dashboard</span>
        <span className="fw-bold">📚 Courses</span>
      </div>
      <div className="search-bar d-flex align-items-center">
        <input type="text" className="form-control bg-dark text-white"
               placeholder="Search for courses"
               value={search}
               onChange={(e) => setSearch(e.target.value)} />
      </div>
    </div>
  );
}
