import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter } from 'react-router-dom';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  //for GITpages BrowserRouter => HashRouter
    <HashRouter> 
      <App />
    </HashRouter>
  // </React.StrictMode>
);