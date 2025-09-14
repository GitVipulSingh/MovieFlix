import jwt from 'jsonwebtoken';
import {ENV_VARS} from '../config/envVars.js';

export const generateTokenAndSetCookie = (userId, res) => {
    const token = jwt.sign({ userId }, ENV_VARS.JWT_SECRET, { expiresIn: '15d' });
    res.cookie('jwt-movieflix', token, {
        maxAge: 15 * 24 * 60 * 60 * 1000, // 15 days in milliseconds
        httpOnly: true, // cookie is not accessible via client side script
        sameSite: "strict", // cookie will only be sent in a first-party context
        secure: ENV_VARS.NODE_ENV !== 'development', // cookie will only be set on a secure connection
    });
    return token;
};