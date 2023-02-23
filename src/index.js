import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { NavBar } from './components/NavBar';
import { AppRouter } from './router/AppRouter';

import './index.css';
import '../node_modules/primeflex/primeflex.css';

// PrimeReact
//theme
import 'primereact/resources/themes/lara-light-indigo/theme.css';
//import 'primereact/resources/themes/bootstrap4-dark-purple/theme.css';
//core
import 'primereact/resources/primereact.min.css';
//icons
import 'primeicons/primeicons.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <NavBar />
    <AppRouter />
  </BrowserRouter>
);
