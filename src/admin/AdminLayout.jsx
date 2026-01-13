import { Link } from "react-router-dom";

function AdminLayout({ children }) {
  return (
    <div className="d-flex" style={{ minHeight: "100vh" }}>
      
      {/* Sidebar */}
      <aside
        className="bg-dark text-light p-3"
        style={{ width: "240px" }}
      >
        <h4 className="fw-bold mb-4">Tweenies Admin</h4>

        <ul className="nav flex-column gap-2">
          <li className="nav-item">
            <Link className="nav-link text-light" to="/admin/dashboard">
              Dashboard
            </Link>
          </li>

          <li className="nav-item">
            <Link className="nav-link text-light" to="/admin/categories">
              Categories
            </Link>
          </li>

          <li className="nav-item">
            <Link className="nav-link text-light" to="/admin/menu">
              Menu Items
            </Link>
          </li>

          <li className="nav-item mt-4">
            <button
              className="btn btn-outline-light btn-sm"
              onClick={() => {
                localStorage.removeItem("adminToken");
                window.location.href = "/admin/login";
              }}
            >
              Logout
            </button>
          </li>
        </ul>
      </aside>

      {/* Main content */}
      <main className="flex-grow-1 p-4 bg-light">
        {children}
      </main>
    </div>
  );
}

export default AdminLayout;
