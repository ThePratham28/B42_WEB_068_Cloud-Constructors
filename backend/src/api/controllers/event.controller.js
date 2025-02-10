import Event from "../../models/event.model.js";


/**
 * @desc Create a new event
 * @route POST /api/events
 * @access Private (Only logged-in users)
 */
export const createEvent = async (req, res) => {
    const { title, description, date, time, location, media } = req.body;

    // Validate required fields
    if (
        !title ||
        !date ||
        !time ||
        !location?.address ||
        !location?.coordinates
    ) {
        return res.status(400).json({ message: "Missing required fields" });
    }

    try {
        const event = await Event.create({
            title,
            description,
            date,
            time,
            location,
            media,
            createdBy: req.user.id,
        });

        res.status(201).json({ message: "Event created successfully", event });
    } catch (error) {
        console.error("Error creating event:", error);
        res.status(500).json({ message: "Server error" });
    }
};

/**
 * @desc Get all events
 * @route GET /api/events
 * @access Public
 */
export const getAllEvents = async (req, res) => {
    try {
        const events = await Event.find().populate("createdBy", "name email");
        res.status(200).json(events);
    } catch (error) {
        console.error("Error fetching events:", error);
        res.status(500).json({ message: "Server error" });
    }
};

/**
 * @desc Get event by ID
 * @route GET /api/events/:id
 * @access Public
 */
export const getEventById = async (req, res) => {
    try {
        const event = await Event.findById(req.params.id).populate(
            "createdBy",
            "name email"
        );
        if (!event) {
            return res.status(404).json({ message: "Event not found" });
        }
        res.status(200).json(event);
    } catch (error) {
        console.error("Error fetching event:", error);
        res.status(500).json({ message: "Server error" });
    }
};
