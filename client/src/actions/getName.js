import axios from "axios";

export const GETNAME = "GET_NAME";

export const GetName = (nombre) => {
    return (dispatch) => {
        axios.get(`http://localhost:3001/pokemons?name=${nombre}`)
        .then(r => r.data)
        .then(data =>{
            dispatch({
                type: GETNAME,
                payload: data
            })
        })
    }
}