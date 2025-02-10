import { Schema, model } from "mongoose";
import {hash, compare} from "bcrypt";

const UserSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    avatar: {
        type: String
    },
    evetsCreated: [
        {
            type: Schema.Types.ObjectId,
            ref: "Event"
        }
    ],
    eventsAttending: [
        {
            type: Schema.Types.ObjectId,
            ref: "RSVP"
        }
    ],
});

// hash password before saving
UserSchema.pre("save", async function(next) {
    if (!this.isModified("password")) {
        next();
    }
    try {
        const hashed = await hash(this.password, 10);
        this.password = hashed;
        next();
    } catch (err) {
        next(err);
    }
});


const User = model("User", UserSchema);
export default User;