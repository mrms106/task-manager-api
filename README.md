# Task Manager API

Task Manager is a RESTful API built using Node.js and Express for managing tasks. It supports CRUD operations for tasks and includes optional user authentication with session management.

---

## Features
- Create, read, update, and delete tasks.
- User authentication using Passport.js.
- Session management with `express-session`.
- Middleware for route protection.
- Persistent storage with MongoDB and Mongoose.
- Graceful error handling and appropriate HTTP status codes.

---

## Prerequisites

Ensure you have the following installed on your system:
- [Node.js](https://nodejs.org/) (v14 or higher)
- [MongoDB](https://www.mongodb.com/)
- [npm](https://www.npmjs.com/) 

---

## Getting Started

Follow these steps to set up and run the project locally:

### 1. Clone the Repository
```bash
git clone https://github.com/mrms106/task-manager-api
cd task-manager-api

```
### 2. Install Dependencies
Install the required Node.js packages:

```bash
npm install
```

###3 .  Configure Environment Variables
Create a .env file in the root directory and add the following environment variables:

```bash
DB_URL= your database url
SECRET=your secret
```
###4. Run the Application
```bash
node app.js
```

## Project Structure

task-manager-api/

├── controllers/  

│   └── task.js

│   └── user.js

├── middelware/        

│   └── islogedIn.js

├── modules/             

│   └── task.js

│   └── user.js
├── routes/            

│   └── task.js

│   └── user.js

├── .env                

├── app.js              

├── package.json        

└── README.md            


## Tools and Technologies

### 1.Backend Framework: Node.js with Express
### 2.Database: MongoDB with Mongoose
### 3.Authentication: Passport.js with passport-local strategy
### 4.Session Management: express-session
### 5.Environment Variables: dotenv
