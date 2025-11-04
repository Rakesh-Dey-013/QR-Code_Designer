import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './styles/globals.css';
import './styles/animations.css';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />);