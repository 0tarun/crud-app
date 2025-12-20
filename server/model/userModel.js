import mongoose, { Schema } from "mongoose";

const userSchema = new mongoose.Schema({
    first_Name: {
        type: String,
        required: true
    },
    last_Name: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    }

})

export default mongoose.model("Users", userSchema);
