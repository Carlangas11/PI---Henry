import React from "react";

import Pokemon from "./Pokemon";
import style from "./Pokemons.module.css"

export const Pokemons = ({ pokemons, pokemon, pagina }) => {
  return (
    <div className={style.container}>
      <h3>Pagina: {pagina}</h3>
      {pokemons.length > 0 ? (
        <Pokemon pokemon={pokemon} />
      ) : (
        <img
          src="https://i.pinimg.com/originals/ba/0b/7a/ba0b7a611bc443b4e5f684101229d3b5.gif"
          alt=""
        />
      )}
    </div>
  );
};
