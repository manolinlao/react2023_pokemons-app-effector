import { createEffect, createEvent, createStore } from 'effector';

const initialState = {
  isLoading: false,
  pokemons: [],
  actualPage: 0,
  pagesLoaded: 0
};

// Events
export const resetPokemons = createEvent('reset pokemons');
export const startLoadingPokemons = createEvent('start loading pokemons');
export const addPokemons = createEvent('add pokemons');
export const decrementActualPage = createEvent('decrement actual page');
export const incrementActualPage = createEvent('increment actual page');

// Effects (los antiguos thunks)
export const getPokemonsFx = createEffect('get Pokemons');
getPokemonsFx.use((page = 0) => {
  console.log('getPokemonsFx');
  const query = `https://pokeapi.co/api/v2/pokemon?limit=10&offset=${page * 10}`;
  return fetch(query)
    .then((resp) => resp.json())
    .then((data) => ({ pokemons: data.results, page: page + 1 }));
});

// Store
export const $pokemonStore = createStore(initialState)
  .reset(resetPokemons)
  .on(decrementActualPage, (state) => {
    return { ...state, actualPage: state.actualPage - 1 };
  })
  .on(incrementActualPage, (state) => {
    console.log('increment');
    return { ...state, actualPage: state.actualPage + 1 };
  })
  .on(startLoadingPokemons, (state) => {
    return { ...state, isLoading: true };
  })
  .on(getPokemonsFx.done, (state, payload) => {
    console.log('getPokemonsFx done', payload);
    const newPage = payload.result.page;
    const newPokemons = payload.result.pokemons;
    newPokemons.forEach((pokemon) => {
      state.pokemons.push(pokemon);
    });
    return {
      ...state,
      pagesLoaded: newPage,
      actualPage: newPage - 1,
      isLoading: false
    };
  });
