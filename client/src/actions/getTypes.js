import axios from "axios";

export const GETTYPES = "GET_TYPES";

export const GetTypes = () => {
  return (dispatch) => {
    axios
      .get("http://localhost:3001/pokemons/types")
      .then((r) => r.data)
      .then((data) => {
        dispatch({
          type: GETTYPES,
          payload: data,
        });
      });
  };
};
