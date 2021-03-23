import axios from "axios";

export const    ADDPOKEMON = "ADD_POKEMON";

export const addPokemons = ({id, name, health, attack, defense, speed, height, weight, tipo1,tipo2}) => {
    
    return (dispatch) => {
        dispatch({ type: ADDPOKEMON });
        axios({
          method: 'post',
          url: `http://localhost:3001/pokemons/add`,
          data: {
            id,
            name,
            health,
            attack,
            defense,
            speed,
            height,
            weight,
            tipo1,
            tipo2
          },
        }).catch(e=> dispatch(e))
    }
}