import jwt from 'jsonwebtoken';

const secret = process.env.JWT_SECRET;

// generating token using jwt & secret-key [expires in 1 hour]
export function generateToken(payload) {
    return jwt.sign(payload, secret, { expiresIn: '1h' });
}

// verifying generated token
export function verifyToken(token) {
    try {
        return jwt.verify(token, secret);
    } catch (error) {
        return error;
    }
}