// tmdb.service.js
import axios from 'axios';
import { ENV_VARS } from '../config/envVars.js';

export const fetchFromTMDB = async (url) => {
    const options = {
        headers: {
            accept: 'application/json',
            Authorization: `Bearer ${ENV_VARS.TMDB_API_KEY}`
        }
    };
    
    try {
        const response = await axios.get(url, options);
        return response.data;
    } catch (error) {
        // Log the detailed error for debugging purposes
        console.error("Error fetching from TMDB:", error.message);
        
        // Re-throw a simple error that the controllers can handle
        if (error.response) {
            // The request was made and the server responded with a status code
            // that falls out of the range of 2xx
            throw new Error(`TMDB API returned status ${error.response.status}`);
        } else if (error.request) {
            // The request was made but no response was received
            throw new Error('No response received from TMDB API');
        } else {
            // Something else happened in setting up the request
            throw new Error('Error in API request to TMDB');
        }
    }
};