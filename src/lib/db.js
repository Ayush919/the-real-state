import mongoose from 'mongoose';

const MONGODB_URI = "mongodb+srv://realStateDb:Realstate%4012@user.hlyxgig.mongodb.net";

let isConnected = false;

export default async function dbConnect() {
    if (isConnected) return;

    try {
        const db = await mongoose.connect(MONGODB_URI, {
            dbName: "real-state",
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });

        isConnected = true;
    } catch (error) {
        console.error("❌ MongoDB connection error:", error);
        throw error;
    }
}

