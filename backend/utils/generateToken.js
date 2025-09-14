import jwt from 'jsonwebtoken';
import {ENV_VARS} from '../config/envVars.js';

export const generateTokenAndSetCookie = (userId, res) => {
    const token = jwt.sign({ userId }, ENV_VARS.JWT_SECRET, { expiresIn: '15d' });
    
    const cookieOptions = {
        maxAge: 15 * 24 * 60 * 60 * 1000, // 15 days in milliseconds
        httpOnly: true, // cookie is not accessible via client side script
    };
    
    // Force production settings for cross-domain cookies
    cookieOptions.sameSite = "none";
    cookieOptions.secure = true;
    
    console.log('Setting cookie with options:', cookieOptions);
    res.cookie('jwt-movieflix', token, cookieOptions);
    return token;
};