import axios from "axios";

export const GETPOKEMONS = "GET_POKEMONS";

export const getPokemons = () => {
  return function (dispatch) {
    axios
      .get("http://localhost:3001/pokemons")
      .then((r) => r.data)
      .then((data) => {
        dispatch({
          type: GETPOKEMONS,
          payload: data,
        });
      });
  };
};
