/*const express = require('express');
const cors = require('cors');
const pool = require('./db');
const app = express();

app.use(cors());
app.use(express.json());

// GET all students
app.get('/api/students', async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM students');
        res.status(200).json({ message: 'Students fetched successfully', response: result.rows });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server error' });
    }
});

// POST a new student
app.post('/api/students', async (req, res) => {
    const { first_name, last_name, email, enrollment_date } = req.body;
    try {
        const result = await pool.query(
            'INSERT INTO students (first_name, last_name, email, enrollment_date) VALUES ($1, $2, $3, $4) RETURNING *',
            [first_name, last_name, email, enrollment_date]
        );
        res.status(200).json({ message: 'Student created successfully', response: result.rows[0] });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server error' });
    }
});

// PUT update a student
app.put('/api/students/:id', async (req, res) => {
    const { first_name, last_name, email } = req.body;
    const studentId = req.params.id;
    try {
        const result = await pool.query(
            'UPDATE students SET first_name = $1, last_name = $2, email = $3 WHERE student_id = $4 RETURNING *',
            [first_name, last_name, email, studentId]
        );
        res.status(200).json({ message: 'Student updated successfully', response: result.rows[0] });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server error' });
    }
});

// DELETE a student
app.delete('/api/students/:id', async (req, res) => {
    const studentId = req.params.id;
    try {
        await pool.query('DELETE FROM students WHERE student_id = $1', [studentId]);
        res.status(200).json({ message: 'Student deleted successfully' });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server error' });
    }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});*/
/*const express = require('express');
const cors = require('cors');
const pool = require('./db');
const axios = require('axios');
const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

// GET all students
app.get('/students', async (req, res) => {
    try {
        const { rows } = await pool.query('SELECT * FROM students');
        res.status(200).json({ message: 'Students fetched successfully', response: rows });
    } catch (err) {
        res.status(500).json({ message: 'Error fetching students', error: err });
    }
});

// POST a new student
app.post('/students', async (req, res) => {
    const { name, email, age } = req.body;
    try {
        await pool.query('INSERT INTO students (name, email, age) VALUES ($1, $2, $3)', [name, email, age]);
        res.status(201).json({ message: 'Student added successfully' });
    } catch (err) {
        res.status(500).json({ message: 'Error adding student', error: err });
    }
});

// PUT update a student
app.put('/students/:id', async (req, res) => {
    const { id } = req.params;
    const { name, email, age } = req.body;
    try {
        await pool.query('UPDATE students SET name = $1, email = $2, age = $3 WHERE student_id = $4', [name, email, age, id]);
        res.status(200).json({ message: 'Student updated successfully' });
    } catch (err) {
        res.status(500).json({ message: 'Error updating student', error: err });
    }
});

// DELETE a student
app.delete('/students/:id', async (req, res) => {
    const { id } = req.params;
    try {
        await pool.query('DELETE FROM students WHERE student_id = $1', [id]);
        res.status(200).json({ message: 'Student deleted successfully' });
    } catch (err) {
        res.status(500).json({ message: 'Error deleting student', error: err });
    }
});

// Connect to external API (OpenWeatherMap)
app.get('/weather', async (req, res) => {
    try {
        const response = await axios.get('https://api.openweathermap.org/data/2.5/weather?q=London&appid=YOUR_API_KEY');
        res.status(200).json({ message: 'Weather fetched successfully', response: response.data });
    } catch (err) {
        res.status(500).json({ message: 'Error fetching weather', error: err });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);*/
//});
// index.js
const express = require('express');
const cors = require('cors');
const pool = require('./db');
const axios = require('axios');
require('dotenv').config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Connect to External API (Example: RandomUser API)
app.get('/api/external', async (req, res) => {
    try {
        const response = await axios.get('https://randomuser.me/api/');
        res.status(200).json({ message: 'External API data retrieved successfully', data: response.data });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Error fetching external API data' });
    }
});

// GET all students
app.get('/students', async (req, res) => {
    try {
        const [students] = await pool.query('SELECT * FROM students');
        res.status(200).json({ message: 'Students retrieved successfully', response: students });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Error retrieving students' });
    }
});

// POST a new student
app.post('/students', async (req, res) => {
    try {
        const { student_id, first_name, last_name, email, date_of_birth } = req.body;
        await pool.query(
            'INSERT INTO students (student_id, first_name, last_name, email, date_of_birth) VALUES (?, ?, ?, ?, ?)',
            [student_id, first_name, last_name, email, date_of_birth]
        );
        res.status(201).json({ message: 'Student added successfully' });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Error adding student' });
    }
});

// PUT update a student
app.put('/students/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const { first_name, last_name, email } = req.body;
        await pool.query(
            'UPDATE students SET first_name = ?, last_name = ?, email = ? WHERE student_id = ?',
            [first_name, last_name, email, id]
        );
        res.status(200).json({ message: 'Student updated successfully' });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Error updating student' });
    }
});

// DELETE a student
app.delete('/students/:id', async (req, res) => {
    try {
        const { id } = req.params;
        await pool.query('DELETE FROM students WHERE student_id = ?', [id]);
        res.status(200).json({ message: 'Student deleted successfully' });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Error deleting student' });
    }
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
