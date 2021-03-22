import { GETCREATE } from "../actions/getCreate";
import { GETDETAILS } from "../actions/getDetails";
import { GETNAME } from "../actions/getName";
import { GETPOKEMONS } from "../actions/getPokemons";
import { GETTYPES } from "../actions/getTypes";

const initialState = {
  pokemonDetails: {},
  loading: false,
  pokemonHome: [],
  types: [],
  pokemonCreate: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GETPOKEMONS:
      return {
        ...state,
        pokemonHome: action.payload,
      };

    case GETDETAILS:
      return {
        ...state,
        pokemonDetails: action.payload,
        loading: false,
      };

    case GETTYPES:
      return {
        ...state,
        types: action.payload,
      };

    case GETNAME:
      return {
        ...state,
        pokemonDetails: action.payload,
        loading: true,
      };
    case GETCREATE:
      return {
        ...state,
        pokemonCreate: action.payload,
      };
    default:
      return { ...state };
  }
};

export default rootReducer;
