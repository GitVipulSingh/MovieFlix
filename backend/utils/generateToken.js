import jwt from 'jsonwebtoken';
import {ENV_VARS} from '../config/envVars.js';

export const generateTokenAndSetCookie = (userId, res) => {
    const token = jwt.sign({ userId }, ENV_VARS.JWT_SECRET, { expiresIn: '15d' });
    
    const cookieOptions = {
        maxAge: 15 * 24 * 60 * 60 * 1000, // 15 days in milliseconds
        httpOnly: true, // cookie is not accessible via client side script
    };
    
    if (ENV_VARS.NODE_ENV === 'production') {
        cookieOptions.sameSite = "none";
        cookieOptions.secure = true;
        // Don't set domain - let browser handle it
    } else {
        cookieOptions.sameSite = "strict";
        cookieOptions.secure = false;
    }
    
    console.log('Setting cookie with options:', cookieOptions);
    res.cookie('jwt-movieflix', token, cookieOptions);
    return token;
};