import { ADDPOKEMON } from "../actions/addPokemons";
import { FILTERTYPES } from "../actions/FilterTypes";
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
  pokemonFilter: [],
  CreateFilter: [],
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
      case ADDPOKEMON:
        return{
          ...state
        }
    
      case FILTERTYPES:
        return {
          ...state,
          pokemonFilter: state.pokemonHome.filter(r => r.tipos[0] === action.payload ),
          CreateFilter: state.pokemonCreate.filter(r => r.tipos[0] == action.payload || r.tipos[1] == action.payload),
        }
     
    default:
      return { ...state };
  }
};

export default rootReducer;
