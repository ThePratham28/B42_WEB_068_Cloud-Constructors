import { Schema, model } from "mongoose";

const DiscussionSchema = new Schema({
    event: {
        type: Schema.Types.ObjectId,
        ref: "Event",
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: "User",
    },
    comment: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    
});

const Discussion = model("Discussion", DiscussionSchema);
export default Discussion;