import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config(); // Load environment variables from .env.local

const connectDB = async () => {
    try {
        const DB_URI = process.env.DB_URI;

        if (!DB_URI) {
            throw new Error("🚨 DB_URI is missing or undefined in .env.local file!");
        }

        console.log("📌 Connecting to MongoDB with URI:", DB_URI);

        if (mongoose.connection.readyState >= 1) {
            console.log("⚡️ MongoDB already connected.");
            return;
        }

        await mongoose.connect(DB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });

        console.log("🔥 MongoDB connected successfully!");
    } catch (err) {
        console.error("❌ MongoDB connection failed:", err);
        process.exit(1);
    }
};

export default connectDB;



