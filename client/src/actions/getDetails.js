import axios from "axios";

export const GETDETAILS = "GET_DETAILS";

export const getDetails = (id) => {
  return function (dispatch) {
    axios
      .get(`http://localhost:3001/pokemons/id/${id}`)
      .then((r) => r.data)
      .then((data) => {
        dispatch({
          type: GETDETAILS,
          payload: data,
        });
      });
  };
};
