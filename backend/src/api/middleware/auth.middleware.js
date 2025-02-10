import jwt from 'jsonwebtoken';
import User from '../../models/user.model.js';

export const authMiddleware = async (req, res, next) => {
    let token;

    if (req.cookies.jwt) {
        token = req.cookies.jwt;
    } else if (
        req.headers.authorization &&
        req.headers.authorization.startsWith("Bearer")
    ) {
        token = req.headers.authorization.split(" ")[1]; 
    }

    // If no token found, return unauthorized
    if (!token) {
        return res
            .status(401)
            .json({ message: "Unauthorized: No token provided" });
    }

    try {
        // Verify token
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        // Fetch user from database (excluding password)
        req.user = await User.findById(decoded.id).select("-password");

        if (!req.user) {
            return res
                .status(401)
                .json({ message: "Unauthorized: User not found" });
        }

        next(); // Proceed to the next middleware or route handler
    } catch (error) {
        console.error("JWT Verification Error:", error.message);
        return res
            .status(401)
            .json({ message: "Unauthorized: Invalid or expired token" });
    }
};
