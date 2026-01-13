import { Navigate } from "react-router-dom";

function ProtectedRoute({ children }) {
  const token = localStorage.getItem("adminToken");

  // If no token, redirect to login
  if (!token) {
    return <Navigate to="/admin/login" replace />;
  }

  // Otherwise, allow access
  return children;
}

export default ProtectedRoute;
