/*import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
//import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
//reportWebVitals();*/
import React from 'react';
import ReactDOM from 'react-dom/client'; // React 18+ uses ReactDOM.createRoot 'dom/client;
import './index.css'; // Import global styles
import App from './App'; // Import the root component

// Create a root element and render the App component
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);/*
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'; // Import the App component
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import './index.css'; // Import custom CSS

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root') // Render the App component into the root div
);*/