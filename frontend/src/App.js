/*import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
//////////
export default App;
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import StudentList from './components/StudentList';
import StudentForm from './components/StudentForm';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<StudentList />} />
                <Route path="/add-student" element={<StudentForm />} />
            </Routes>
        </Router>
    );
}

export default App;*/
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import axios from 'axios';
import Header from './components/Header';
import Footer from './components/Footer';
import StudentList from './components/StudentList';
import StudentForm from './components/StudentForm';
import CourseList from './components/CourseList';
import Weather from './components/Weather';
import './App.css';

function App() {
    const [students, setStudents] = useState([]);
    const [courses, setCourses] = useState([]);
    const [weather, setWeather] = useState(null);

    // Fetch students
    useEffect(() => {
        axios.get('http://localhost:3000/students')
            .then(response => setStudents(response.data.response))
            .catch(error => console.error(error));
    }, []);

    // Fetch courses
    useEffect(() => {
        axios.get('http://localhost:3000/courses')
            .then(response => setCourses(response.data.response))
            .catch(error => console.error(error));
    }, []);

    // Fetch weather data
    useEffect(() => {
        axios.get('http://localhost:3000/weather')
            .then(response => setWeather(response.data.response))
            .catch(error => console.error(error));
    }, []);

    return (
        <Router>
            <Header />
            <Routes>
                <Route path="/" element={<StudentList students={students} />} />
                <Route path="/add-student" element={<StudentForm />} />
                <Route path="/courses" element={<CourseList courses={courses} />} />
                <Route path="/weather" element={<Weather weather={weather} />} />
            </Routes>
            <Footer />
        </Router>
    );
}

export default App;