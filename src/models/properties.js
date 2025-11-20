// app/models/Property.js
import mongoose from "mongoose";

const propertySchema = new mongoose.Schema(
    {
            title: { type: String, required: true },
            location: { type: String, required: true },
            description: { type: String },

            rooms: { type: Number },
            bathrooms: { type: Number },

            size: { type: Number },        // Built-up Area
            superArea: { type: Number, required: true },   // Newly added
            carpetArea: { type: Number },  // Newly added (optional)

            images: [{ type: String }],

            type: { type: String, enum: ["sale", "rent"], required: true },

            price: { type: Number },
            retailPrice: { type: Number },

            features: [{ type: String }],
    },
    { timestamps: true }
);

export default mongoose.models.properties ||
mongoose.model("properties", propertySchema);
