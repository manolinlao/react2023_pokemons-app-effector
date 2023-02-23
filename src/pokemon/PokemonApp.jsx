import { useStore } from 'effector-react';
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ProgressSpinner } from 'primereact/progressspinner';
import { $pokemonStore, decrementActualPage, getPokemonsFx, incrementActualPage, resetPokemons, startLoadingPokemons } from '../store/pokemonStore';

export const PokemonApp = () => {
  const pokemonState = useStore($pokemonStore);
  const { isLoading, pokemons: allPokemons, actualPage, pagesLoaded } = pokemonState;
  console.log(pokemonState);

  const navigate = useNavigate();

  // empezamos a obtener pokemons si no los tenemos
  useEffect(() => {
    if (pagesLoaded === 0) {
      //resetPokemons();
      startLoadingPokemons();
      getPokemonsFx();
    }
  }, [pagesLoaded]);

  const nextPokemons = () => {
    if (actualPage + 1 === pagesLoaded) {
      //dispatch(getPokemons(pagesLoaded));
      startLoadingPokemons();
      getPokemonsFx(pagesLoaded);
    } else {
      //dispatch(incrementActualPage());
      incrementActualPage();
    }
  };

  const backPokemons = () => {
    if (actualPage === 0) return;
    //dispatch(decrementActualPage());
    decrementActualPage();
  };

  const getPokemonInfo = (url) => {
    // url es siermpre https:/pokeapi.co/api/v2/pokemon/NUMERO/
    // necesitamos extraer NUMERO, que es lo que pasaremos com param
    url = url.slice(0, url.length - 1);
    url = url.substr(url.lastIndexOf('/') + 1);

    navigate('/pokemon/info/' + url);
  };

  return (
    <>
      <h4>PokemonApp with Effector</h4>

      {isLoading ? (
        <div>
          <ProgressSpinner style={{ width: '50px', height: '50px' }} strokeWidth='8' fill='var(--surface-ground)' animationDuration='.5s' />
        </div>
      ) : (
        <div>
          <span>Page - {actualPage}</span>
          <ul>
            {allPokemons.map((pokemon, index) => {
              const indI = actualPage * 10;
              const indF = actualPage * 10 + 9;
              if (index >= indI && index <= indF)
                return (
                  <li
                    onClick={() => {
                      getPokemonInfo(pokemon.url);
                    }}
                    key={pokemon.name}
                  >
                    {pokemon.name}
                  </li>
                );
              else return '';
            })}
          </ul>
        </div>
      )}
      <button disabled={isLoading} onClick={backPokemons}>
        back
      </button>
      <button disabled={isLoading} onClick={nextPokemons}>
        next
      </button>
    </>
  );
};
