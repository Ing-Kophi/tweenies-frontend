import { useEffect, useState } from "react";
import api from "../services/api";
import AdminLayout from "./AdminLayout";

function AdminCategories() {
  const [categories, setCategories] = useState([]);
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const token = localStorage.getItem("adminToken");

  const fetchCategories = async () => {
    try {
      const res = await api.get("/categories");
      setCategories(res.data);
    } catch (err) {
      console.error(err);
      setError("Failed to load categories");
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  const handleAddCategory = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      await api.post(
        "/categories",
        { name },
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      );

      setName("");
      fetchCategories();
    } catch (err) {
      setError("Failed to add category");
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteCategory = async (id) => {
    if (!window.confirm("Delete this category?")) return;

    try {
      await api.delete(`/categories/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });

      fetchCategories();
    } catch (err) {
      setError("Failed to delete category");
    }
  };

  return (
    <AdminLayout>
      <h2 className="fw-bold mb-4">Categories</h2>

      {error && (
        <div className="alert alert-danger py-2">
          {error}
        </div>
      )}

      {/* Add category */}
      <form onSubmit={handleAddCategory} className="mb-4">
        <div className="row g-2">
          <div className="col-md-8">
            <input
              type="text"
              className="form-control"
              placeholder="Category name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

          <div className="col-md-4">
            <button
              type="submit"
              className="btn btn-dark w-100"
              disabled={loading}
            >
              {loading ? "Adding..." : "Add Category"}
            </button>
          </div>
        </div>
      </form>

      {/* Category list */}
      <div className="table-responsive">
        <table className="table table-bordered align-middle">
          <thead className="table-light">
            <tr>
              <th>#</th>
              <th>Name</th>
              <th style={{ width: "120px" }}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {categories.length === 0 ? (
              <tr>
                <td colSpan="3" className="text-center text-muted">
                  No categories found
                </td>
              </tr>
            ) : (
              categories.map((cat, index) => (
                <tr key={cat.id}>
                  <td>{index + 1}</td>
                  <td>{cat.name}</td>
                  <td>
                    <button
                      className="btn btn-sm btn-danger"
                      onClick={() => handleDeleteCategory(cat.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </AdminLayout>
  );
}

export default AdminCategories;
