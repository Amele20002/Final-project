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
);
