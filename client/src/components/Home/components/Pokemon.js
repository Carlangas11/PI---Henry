import React from "react";
import { Link } from "react-router-dom";
import style from "./Pokemon.module.css";

const Pokemon = ({ pokemon }) => {
  return (
    <div className={style.containerPokemons}>
      {pokemon.map((s) => (   
        <Link className={style.link} key={s.pokeId} to={s.pokeId < 20000?`/pokemons/id/${s.pokeId - 10000}`:`/pokemons/id/${s.pokeId}`}>
        <div className={style.pokecard} key={s.pokeId}>
          {s.pokeId < 20000 ? (
            <div className={style.title}>
                <h4>#{s.pokeId - 10000} {s.name}</h4>
                <img
                  className={style.pokeimg}
                  src={s.sprite}
                  alt="Esperando!"
                />
            </div>
          ) : (
            <div className={style.title}>
              <h4>Creado #{s.pokeId - 20000} {s.name}</h4>
              <img
                className={style.pokeimg}
                src="https://i.pinimg.com/564x/35/77/7a/35777a82ba036602cc75f281bf1fb20d.jpg"
                alt="Esperando!"
              />
            </div>
          )}
          <div className={style.containerType}>
            {s.tipos.map((t) => (
              <div key={s.tipos.indexOf(t)}>
                {" "}
                <img
                  className={style.typeImg}
                  src={`/images/Tipo_Pokemons/${t}.gif`}
                  alt="no encontrada"
                />{" "}
              </div>
            ))}
          </div>
        </div>
        </Link>
      ))}
    </div>
  );
};

export default Pokemon;
