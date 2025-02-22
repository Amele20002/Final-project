/*import { Link } from 'react-router-dom';
import { Link } from 'react-router-dom';
import logo from './assets/logo.png'; // Import the logo
export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <div className="d-flex align-items-center">
          {/* Students Management Link *
          <Link className="navbar-brand me-2" to="/">AmiTech</Link>

          /* Separator with spaces }
          <span className="navbar-text me-2"> | </span>

          /* Students Link }
          <Link className="nav-link me-2" to="/students">Students</Link>

          /* Separator with spaces}
          <span className="navbar-text me-2"> | </span>

          {/* Add Student Link }
          <Link className="nav-link" to="/add-student">Add Student</Link>
        </div>
      </div>
    </nav>
  );
}*/
/*import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png'; // Import the logo

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <div className="d-flex align-items-center">
          {/* Logo }
          <img src={logo} alt="Logo" style={{ width: '50px', height: '50px', marginRight: '10px' }} />
          <Link className="navbar-brand me-2" to="/">AmiTech</Link>
          <span className="navbar-text me-2"> | </span>
          <Link className="nav-link me-2" to="/students">Students</Link>
          <span className="navbar-text me-2"> | </span>
          <Link className="nav-link" to="/add-student">Add Student</Link>
        </div>
      </div>
    </nav>
  );
}*/
import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const logo = "https://via.placeholder.com/150"; // Placeholder image URL

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <div className="d-flex align-items-center">
          {/* Logo */}
          <img src={logo} alt="Logo" style={{ width: '50px', height: '50px', marginRight: '10px' }} />
          <Link className="navbar-brand me-2" to="/">AmiTech</Link>
          <span className="navbar-text me-2"> | </span>
          <Link className="nav-link me-2" to="/students">Students</Link>
          <span className="navbar-text me-2"> | </span>
          <Link className="nav-link" to="/add-student">Add Student</Link>
        </div>
      </div>
    </nav>
  );
}