# Task Management Backend

This project implements a backend server for a Task Management Application using NestJS and MongoDB.

## Overview

The Task Management Backend provides a RESTful API for managing tasks. Users can perform CRUD operations (Create, Read, Update, Delete) on tasks stored in a MongoDB database.

## Features

- CRUD operations for tasks (Create, Read, Update, Delete)
- MongoDB integration for data persistence
- RESTful API endpoints for task management

## Technologies Used

- **NestJS**: A progressive Node.js framework for building efficient, reliable, and scalable server-side applications.
- **MongoDB**: A NoSQL database for storing tasks and their details.
- **Mongoose**: An Object Data Modeling (ODM) library for MongoDB and Node.js.

## Setup Instructions

To run this project locally, follow these steps:

1. **Clone the repository**:

   ```bash
   git clone https://github.com/icemedia001/tma.git
   cd tma
Install dependencies:

bash
Copy code
npm install
Set up environment variables:

Create a .env file in the root of the project and add the following:

makefile
Copy code
PORT=3000
MONGODB_URI=mongodb://localhost/tma
Adjust MONGODB_URI if your MongoDB instance is hosted differently.

Start the server:

bash
Copy code
npm run start
This will start the server at http://localhost:3000.

API Endpoints
The backend provides the following API endpoints:

GET /tasks: Fetch all tasks
POST /tasks: Create a new task
GET /tasks/
: Fetch a task by ID
PUT /tasks/
: Update a task by ID
DELETE /tasks/
: Delete a task by ID
Usage
Ensure MongoDB is running (mongod command for local MongoDB instance).
Use tools like Postman or curl to interact with the API endpoints.
Contributing
Contributions are welcome! Please fork the repository and submit a pull request with your changes.

License
This project is licensed under the MIT License.
