import jwt from "jsonwebtoken";

export const verifyToken = (req, res, next) => {
    const token = req.headers.authorization?.split(" ")[1];
  
    if (!token) return res.status(401).json({ message: "Không có token, quyền truy cập bị từ chối" });
  
    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      req.user = decoded;
      next();
    } catch (err) {
      res.status(403).json({ message: "Token không hợp lệ" });
    }
  };

export const isAdmin = (req, res, next) => {
  if (req.user.role !== "admin") return res.status(403).json({ message: "Access denied" });
  next();
};
