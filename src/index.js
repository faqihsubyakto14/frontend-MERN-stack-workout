import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// Import Context Providernya di index.js
import { WorkoutsContextProvicer } from './context/WorkoutContext';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <WorkoutsContextProvicer>
      <App />
    </WorkoutsContextProvicer>
  </React.StrictMode>
);

