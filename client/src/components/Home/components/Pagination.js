import React from 'react'

import styled from 'styled-components'
import style from './Pagination.module.css'


const ButtonPag = styled.button`
color:  rgb(179, 156, 24);
  font-size: 0.75em;
 
  border: 2px solid  rgb(179, 156, 24);
  border-radius: 3px;


`




const Pagination = ({pokemonsPerPage, totalPokemons, ejecutar, handleClick ,indexOfLastPage, indexOfFirstPage}) => {

    const pageNumbers = [];
    for(let i =1; i<=Math.ceil(totalPokemons/pokemonsPerPage); i++){
    pageNumbers.push(i);
    }
    // const showPages = pageNumbers.slice(indexOfFirstPage,indexOfLastPage)
    return (
        <div className={style.pagination}>
            
           
           {     pageNumbers.map(number => 
            (<div key={number}>
            
                <ButtonPag onClick={() => handleClick(number)} >
                    {number}
                </ButtonPag>
            </div>))}
            
            
        </div>
    )
}

export default Pagination

