import React from 'react'
import { Link } from 'react-router-dom';



const BarNav = () => {
    return (

        <nav>
        <Link to="/pokemons"> Pokedex</Link>
        <Link to="/pokemons/add"> Crea tu Pokemon!</Link>
       
        </nav>
        
    )
}

export default BarNav; 