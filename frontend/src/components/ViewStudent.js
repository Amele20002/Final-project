/*import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const ViewStudent = () => {
  const [student, setStudent] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    axios.get(`http://localhost:3000/students/${id}`)
      .then(response => setStudent(response.data.response))
      .catch(error => console.error(error));
  }, [id]);

  if (!student) return <div>Loading...</div>;

  return (
    <div className="container mt-4">
      <h2>Student Details</h2>
      <p><strong>ID:</strong> {student.student_id}</p>
      <p><strong>Name:</strong> {student.name}</p>
      <p><strong>Email:</strong> {student.email}</p>
    </div>
  );
};

export default ViewStudent;*/
/*import { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

export default function ViewStudent() {
  const { student_id } = useParams();
  const [student, setStudent] = useState(null);

  useEffect(() => {
    const fetchStudent = async () => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/students/${student_id}`);
        setStudent(response.data);
      } catch (error) {
        console.error('Error fetching student:', error);
      }
    };
    fetchStudent();
  }, [student_id]);

  if (!student) return <div>Loading...</div>;

  return (
    <div>
      <h2>{student.name}</h2>
      <p>Email: {student.email}</p>
      <img src={student.picture} alt="Profile" style={{ width: '100px', height: '100px', borderRadius: '50%' }} />
    </div>
  );
}*/
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

export default function ViewStudent() {
  const { student_id } = useParams();
  const [student, setStudent] = useState(null);

  useEffect(() => {
    const fetchStudent = async () => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/students/${student_id}`);
        setStudent(response.data);
      } catch (error) {
        console.error('Error fetching student:', error);
      }
    };
    fetchStudent();
  }, [student_id]);

  if (!student) return <div>Loading...</div>;

  return (
    <div>
      <h2>{student.first_name} {student.last_name}</h2>
      <p>Email: {student.email}</p>
      <p>Enrollment Date: {student.enrollment_date}</p>
    </div>
  );
}