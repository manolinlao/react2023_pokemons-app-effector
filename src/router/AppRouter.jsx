import { Navigate, Route, Routes } from 'react-router-dom';
import { CounterApp } from '../counter/CounterApp';
import { PokemonRoutes } from '../pokemon/routes/PokemonRoutes';

export const AppRouter = () => {
  return (
    <Routes>
      <Route path='/' element={<div></div>} />
      <Route path='/counter' element={<CounterApp />} />
      <Route path='/pokemon/*' element={<PokemonRoutes />} />
      <Route path='/*' element={<Navigate to='/' />} />
    </Routes>
  );
};
