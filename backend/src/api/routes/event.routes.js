import express from "express";
import { authMiddleware } from "../middleware/auth.middleware.js";
import { createEvent, getAllEvents, getEventById } from "../controllers/event.controller.js";


const eventRouter = express.Router();


eventRouter.post("/", createEvent);
eventRouter.get("/", getAllEvents); 
eventRouter.get("/:id", getEventById);  

export default eventRouter;