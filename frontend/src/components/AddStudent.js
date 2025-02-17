//
/*import { useState, useEffect } from 'react';
import axios from 'axios';

export default function AddStudent() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [picture, setPicture] = useState('');

  useEffect(() => {
    const fetchPicture = async () => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_EXTERNAL_API}/?inc=picture`);
        setPicture(response.data.results[0].picture.large);
      } catch (error) {
        console.error('Error fetching picture:', error);
      }
    };
    fetchPicture();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/students', { name, email, picture });
      if (response.status === 200) {
        alert('Student added successfully!');
        setName('');
        setEmail('');
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
              {picture && (
                <div className="mb-3 text-center">
                  <img
                    src={picture}
                    alt="Profile"
                    className="img-fluid rounded-circle"
                    style={{ width: '100px', height: '100px' }}
                  />
                </div>
              )}
              <button type="submit" className="btn btn-primary w-100">Add</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}*/
import { useState } from 'react';
import axios from 'axios';

export default function AddStudent() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [picture, setPicture] = useState(null); // Store the selected file

  // Handle file input change
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPicture(reader.result); // Set the picture as a base64 string
      };
      reader.readAsDataURL(file); // Read the file as a data URL
    }
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Send the student data (including the picture) to the backend
      const response = await axios.post('/api/students', { name, email, picture });
      if (response.status === 200) {
        alert('Student added successfully!');
        setName('');
        setEmail('');
        setPicture(null); // Clear the picture
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

              {/* Profile Picture Input */}
              <div className="mb-3">
                <label htmlFor="picture" className="form-label">Profile Picture</label>
                <input
                  type="file"
                  className="form-control"
                  id="picture"
                  accept="image/*" // Allow only image files
                  onChange={handleFileChange}
                  required
                />
              </div>

              {/* Display the selected picture */}
              {picture && (
                <div className="mb-3 text-center">
                  <img
                    src={picture}
                    alt="Profile"
                    className="img-fluid rounded-circle"
                    style={{ width: '100px', height: '100px' }}
                  />
                </div>
              )}

              {/* Submit Button */}
              <button type="submit" className="btn btn-primary w-100">Add</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
