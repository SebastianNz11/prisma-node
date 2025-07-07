import jwt from "jsonwebtoken";
export const authenticateToken = (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1];

  if (!token) {
    return res.status(401).json({ error: "Acceso denegado. No token." });
  }

  jwt.verify(token, process.env.JWT_SECRET, (error, user) => {
    if (error) return res.status(403).json({ error: "Token invalido" });

    req.user = user;
    next();
  });
};
