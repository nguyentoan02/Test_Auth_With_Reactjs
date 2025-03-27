import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import PrivateRoute from "./components/PrivateRoute";
import HomePage from "./pages/HomePage";
import Login from "./pages/Login";
import UserDashboard from "./pages/UserDashboard";
import UserProfile from "./pages/UserProfile";
import UserSettings from "./pages/UserSettings";
import AdminDashboard from "./pages/AdminDashboard";
import AdminUsers from "./pages/AdminUsers";
import AdminSettings from "./pages/AdminSettings";
import NotFound from "./pages/NotFound"; // Thêm trang 404

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          {/* Guest Routes */}
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<Login />} />

          {/* User Routes */}
          <Route element={<PrivateRoute role="user" />}>
            <Route path="/user/dashboard" element={<UserDashboard />} />
            <Route path="/user/profile" element={<UserProfile />} />
            <Route path="/user/settings" element={<UserSettings />} />
          </Route>

          {/* Admin Routes */}
          <Route element={<PrivateRoute role="admin" />}>
            <Route path="/admin/dashboard" element={<AdminDashboard />} />
            <Route path="/admin/users" element={<AdminUsers />} />
            <Route path="/admin/settings" element={<AdminSettings />} />
          </Route>

          {/* 404 Route */}
          <Route path="/404" element={<NotFound />} />
          <Route path="*" element={<NotFound />} /> {/* Bắt các route không tồn tại */}
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
