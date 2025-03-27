import { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleChange = (e) => setCredentials({ ...credentials, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = await login(credentials); // Gọi API login
    if (data.role === "admin") {
        navigate("/admin/dashboard");
    } else {
        navigate("/user/dashboard");
    }
};


  return (
    <form onSubmit={handleSubmit}>
      <input type="email" name="email" placeholder="Email" onChange={handleChange} required />
      <input type="password" name="password" placeholder="Mật khẩu" onChange={handleChange} required />
      <button type="submit">Đăng nhập</button>
    </form>
  );
};

export default Login;
