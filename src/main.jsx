// src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client'; // Usar react-dom/client para React 18
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);