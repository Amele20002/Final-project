const express = require('express');
const cors = require('cors');
const pool = require('./db');

const app = express();
const PORT = 3001;

// Middleware
app.use(cors());
app.use(express.json());

// 1. GET /api/students - Get all students
app.get('/api/students', async (req, res) => {
  try {
    const students = await pool.query('SELECT * FROM students');
    res.status(200).json({ message: 'Students fetched successfully', response: students.rows });
  } catch (error) {
    res.status(500).json({ message: 'Error fetching students', error: error.message });
  }
});

// 2. GET /api/students/:student_id - Get a single student by ID
app.get('/api/students/:student_id', async (req, res) => {
  try {
    const { student_id } = req.params;
    const student = await pool.query('SELECT * FROM students WHERE student_id = $1', [student_id]);

    if (student.rows.length === 0) {
      return res.status(404).json({ message: 'Student not found', error: 'Invalid student ID' });
    }

    res.status(200).json({ message: 'Student fetched successfully', response: student.rows[0] });
  } catch (error) {
    res.status(500).json({ message: 'Error fetching student', error: error.message });
  }
});

// 3. POST /api/students - Add a new student
app.post('/api/students', async (req, res) => {
  try {
    const { name, email, enrollment_date } = req.body;

    // Validate the name field
    if (!name || name.trim() === '') {
      return res.status(400).json({ message: 'Name is required', error: 'Invalid name' });
    }

    // Split the name into first_name and last_name
    const [first_name, last_name] = name.split(' ');
    const studentLastName = last_name || ''; // Use an empty string if last_name is undefined

    // Validate the date format (YYYY-MM-DD)
    const dateRegex = /^\d{4}-\d{2}-\d{2}$/;
    if (!dateRegex.test(enrollment_date)) {
      return res.status(400).json({ message: 'Invalid date format. Use YYYY-MM-DD.', error: 'Invalid date' });
    }

    // Insert the student into the database
    const newStudent = await pool.query(
      'INSERT INTO students (first_name, last_name, email, enrollment_date) VALUES ($1, $2, $3, $4) RETURNING *',
      [first_name, studentLastName, email, enrollment_date]
    );

    res.status(200).json({ message: 'Student added successfully', response: newStudent.rows[0] });
  } catch (error) {
    res.status(500).json({ message: 'Error adding student', error: error.message });
  }
});

// 4. PUT /api/students/:student_id - Update a student
app.put('/api/students/:student_id', async (req, res) => {
  try {
    const { student_id } = req.params;
    const { name, email, enrollment_date } = req.body;

    // Validate the name field
    if (!name || name.trim() === '') {
      return res.status(400).json({ message: 'Name is required', error: 'Invalid name' });
    }

    // Split the name into first_name and last_name
    const [first_name, last_name] = name.split(' ');
    const studentLastName = last_name || ''; // Use an empty string if last_name is undefined

    // Validate the date format (YYYY-MM-DD)
    const dateRegex = /^\d{4}-\d{2}-\d{2}$/;
    if (!dateRegex.test(enrollment_date)) {
      return res.status(400).json({ message: 'Invalid date format. Use YYYY-MM-DD.', error: 'Invalid date' });
    }

    // Update the student in the database
    const updatedStudent = await pool.query(
      'UPDATE students SET first_name = $1, last_name = $2, email = $3, enrollment_date = $4 WHERE student_id = $5 RETURNING *',
      [first_name, studentLastName, email, enrollment_date, student_id]
    );

    if (updatedStudent.rows.length === 0) {
      return res.status(404).json({ message: 'Student not found', error: 'Invalid student ID' });
    }

    res.status(200).json({ message: 'Student updated successfully', response: updatedStudent.rows[0] });
  } catch (error) {
    res.status(500).json({ message: 'Error updating student', error: error.message });
  }
});

// 5. DELETE /api/students/:student_id - Delete a student
app.delete('/api/students/:student_id', async (req, res) => {
  try {
    const { student_id } = req.params;

    // Delete the student from the database
    const deletedStudent = await pool.query('DELETE FROM students WHERE student_id = $1 RETURNING *', [student_id]);

    if (deletedStudent.rows.length === 0) {
      return res.status(404).json({ message: 'Student not found', error: 'Invalid student ID' });
    }

    res.status(200).json({ message: 'Student deleted successfully', response: deletedStudent.rows[0] });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting student', error: error.message });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});