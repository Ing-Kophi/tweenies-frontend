import AdminLayout from "./AdminLayout";

function AdminDashboard() {
  return (
    <AdminLayout>
      <h2 className="fw-bold mb-3">Dashboard</h2>
      <p className="text-muted">
        Welcome to the Twinnies Restaurant admin panel.
      </p>
    </AdminLayout>
  );
}

export default AdminDashboard;
