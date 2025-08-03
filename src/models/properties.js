// app/models/Property.js
import mongoose from "mongoose";

const propertySchema = new mongoose.Schema(
    {
        title: { type: String, required: true },
        location: { type: String, required: true },
        description: { type: String },
        rooms: { type: Number },
        bathrooms: { type: Number },
        size: { type: Number },
        images: [{ type: String }],
        type: { type: String, enum: ["sale", "rent"], required: true },
        price: { type: Number },
    },
    { timestamps: true }
);

export default mongoose.models.properties || mongoose.model("properties", propertySchema);


