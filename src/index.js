import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './root.css';
import './Tag.css';
import './Post.css';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
