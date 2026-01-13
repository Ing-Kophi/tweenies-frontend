import { useEffect, useState } from "react";
import api from "../services/api";
import AdminLayout from "./AdminLayout";

function AdminMenu() {
  const [menuItems, setMenuItems] = useState([]);
  const [categories, setCategories] = useState([]);
  const [form, setForm] = useState({
    name: "",
    description: "",
    price: "",
    category_id: ""
  });
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [editingId, setEditingId] = useState(null);

  const token = localStorage.getItem("adminToken");

  const authHeader = {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "multipart/form-data"
    }
  };

  const fetchData = async () => {
    try {
      const [menuRes, catRes] = await Promise.all([
        api.get("/menu"),
        api.get("/categories")
      ]);

      setMenuItems(menuRes.data);
      setCategories(catRes.data);
    } catch (err) {
      setError("Failed to load menu data");
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
  e.preventDefault();
  setError("");
  setLoading(true);

  try {
    const data = new FormData();
    data.append("name", form.name);
    data.append("description", form.description);
    data.append("price", form.price);
    data.append("category_id", form.category_id);
    if (image) data.append("image", image);

    if (editingId) {
      await api.put(`/menu/${editingId}`, data, authHeader);
    } else {
      await api.post("/menu", data, authHeader);
    }

    setForm({
      name: "",
      description: "",
      price: "",
      category_id: ""
    });
    setImage(null);
    setEditingId(null);
    fetchData();
  } catch {
    setError("Failed to save menu item");
  } finally {
    setLoading(false);
  }
};


  const handleDelete = async (id) => {
    if (!window.confirm("Delete this menu item?")) return;

    try {
      await api.delete(`/menu/${id}`, {
        headers: { Authorization: `Bearer ${token}` }
      });
      fetchData();
    } catch {
      setError("Failed to delete menu item");
    }
  };

  return (
    <AdminLayout>
      <h2 className="fw-bold mb-4">Menu Items</h2>

      {error && (
        <div className="alert alert-danger py-2">
          {error}
        </div>
      )}

      {/* Add menu item */}
      <form onSubmit={handleSubmit} className="card p-4 mb-4 shadow-sm">
        <h5 className="fw-bold mb-3">{editingId? "Edit Menu Item" : "Add New Menu Item"}</h5>

        <div className="row g-3">
          <div className="col-md-6">
            <input
              className="form-control"
              placeholder="Food name"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="col-md-6">
            <select
              className="form-select"
              name="category_id"
              value={form.category_id}
              onChange={handleChange}
              required
            >
              <option value="">Select category</option>
              {categories.map(cat => (
                <option key={cat.id} value={cat.id}>
                  {cat.name}
                </option>
              ))}
            </select>
          </div>

          <div className="col-md-12">
            <textarea
              className="form-control"
              placeholder="Description"
              name="description"
              value={form.description}
              onChange={handleChange}
            />
          </div>

          <div className="col-md-6">
            <input
              type="number"
              step="0.01"
              className="form-control"
              placeholder="Price"
              name="price"
              value={form.price}
              onChange={handleChange}
              required
            />
          </div>

          <div className="col-md-6">
            <input
              type="file"
              className="form-control"
              accept="image/*"
              onChange={(e) => setImage(e.target.files[0])}
            />
          </div>
        </div>

        <button
          className="btn btn-dark mt-3"
          disabled={loading}
        >
          {loading ? "Saving..." : editingId ? "Update Menu Item" : "Add Menu Item"}
        </button>
      </form>

      {/* Menu list */}
      <div className="table-responsive">
        <table className="table table-bordered align-middle">
          <thead className="table-light">
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Category</th>
              <th>Price</th>
              <th style={{ width: "160px" }}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {menuItems.length === 0 ? (
              <tr>
                <td colSpan="5" className="text-center text-muted">
                  No menu items found
                </td>
              </tr>
            ) : (
              menuItems.map((item, index) => (
                <tr key={item.id}>
                  <td>{index + 1}</td>
                  <td>{item.name}</td>
                  <td>{item.category}</td>
                  <td>GHS {item.price}</td>
                  <td>
                    <button
                        className="btn btn-sm btn-primary me-2"
                        onClick={() => {
                          setEditingId(item.id);
                          setForm({
                            name: item.name,
                            description: item.description,
                            price: item.price,
                            category_id: item.category_id
                          });
                        }}
                      >
                        Edit
                      </button>

                      <button
                        className="btn btn-sm btn-danger"
                        onClick={() => handleDelete(item.id)}
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

export default AdminMenu;
