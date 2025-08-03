import jwt from 'jsonwebtoken';

export function verifyToken(req) {
    const token = req.headers.authorization?.split(' ')[1];
    if (!token) throw new Error('No token provided');
    return jwt.verify(token, process.env.JWT_SECRET);
}
