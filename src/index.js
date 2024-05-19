import React from 'react';

import ReactDOM from 'react-dom/client';

import CarProvider from './context/CarProvider';

import App from './App';

import "../node_modules/bootstrap-icons/font/bootstrap-icons.min.css";

import 'react-toastify/dist/ReactToastify.css';

import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(

  <React.StrictMode>

    <CarProvider>

      <App />

    </CarProvider>

  </React.StrictMode>

);
