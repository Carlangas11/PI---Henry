import React from 'react'
import "./Pagination.css";
const Pagination = ({pokemonsPerPage, totalPokemons, ejecutar, handleClick ,indexOfLastPage, indexOfFirstPage}) => {

    const pageNumbers = [];
    for(let i =1; i<=Math.ceil(totalPokemons/pokemonsPerPage); i++){
    pageNumbers.push(i);
    }
    // const showPages = pageNumbers.slice(indexOfFirstPage,indexOfLastPage)
    return (
        <div className="container">
            
           
           {     pageNumbers.map(number => 
            (<div key={number}>
            
                <button onClick={() => handleClick(number)} >
                    {number}
                </button>
            </div>))}
            
            
        </div>
    )
}

export default Pagination

