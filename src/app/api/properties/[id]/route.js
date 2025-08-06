// app/api/properties/[id]/route.js or route.ts
import dbConnect from "@/lib/db";
import { NextResponse } from "next/server";
import Property from "@/models/properties";

export async function DELETE(req, { params }) {
    await dbConnect();

    const id = params.id;

    if (!id) {
        return NextResponse.json({ success: false, error: "Missing ID" }, { status: 400 });
    }

    try {
        const result = await Property.findByIdAndDelete(id);
        if (!result) {
            return NextResponse.json({ success: false, error: "Property not found" }, { status: 404 });
        }

        return NextResponse.json({ success: true, message: "Deleted successfully" });
    } catch (error) {
        console.error("Error deleting property:", error);
        return NextResponse.json({ success: false, error: "Server error" }, { status: 500 });
    }
}
