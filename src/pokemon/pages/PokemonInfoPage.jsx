import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { loadInfoPokemon } from '../helpers/loadInfoPokemon';

export const PokemonInfoPage = () => {
  const [loading, setLoading] = useState(true);
  const [imgUrl, setImgUrl] = useState();
  const { pokemonNumber } = useParams();

  useEffect(() => {
    console.log('pokemoninfopage', pokemonNumber);
    loadInfoPokemon(pokemonNumber)
      .then((data) => {
        console.log(data.sprites.front_default);
        setLoading(false);
        setImgUrl(data.sprites.front_default);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div>
      <h4>PokemonInfoPage</h4>
      pokemonNumber:{pokemonNumber}
      <br />
      {loading ? (
        'loading...'
      ) : (
        <div>
          <img src={imgUrl} alt='pokemon img' />
        </div>
      )}
    </div>
  );
};
