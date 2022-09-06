import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import  BlazeApp  from './BlazeApp';
import { Provider } from 'react-redux'
import './style.css';
import './styles/common.css';
import './styles/breakpoints.css'
import store from './store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <BlazeApp />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);