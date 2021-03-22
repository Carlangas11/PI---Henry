import axios from "axios";

export const GETCREATE = "GET_CREATE";

export const GetCreate = () => {
    return (dispatch) => {
        axios.get(`http://localhost:3001/pokemons/create`)
        .then(r => r.data)
        .then(data =>{
            dispatch({
                type: GETCREATE,
                payload: data
            })
        })
    }
}