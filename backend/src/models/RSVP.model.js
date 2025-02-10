
import { Schema, model } from "mongoose";

const RSVPSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: "User",
    },
    event: {
        type: Schema.Types.ObjectId,
        ref: "Event",
    },
    response: {
        type: String,
        enum: ["yes", "no", "maybe"],
        default: "maybe",
    },
    responseDate: {
        type: Date,
        default: Date.now,
    },
});

const RSVP = model("RSVP", RSVPSchema);

export default RSVP;