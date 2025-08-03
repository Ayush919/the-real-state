module.exports = {
    reactStrictMode: true,
    images: {
        domains: ['res.cloudinary.com','demo09.houzez.co'],
    },
    matcher: ['/admin/:path*'], // Middleware only runs on admin routes
}
