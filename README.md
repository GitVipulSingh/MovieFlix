# MERN MovieFlix Clone 🎬

## Project Description

A full-stack MovieFlix Clone project built with React, Vite, Express, and MongoDB. This project aims to replicate the core functionalities and user experience of MovieFlix.

## Features

*   ⚛️ **Tech Stack**: React.js, Vite, Node.js, Express.js, MongoDB, Tailwind CSS
*   🔐 **Authentication**: Secure user authentication using JWT.
*   📱 **Responsive UI**: A user interface that adapts to various screen sizes.
*   🎬 **Movie & TV Show Data**: Fetching and displaying movie and TV show information.
*   🔎 **Search Functionality**: Search for actors and movies.
*   🎥 **Video Playback**: Watch trailers and videos.
*   🔥 **Search History**: Stores and retrieves user search history.
*   🐱‍👤 **Recommendations**: Suggests similar movies/TV shows based on user activity.
*   💙 **Landing Page**: An engaging landing page.
<!-- *   🌐 **Deployment**: Information about deployment (if applicable, though not explicitly detailed in provided files). -->
*   🚀 **And Many More Cool Features**

## Setup

### Prerequisites

*   Node.js (v18.0.0 or higher recommended)
*   MongoDB

### Environment Variables

Create a `.env` file in the root of the `backend` directory and populate it with the following variables:

\`\`\`bash
PORT=5000
MONGO_URI=your_mongo_uri
NODE_ENV=development
JWT_SECRET=your_jwt_secre
TMDB_API_KEY=your_tmdb_api_key
\`\`\`

### Installation

1.  **Clone the repository** (assuming this is done already).
2.  **Install backend dependencies**:
    \`\`\`bash
    cd backend
    npm install
    cd ..
    \`\`\`
3.  **Install frontend dependencies**:
    \`\`\`bash
    cd frontend
    npm install
    cd ..
    \`\`\`

## Running the Project

### Development Mode

To run the application in development mode, start both the backend and frontend servers:

\`\`\`bash
npm run dev
\`\`\`

### Production Mode

To start the application in production mode:

\`\`\`bash
npm run start
\`\`\`

### Building the Frontend

To build the frontend for production:

\`\`\`bash
npm run build
\`\`\`

