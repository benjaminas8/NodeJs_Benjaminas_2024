import jwt from "jsonwebtoken";

const authUser = (req, res, next) => {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(4001).json({ message: "Authentication failed" });
  }

  const decodedInfo = jwt.verify(token, process.env.JWT_SECRET);

  if (!decodedInfo) {
    return res.status(401).json({ message: "Invalid token" });
  }

  next();
};

export default authUser;
