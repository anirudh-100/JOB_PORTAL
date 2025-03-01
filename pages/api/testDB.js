import connectDB from "../../DB/connectDB";

export default async function handler(req, res) {
    await connectDB(); // Connect to MongoDB

    res.status(200).json({ message: "✅ MongoDB Connection Successful!" });
}
