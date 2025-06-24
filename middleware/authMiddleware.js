import { verifyToken } from "../lib/auth";

export function authMiddleware() {
    const authHeader = req.headers.authorization;
    const token = authHeader && authHeader.split(' ')[1];

    if (!token || !verifyToken(token)) {
        return res.status(401).json({ error: "uauthorized" });
    }
    next();
}