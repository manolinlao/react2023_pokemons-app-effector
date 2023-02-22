import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { NavBar } from './components/NavBar';
import './index.css';
import { AppRouter } from './router/AppRouter';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <NavBar />
    <AppRouter />
  </BrowserRouter>
);
