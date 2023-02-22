import { useStore } from 'effector-react';
import React, { useEffect } from 'react';
import { $pokemonStore, decrementActualPage, getPokemonsFx, incrementActualPage, resetPokemons, startLoadingPokemons } from './store/pokemonStore';

export const PokemonApp = () => {
  const pokemonState = useStore($pokemonStore);
  const { isLoading, pokemons: allPokemons, actualPage, pagesLoaded } = pokemonState;
  console.log(pokemonState);

  // empezamos a obtener pokemons
  useEffect(() => {
    resetPokemons();
    startLoadingPokemons();
    getPokemonsFx();
  }, []);

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

  return (
    <>
      <h4>PokemonApp with slices</h4>
      <hr />
      {isLoading ? (
        <div>loading...</div>
      ) : (
        <div>
          <span>Page - {actualPage}</span>
          <ul>
            {allPokemons.map((pokemon, index) => {
              const indI = actualPage * 10;
              const indF = actualPage * 10 + 9;
              if (index >= indI && index <= indF) return <li key={pokemon.name}>{pokemon.name}</li>;
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
