import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

// Get the root element from the HTML document
const rootElement = document.getElementById('root');

// Create a root using the new createRoot API
const root = ReactDOM.createRoot(rootElement);

// Render the App component within the root
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
