import React from 'react';
import ReactDOM from 'react-dom/client';
import { CounterApp } from './CounterApp';
import './index.css';

import { PokemonApp } from './PokemonApp';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <CounterApp />
    <hr />
    <PokemonApp />
  </>
);
