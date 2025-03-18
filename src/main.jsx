import React from 'react';
import ReactDOM from 'react-dom/client'; // Correct import
import App from './App';
import './tailwind.css'; // Or your CSS file

const root = ReactDOM.createRoot(document.getElementById('root')); // Correct usage
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
