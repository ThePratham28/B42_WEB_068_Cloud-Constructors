import jwt from "jsonwebtoken";
import User from "../../models/user.model.js";
import { compare } from "bcrypt";

const generateToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: "7d" });
};

export const signupUser = async (req, res) => {
    const { name, email, password } = req.body;
    try {
        const userExists = await User.findOne({ email });
        if (userExists)
            return res.status(400).json({ message: "User already exists" 
        });

        const user = await User.create({ name, email, password });
        res.json({
            token: generateToken(user._id),
            userId: user._id,
            name: user.name,
        });
    } catch (error) {
        res.status(500).json({ message: "Server error" });
    }
};

export const loginUser = async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await User.findOne({ email });
        if (!user) return res.status(400).json({ message: "Invalid credentials" });

        const isMatch = await compare(password, user.password);

        if (!isMatch) return res.status(400).json({ message: "Invalid credentials" });

        res.json({
            token: generateToken(user._id),
            userId: user._id,
            name: user.name,
        });

    } catch (error) {
        res.status(500).json({ message: "Server error" });
    }
};

export const getUserProfile = async (req, res) => {
    try {
        const user = await User.findById(req.user.id).select("-password");
        res.json(user);
    } catch (error) {
        res.status(500).json({ message: "Server error" });
    }
};
