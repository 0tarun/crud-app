import express from "express";
import mongoose  from "mongoose";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import cors from "cors";
import route from "./routes/userRoute.js";

const app = express();
app.use(bodyParser.json());
app.use(cors());
dotenv.config();

app.use("/api", route);

const PORT=process.env.PORT || 7000;
const URL = process.env.MONGOURL;



// Check if URL exists to avoid Mongoose errors
if (!URL) {
    console.error("Error: MONGOURL is not defined in your .env file.");
    process.exit(1);
}

mongoose.connect(URL)
    .then(() => {
        console.log("DB connection is successful!");
        app.listen(PORT, () => {
            console.log(`Server is running on port: ${PORT}`);
        });
    })
    .catch((error) => {
        console.error("Database connection failed:", error.message);
    });

 