import { NextResponse } from 'next/server';
import { jwtVerify } from 'jose';

const SECRET = new TextEncoder().encode(process.env.JWT_SECRET);

// Define which routes need protection
const protectedRoutes = ['/admin/properties'];

export async function middleware(request) {
    const { pathname } = request.nextUrl;

    // Only protect specific routes
    if (protectedRoutes.some(route => pathname.startsWith(route))) {
        const token = request.cookies.get('token')?.value;

        if (!token) {
            return NextResponse.redirect(new URL('/login', request.url));
        }

        try {
            await jwtVerify(token, SECRET);
            return NextResponse.next(); // Allow request
        } catch (error) {
            return NextResponse.redirect(new URL('/login', request.url));
        }
    }

    return NextResponse.next(); // Public route
}
