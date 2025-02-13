/*import React, { useState, useEffect } from 'react';
import axios from 'axios';

const StudentList = () => {
    const [students, setStudents] = useState([]);

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_API_URL}/api/students`)
            .then(response => setStudents(response.data.response))
            .catch(error => console.error(error));
    }, []);

    return (
        <div>
            <h1>Students</h1>
            {students.map(student => (
                <div key={student.student_id}>
                    <p>{student.first_name} {student.last_name}</p>
                </div>
            ))}
        </div>
    );
};

export default StudentList;*/
import React, { useState } from 'react';
import axios from 'axios';

const StudentForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [age, setAge] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:3000/students', { name, email, age });
            alert('Student added successfully!');
        } catch (error) {
            console.error('Error adding student:', error);
        }
    };

    return (
        <div>
            <h2>Add Student</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} required />
                <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                <input type="number" placeholder="Age" value={age} onChange={(e) => setAge(e.target.value)} required />
                <button type="submit">Add Student</button>
            </form>
        </div>
    );
};

export default StudentForm;