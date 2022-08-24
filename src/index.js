import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { BlazeApp } from './BlazeApp';
import './style.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <React.StrictMode>
      <BlazeApp />
    </React.StrictMode>
  </BrowserRouter>
);