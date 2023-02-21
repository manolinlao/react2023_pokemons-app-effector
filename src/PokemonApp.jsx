import React, { useEffect } from 'react';

export const PokemonApp = () => {
  const isLoading = false;
  const allPokemons = [];
  const actualPage = 0;
  const pagesLoaded = 0;

  // empezamos a obtener pokemons
  useEffect(() => {}, []);

  const nextPokemons = () => {
    if (actualPage + 1 === pagesLoaded) {
      //dispatch(getPokemons(pagesLoaded));
    } else {
      //dispatch(incrementActualPage());
    }
  };

  const backPokemons = () => {
    if (actualPage === 0) return;
    //dispatch(decrementActualPage());
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
