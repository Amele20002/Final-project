# Student Management System

This project is a **Student Management System** that allows users to manage student information, including names, emails, and enrollment dates. It consists of a **React frontend**, an **Express backend**, and a **PostgreSQL database**.

---

## Table of Contents
1. [Prerequisites](#prerequisites)
2. [Setup Instructions](#setup-instructions)
   - [Backend](#backend)
   - [Frontend](#frontend)
3. [Database Setup](#database-setup)
4. [Project Structure](#project-structure)

---

## Prerequisites
Before running the project, ensure the following are installed:
- **Node.js** (v14 or higher)
- **npm** (Node Package Manager)
- **PostgreSQL** (for the database)

---

## Setup Instructions

### Backend
1. Navigate to the `backend` folder:
   ```bash
   cd backend
2.   Install dependencies:
bash
npm install
3. Create a .env file in the backend folder and add the following:
env
PORT=3001
DB_USER=your_db_username
DB_HOST=localhost
DB_NAME=student_management
DB_PASSWORD=your_db_password
DB_PORT=5433
4. Start the backend server:
bash
npm start
Frontend
Navigate to the frontend folder:
1. bash
cd ../frontend
2. Install dependencies:
bash
npm install
Create a .env file in the frontend folder and add the following:

3. env
REACT_APP_BACKEND_URL=http://localhost:3001
Start the frontend development server:

4. bash
npm start
3. Database Setup
1.Create the database in PostgreSQL:
sql
Copy
CREATE DATABASE student_management;
2. Connect to the database:
bash
psql student_management
3. Create the students table:
sql
CREATE TABLE students (
  student_id SERIAL PRIMARY KEY,
  first_name VARCHAR(50) NOT NULL,
  last_name VARCHAR(50) NOT NULL,
  email VARCHAR(100) NOT NULL UNIQUE,
  enrollment_date DATE NOT NULL,
);
4Insert sample data (optional):
sql
INSERT INTO students (first_name, last_name, email, enrollment_date, picture)
VALUES 
  ('John', 'Doe', 'john@example.com', '2023-10-01', 'https://via.placeholder.com/150'),
  ('Jane', 'Smith', 'jane@example.com', '2023-09-15', 'https://via.placeholder.com/150');