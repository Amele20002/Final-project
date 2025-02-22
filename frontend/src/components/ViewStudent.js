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