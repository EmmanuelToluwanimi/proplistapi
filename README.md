# ProplistApi

This project, ProplistApi, is a backend assessment task built to manage property listings.

## Functionality

ProplistApi provides several functionalities related to property listings:

- Lists all properties (GET "/api/properties")
- Retrieves a specific property by ID (GET "/api/properties/:id")

## Deployment

The project is currently deployed on Render, access it at:

- **Production URL:** https://proplistapi.onrender.com

## Local Development

For local development and testing purposes, clone the repository and run the application:

**Prerequisites:**

- Node.js and npm (or yarn) installed on your system.

**Installation:**

1. Clone the repository: `git clone https://github.com/EmmanuelToluwanimi/proplistapi.git`
2. Navigate to the project directory: `cd proplistapi`
3. Install dependencies: `npm install` (or `yarn install`)

**Development Server:**

1. Start the development server: `npm start` (or `yarn start`)
2. Open http://localhost:8000 in your browser.

## API Routes

ProplistApi offers several API routes for managing property listings:

1. **Home route (GET "/")**: Returns a basic response indicating the API is running.
2. **Get Properties (GET "/api/properties")**: Retrieves all property listings from the database. This route likely utilizes pagination logic for extensive datasets.
3. **Get Property by ID (GET "/api/properties/:id")**: Retrieves a specific property by its unique identifier.

## Code Quality

The project prioritizes clean and readable code with meaningful variable names, enhancing maintainability and understanding.
