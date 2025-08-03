// src/app/api/auth/login/route.js

// import dbConnect from '@/lib/db'
import User from '@/models/users'
import jwt from 'jsonwebtoken'
import dbConnect from "@/lib/db";

export async function POST(req) {
    await dbConnect();
    const body = await req.json();
    const {email, password} = body;

    const user = await User.findOne({email, password})
    if (!user) {
        return new Response(JSON.stringify({message: 'Invalid credentials'}), {
            status: 401,
        })
    }

    const token = jwt.sign({email: user.email}, process.env.JWT_SECRET, {
        expiresIn: '1h',
    })
    // localStorage.setItem("token", token);

    return new Response(JSON.stringify({token}), {
        status: 200,
        headers: {'Content-Type': 'application/json'},
    })
}
