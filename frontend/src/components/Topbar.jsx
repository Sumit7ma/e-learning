export default function Topbar({ search, setSearch }) {
  return (
    <div className="topbar d-flex justify-content-between align-items-center">
      <div>
        <span className="me-4">📊 Dashboard</span>
        <span>📚 Courses</span>
      </div>
      <div className="search-bar d-flex align-items-center">
        <input
          type="text"
          className="form-control"
          placeholder="Search for anything"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button className="btn btn-outline-light ms-2">🔍</button>
      </div>
    </div>
  );
}
