import jwt from 'jsonwebtoken';
import User from '../models/User.js'
const authMiddleware = async (req, res, next) => {
    try {
        const authHeader = req.header('Authorization');
        
        if (!authHeader) {
            return res.status(401).json({ success: false, message: 'Authorization header is missing' });
        }

        const token = authHeader.replace('Bearer ', '');
        const decoded = jwt.verify(token, process.env.SECRET);
        const user = await User.findOne({ email: decoded.email });

        if (!user) {
            throw new Error('User not found');
        }

        req.user = user; // Adjunta el usuario al objeto req
        req.token = token;
        next();
    } catch (error) {
        res.status(401).json({ success: false, message: 'Authentication failed' });
    }
};

export default authMiddleware;