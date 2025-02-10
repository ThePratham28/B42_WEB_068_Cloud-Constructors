import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import morgan from "morgan";
import cookieParser from "cookie-parser";
import connectDB from "./src/config/db.js";
import authRouter from "./src/api/routes/auth.routes.js";
import eventRouter from "./src/api/routes/event.routes.js";

const app = express();

// Load environment variables
dotenv.config();

// Middleware
app.use(express.json());
app.use(cors());
app.use(morgan("dev"));
app.use(cookieParser());

// connect to database
connectDB();

app.use("/auth", authRouter);
app.use("/events", eventRouter);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () =>
    console.log(`Server running on port http://localhost:${PORT}`)
);
