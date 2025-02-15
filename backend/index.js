const express = require('express');
const cors = require('cors');
const db = require('./db');
const axios = require('axios');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Connect to External API 
app.get('/api/external', async (req, res) => {
  try {
    const response = await axios.get('https://randomuser.me/api/');
    res.status(200).json({ message: 'External API data retrieved', response: response.data });
  } catch (err) {
    res.status(500).json({ message: 'Error fetching external API data', error: err.message });
  }
});

// GET all students
app.get('/api/students', async (req, res) => {
  try {
    const { rows } = await db.query('SELECT * FROM students');
    res.status(200).json({ message: 'Students retrieved successfully', response: rows });
  } catch (err) {
    res.status(500).json({ message: 'Error retrieving students', error: err.message });
  }
});

// GET a single student by ID
app.get('/api/students/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { rows } = await db.query('SELECT * FROM students WHERE student_id = $1', [id]);
    if (rows.length === 0) {
      return res.status(404).json({ message: 'Student not found' });
    }
    res.status(200).json({ message: 'Student retrieved successfully', response: rows[0] });
  } catch (err) {
    res.status(500).json({ message: 'Error retrieving student', error: err.message });
  }
});

// POST a new student
app.post('/api/students', async (req, res) => {
  try {
    const { first_name, last_name, email, enrollment_date } = req.body;
    const { rows } = await db.query(
      'INSERT INTO students (first_name, last_name, email, enrollment_date) VALUES ($1, $2, $3, $4) RETURNING *',
      [first_name, last_name, email, enrollment_date]
    );
    res.status(200).json({ message: 'Student added successfully', response: rows[0] });
  } catch (err) {
    res.status(500).json({ message: 'Error adding student', error: err.message });
  }
});

// PUT (Update) a student by ID
app.put('/api/students/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { first_name, last_name, email, enrollment_date } = req.body;
    const { rows } = await db.query(
      'UPDATE students SET first_name = $1, last_name = $2, email = $3, enrollment_date = $4 WHERE student_id = $5 RETURNING *',
      [first_name, last_name, email, enrollment_date, id]
    );
    if (rows.length === 0) {
      return res.status(404).json({ message: 'Student not found' });
    }
    res.status(200).json({ message: 'Student updated successfully', response: rows[0] });
  } catch (err) {
    res.status(500).json({ message: 'Error updating student', error: err.message });
  }
});

// DELETE a student by ID
app.delete('/api/students/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { rows } = await db.query('DELETE FROM students WHERE student_id = $1 RETURNING *', [id]);
    if (rows.length === 0) {
      return res.status(404).json({ message: 'Student not found' });
    }
    res.status(200).json({ message: 'Student deleted successfully', response: rows[0] });
  } catch (err) {
    res.status(500).json({ message: 'Error deleting student', error: err.message });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
