### Config & Installation

#### To set up a development environment on your local computer

- Git clone the repository
- cd into project and run 'npm install' - this will install backend dependecies
- cd into client folder and run 'npm install' - this will install frontend dependecies
- in config folder add your 'config.env' file that will contain your PORT=5000 and your MONGO_URI
- in root folder install 'nodemon'(npm install -D nodemon) to run the server in development mode
- from root folder run in terminal command ‘npm run dev’ to start both servers(using concurrently)
- The application will initialise on your default browser for ‘localhost:3000’ for frontend and ‘localhost:5000’ for backend
