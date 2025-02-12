const express = require('express');
const cors = require('cors');
const pool = require('./db');
const app = express();

app.use(cors());
app.use(express.json());

// Example endpoint
app.get('/api/students', async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM students');
        res.status(200).json({ message: 'Students fetched successfully', response: result.rows });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server error' });
    }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});