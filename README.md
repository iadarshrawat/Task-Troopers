<p align="center">

![image](https://github.com/user-attachments/assets/fdc4ef67-79dd-41d1-a40b-3fcffd7cc20c)
  
</p>

# Task-Troppers

Task-Troppers is a platform similar to Fiverr that connects freelancers with clients. Users can post tasks, browse freelancer profiles, and hire professionals for various services. The project is built using the MERN stack with Node.js, MongoDB, Prisma, and React.js.

## Table of Contents

- [Features](#features)
- [Technologies](#technologies)
- [Getting Started](#getting-started)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Running the Application](#running-the-application)
- [Folder Structure](#folder-structure)
- [Contributing](#contributing)
- [License](#license)

## Features

- Post tasks and services.
- Browse and hire freelancers.
- User authentication and authorization.
- Detailed user profiles with ratings and reviews.
- Secure payment integration.
- Responsive design for mobile and desktop.

## Technologies

- **Frontend:** React.js
- **Backend:** Node.js, Express.js
- **Database:** MongoDB, Prisma

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

- Node.js
- MongoDB
- Prisma
- npm or yarn

### Installation

1. **Clone the repository:**

    ```bash
    git clone https://github.com/yourusername/task-troppers.git
    cd task-troppers
    ```

2. **Install dependencies for the backend:**

    ```bash
    cd backend
    npm install
    ```

3. **Install dependencies for the frontend:**

    ```bash
    cd ../frontend
    npm install
    ```

### Running the Application

1. **Start MongoDB:**

    Ensure MongoDB is running on your machine. You can start it using the following command:

    ```bash
    mongod
    ```

2. **Configure Prisma:**

    In the `backend` folder, configure Prisma to connect to your MongoDB instance. Update the `prisma/schema.prisma` file with your MongoDB connection details.

3. **Run database migrations:**

    ```bash
    cd backend
    npx prisma migrate dev
    ```

4. **Start the backend server:**

    ```bash
    npm start
    ```

5. **Start the frontend server:**

    ```bash
    cd ../frontend
    npm start
    ```

6. **Open your browser:**

    Visit `http://localhost:3000` to view the website.

## Folder Structure

```plaintext
task-troppers/
├── backend/
│   ├── prisma/
│   ├── src/
│   ├── package.json
│   └── ...
└── frontend/
    ├── src/
    ├── public/
    ├── package.json
    └── ...
