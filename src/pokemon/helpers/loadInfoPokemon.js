const baseURL = 'https:/pokeapi.co/api/v2/pokemon/';

export const loadInfoPokemon = async (pokemonNumber) => {
  const query = `${baseURL}${pokemonNumber}`;
  const resp = await fetch(query);
  const data = await resp.json();
  return data;
};
