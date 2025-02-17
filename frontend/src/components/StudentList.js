////
/*import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function StudentList() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const response = await axios.get('/api/students');
        setStudents(response.data.response);
      } catch (error) {
        console.error('Error fetching students:', error);
      }
    };
    fetchStudents();
  }, []);

  return (
    <div className="container mt-4">
      <h2>Student List</h2>
      {students.length > 0 ? (
        <ul className="list-group">
          {students.map((student) => (
            <li key={student.student_id} className="list-group-item">
              <Link to={`/students/${student.student_id}`}>{student.name}</Link>
            </li>
          ))}
        </ul>
      ) : (
        <p>No students found.</p>
      )}
    </div>
  );
}*/
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function StudentList() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const response = await axios.get('/api/students');
        console.log('API Response:', response.data); // Log the response
        setStudents(response.data);
      } catch (error) {
        console.error('Error fetching students:', error);
      }
    };
    fetchStudents();
  }, []);

  return (
    <div className="container mt-4">
      <h2>Student List</h2>
      {students.length > 0 ? (
        <ul className="list-group">
          {students.map((student) => (
            <li key={student.student_id} className="list-group-item">
              <Link to={`/students/${student.student_id}`}>{student.name}</Link>
            </li>
          ))}
        </ul>
      ) : (
        <p>No students found.</p>
      )}
    </div>
  );
}