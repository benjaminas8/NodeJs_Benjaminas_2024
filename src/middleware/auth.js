import jwt from "jsonwebtoken";

const authUser = (req, res, next) => {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(4001).jason({ message: "Auth is bad" });
  }
  const decodedInfo = jwt.verify(token, process.env.JWT_SECRET);

  if (!decodedInfo) {
    return res.status(4001).jason({ message: "Auth is bad" });
  }

  next();
};

export default authUser;
