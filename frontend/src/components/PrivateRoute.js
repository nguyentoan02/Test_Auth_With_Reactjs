import { Navigate, Outlet } from "react-router-dom";
import { useContext, useState, useEffect } from "react";
import { AuthContext } from "../context/AuthContext";

const PrivateRoute = ({ role }) => {
  const { user } = useContext(AuthContext);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(user === null); // Chỉ tắt loading khi user được cập nhật
  }, [user]);

  if (loading) return <div>Loading...</div>; // Đợi lấy user xong

  if (!user) return <Navigate to="/login" />; // Nếu chưa đăng nhập, về login

  if (role && user.role !== role) {
    return <Navigate to="/404" />; // Nếu không có quyền, về trang 404
  }

  return <Outlet />;
};

export default PrivateRoute;
