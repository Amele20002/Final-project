import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <div className="d-flex align-items-center">
          {/* Students Management Link */}
          <Link className="navbar-brand me-2" to="/">AmiTech</Link>

          {/* Separator with spaces */}
          <span className="navbar-text me-2"> | </span>

          {/* Students Link */}
          <Link className="nav-link me-2" to="/students">Students</Link>

          {/* Separator with spaces */}
          <span className="navbar-text me-2"> | </span>

          {/* Add Student Link */}
          <Link className="nav-link" to="/add-student">Add Student</Link>
        </div>
      </div>
    </nav>
  );
}