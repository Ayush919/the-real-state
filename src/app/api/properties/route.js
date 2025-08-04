import Property from '@/models/Properties';
import {NextResponse} from 'next/server';
import dbConnect from "@/lib/db";

export async function GET(req) {
    const {searchParams} = new URL(req.url);
    const id = searchParams.get('id');

    await dbConnect();

    try {
        if (id) {
            // Fetch by ID if 'id' query param is present
            const property = await Property.findById(id);
            if (!property) {
                return NextResponse.json({success: false, error: 'Property not found'}, {status: 404});
            }

            return NextResponse.json({success: true, data: property});
        } else {
            // Otherwise fetch all properties
            const properties = await Property.find({});
            return NextResponse.json({success: true, data: properties});
        }
    } catch (error) {
        console.error("Error fetching property/properties:", error);
        return NextResponse.json({success: false, error: 'Failed to fetch properties'}, {status: 500});
    }
}


// POST new property
export async function POST(req) {
    try {
        await dbConnect();
        const body = await req.json();
        const authHeader = req.headers.get('authorization')
        const token = authHeader?.split(' ')[1]

        if (!token) {
            return NextResponse.json({ message: 'Unauthorized' }, { status: 401 })
        }


        const newProperty = await Property.create(body);
        return NextResponse.json({success: true, data: newProperty}, {status: 201});
    } catch (error) {
        console.error("Error creating property:", error);
        return NextResponse.json({success: false, error: 'Failed to create property'}, {status: 500});
    }
}

// PUT or DELETE (by query param ID)
export async function PUT(req) {
    const {searchParams} = new URL(req.url);
    const id = searchParams.get('id');
    const authHeader = req.headers.get('authorization')
    const token = authHeader?.split(' ')[1]

    if (!token) {
        return NextResponse.json({ message: 'Unauthorized' }, { status: 401 })
    }

    if (!id) {
        return NextResponse.json({success: false, error: 'Missing property ID'}, {status: 400});
    }

    try {
        await dbConnect();
        const data = await req.json();
        const updated = await Property.findByIdAndUpdate(id, data, {new: true});
        return NextResponse.json({success: true, data: updated});
    } catch (error) {
        return NextResponse.json({success: false, error: 'Failed to update property'}, {status: 500});
    }
}

