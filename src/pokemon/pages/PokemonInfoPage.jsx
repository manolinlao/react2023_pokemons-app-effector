import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { loadInfoPokemon } from '../helpers/loadInfoPokemon';

export const PokemonInfoPage = () => {
  const { pokemonNumber } = useParams();

  const [loading, setLoading] = useState(true);
  const [pokemonInfo, setPokemonInfo] = useState({});

  useEffect(() => {
    console.log('pokemoninfopage', pokemonNumber);
    loadInfoPokemon(pokemonNumber)
      .then((data) => {
        // console.log(data.sprites.front_default);
        setLoading(false);
        setPokemonInfo({ name: data.name, imageUrl: data.sprites.front_default, order: data.order, weight: data.weight });
      })
      .catch((error) => console.log(error));
  }, [pokemonNumber]);

  return (
    <div>
      <h4>PokemonInfoPage</h4>
      pokemonNumber:{pokemonNumber}
      <br />
      {loading ? (
        'loading...'
      ) : (
        <div>
          <div>
            {pokemonInfo.name} - order: {pokemonInfo.order} - weight: {pokemonInfo.weight}
          </div>
          <img src={pokemonInfo.imageUrl} alt={pokemonInfo.name} />
        </div>
      )}
    </div>
  );
};
