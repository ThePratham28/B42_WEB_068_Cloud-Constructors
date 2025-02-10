import { Schema, model } from "mongoose";

const EventSchema = new Schema(
    {
        title: {
            type: String,
            required: true,
        },
        description: {
            type: String,
        },
        date: {
            type: Date,
            required: true,
        },
        time: {
            type: String,
            required: true,
        },
        location: {
            address: { type: String, required: true },
            coordinates: { type: [Number], required: true }, // [longitude, latitude]
        },
        media: [
            {
                type: String,
            },
        ],
        createdBy: {
            type: Schema.Types.ObjectId,
            ref: "User",
        },
        attendees: [
            {
                type: Schema.Types.ObjectId,
                ref: "RSVP",
            },
        ],
    },
    {
        timestamps: true,
    }
);

const Event = model("Event", EventSchema);
export default Event;
