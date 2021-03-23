
import React from "react";
import { Link } from "react-router-dom";

export const Pokemons = ({ pokemons, pokemon, types, pagina}) => {
   
  return (
    <div>
      
<h3>Pagina: {pagina}</h3>
      {pokemons.length > 1 ? (
        <div className="App">
          {pokemon.map((s) => (
            <div key={s.pokeId}>
              {s.pokeId < 20000 ? (
                <div>
                  <h4>#{s.pokeId - 10000} </h4>
                  <Link to={`/pokemons/id/${s.pokeId - 10000}`}>{s.name}</Link>
                </div>
              ) : (
                <div>
                  <h4>Creado #{s.pokeId - 20000} </h4>
                  <Link to={`/pokemons/id/${s.pokeId}`}>{s.name}</Link>
                </div>
              )}

              {s.pokeId < 20000 ? (
                <img src={s.sprite} alt="Esperando!" />
              ) : (
                <img
                  src="https://i.pinimg.com/564x/35/77/7a/35777a82ba036602cc75f281bf1fb20d.jpg"
                  alt="Esperando!"
                />
              )}

              <ul>
                {s.tipos.map((t) => (
                  <li key={s.tipos.indexOf(t)}>{t}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      ) : (
        <img
          
          src="https://i.pinimg.com/originals/ba/0b/7a/ba0b7a611bc443b4e5f684101229d3b5.gif"
          alt=""
        />
      )}
    </div>
  );
};


