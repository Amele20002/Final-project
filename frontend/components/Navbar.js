/*import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav style={styles.nav}>
            <h1 style={styles.title}>Student Management System</h1>
            <ul style={styles.navList}>
                <li>
                    <Link to="/" style={styles.link}>Home</Link>
                </li>
                <li>
                    <Link to="/add-student" style={styles.link}>Add Student</Link>
                </li>
            </ul>
        </nav>
    );
};

const styles = {
    nav: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '10px 20px',
        backgroundColor: '#333',
        color: '#fff',
    },
    title: {
        margin: 0,
    },
    navList: {
        listStyle: 'none',
        display: 'flex',
        gap: '20px',
        margin: 0,
        padding: 0,
    },
    link: {
        color: '#fff',
        textDecoration: 'none',
        fontSize: '18px',
    },
};

export default Navbar;*/
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav style={styles.nav}>
            <h1 style={styles.title}>Student Management System</h1>
            <ul style={styles.navList}>
                <li>
                    <Link to="/" style={styles.link}>Home</Link>
                </li>
                <li>
                    <Link to="/add-student" style={styles.link}>Add Student</Link>
                </li>
                {/* Add this new link for Courses */}
                <li>
                    <Link to="/courses" style={styles.link}>Courses</Link>
                </li>
            </ul>
        </nav>
    );
};

const styles = {
    nav: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '10px 20px',
        backgroundColor: '#333',
        color: '#fff',
    },
    title: {
        margin: 0,
    },
    navList: {
        listStyle: 'none',
        display: 'flex',
        gap: '20px',
        margin: 0,
        padding: 0,
    },
    link: {
        color: '#fff',
        textDecoration: 'none',
        fontSize: '18px',
    },
};

export default Navbar;
