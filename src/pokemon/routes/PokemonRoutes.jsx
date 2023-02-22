import { Route, Routes } from 'react-router-dom';
import { PokemonInfoPage } from '../pages/PokemonInfoPage';
import { PokemonApp } from '../PokemonApp';

export const PokemonRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<PokemonApp />} />
      <Route path='/info/:pokemonNumber' element={<PokemonInfoPage />} />
    </Routes>
  );
};
