import jwt from 'jsonwebtoken';
import {ENV_VARS} from '../config/envVars.js';

export const generateTokenAndSetCookie = (userId, res) => {
    const token = jwt.sign({ userId }, ENV_VARS.JWT_SECRET, { expiresIn: '15d' });
    res.cookie('jwt-movieflix', token, {
        maxAge: 15 * 24 * 60 * 60 * 1000, // 15 days in milliseconds
        httpOnly: true, // cookie is not accessible via client side script
        sameSite: ENV_VARS.NODE_ENV === 'production' ? "none" : "strict", // allow cross-site cookies in production
        secure: ENV_VARS.NODE_ENV === 'production', // require HTTPS in production
    });
    return token;
};