import { useState } from 'react';
import axios from 'axios';

export default function AddStudent() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [enrollmentDate, setEnrollmentDate] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/api/students`, {
        name,
        email,
        enrollment_date: enrollmentDate,
      });
      if (response.status === 200) {
        alert('Student added successfully!');
        setName('');
        setEmail('');
        setEnrollmentDate('');
      } else {
        alert('Failed to add student. Please try again.');
      }
    } catch (error) {
      console.error('Error adding student:', error);
      alert('An error occurred. Please check the console for details.');
    }
  };

  return (
    <div className="container mt-4">
      <h2>Add Student</h2>
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="add-student-form">
            <form onSubmit={handleSubmit}>
              {/* Name Input */}
              <div className="mb-3">
                <label htmlFor="name" className="form-label">Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  placeholder="Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>

              {/* Email Input */}
              <div className="mb-3">
                <label htmlFor="email" className="form-label">Email</label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>

              {/* Enrollment Date Input */}
              <div className="mb-3">
                <label htmlFor="enrollmentDate" className="form-label">Enrollment Date</label>
                <input
                  type="date"
                  className="form-control"
                  id="enrollmentDate"
                  value={enrollmentDate}
                  onChange={(e) => setEnrollmentDate(e.target.value)}
                  required
                />
              </div>

              {/* Submit Button */}
              <button type="submit" className="btn btn-primary w-100">Add</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
