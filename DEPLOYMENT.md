# MovieFlix Deployment Guide

This guide explains how to deploy MovieFlix with the backend on Render and frontend on Vercel.

## Prerequisites

- GitHub account
- Render account (render.com)
- Vercel account (vercel.com)
- MongoDB Atlas account (for production database)
- TMDB API key

## Backend Deployment (Render)

### 1. Prepare Environment Variables

Create the following environment variables in Render:

```
NODE_ENV=production
MONGO_URI=your_mongodb_atlas_connection_string
JWT_SECRET=your_secure_jwt_secret
TMDB_API_KEY=your_tmdb_api_key
FRONTEND_URL=https://your-vercel-app.vercel.app
```

### 2. Deploy to Render

1. Connect your GitHub repository to Render
2. Create a new Web Service
3. Set the following:
   - **Build Command**: `cd backend && npm install`
   - **Start Command**: `cd backend && npm start`
   - **Root Directory**: Leave empty (or set to `/`)
4. Add all environment variables listed above
5. Deploy

## Frontend Deployment (Vercel)

### 1. Prepare Environment Variables

Create the following environment variable in Vercel:

```
VITE_API_URL=https://your-render-app.onrender.com
```

### 2. Deploy to Vercel

1. Connect your GitHub repository to Vercel
2. Set the following:
   - **Framework Preset**: Vite
   - **Root Directory**: `frontend`
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
3. Add the environment variable listed above
4. Deploy

## Local Development

### Backend (.env file in backend folder)
```
PORT=5000
MONGO_URI=your_local_mongodb_connection
NODE_ENV=development
JWT_SECRET=your_local_jwt_secret
TMDB_API_KEY=your_tmdb_api_key
FRONTEND_URL=http://localhost:5173
```

### Frontend (.env.local file in frontend folder)
```
VITE_API_URL=http://localhost:5000
```

## Important Notes

1. **CORS Configuration**: The backend is configured to accept requests from both local development and production URLs
2. **Cookies**: Authentication uses HTTP-only cookies that work across domains in production
3. **Environment Switching**: The app automatically detects the environment and uses appropriate API URLs
4. **Database**: Use MongoDB Atlas for production, local MongoDB for development

## Troubleshooting

### Common Issues:

1. **CORS Errors**: Ensure FRONTEND_URL is correctly set in backend environment variables
2. **Cookie Issues**: Make sure both domains support HTTPS in production
3. **API Connection**: Verify VITE_API_URL points to the correct Render URL
4. **Build Failures**: Check that all dependencies are listed in package.json

### Testing Deployment:

1. Test authentication (login/signup)
2. Test movie/TV show browsing
3. Test search functionality
4. Test video playback
5. Verify all API endpoints work correctly

## Security Considerations

- Never commit .env files to version control
- Use strong JWT secrets in production
- Ensure MongoDB connection uses authentication
- Keep TMDB API key secure
- Use HTTPS in production for both frontend and backend