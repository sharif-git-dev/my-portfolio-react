// src/index.js
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'; // Import the App component from the App.js file
import './index.css'; // Import global styles, if any
import 'bootstrap/dist/css/bootstrap.min.css';

// Render the App component into the root element
ReactDOM.render(
  <React.StrictMode>
    <App /> {/* Render the App component */}
  </React.StrictMode>,
  document.getElementById('root') // Make sure there's an element with id 'root' in your public/index.html
);
