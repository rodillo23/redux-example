import { setPokemons, startLoadingPokemons } from "./pokemonSlice";

export const getPokemons = (page = 0) => {
  return async (dispatch, getState) => {
    dispatch(startLoadingPokemons());

    //TODO: realizar peticion http
    const result = await fetch(
      `https://pokeapi.co/api/v2/pokemon?limit=10&offset=${page}`
    );
    const { results } = await result.json();
    console.log(results);

    dispatch(
      setPokemons({
        pokemons: results,
        page: page + 1,
      })
    );
  };
};
