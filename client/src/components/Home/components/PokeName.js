import React from "react";
import style from "./PokeName.module.css";

const PokeName = ({
  handleFilters,
  handleTypes,
  handleChange2,
  showTypes,
  types,
}) => {
  return (
    <div className={style.containerbox}>
      <div className={style.box}>
        <label className={style.boxlabel}>Filtra por: </label>
        <select onChange={handleFilters}>
          <option value=""></option>
          <option name="Todos">Todos</option>
          <option name="PokeOriginales">PokeOriginales</option>
          <option name="PokeCreados">PokeCreados</option>
          <option name="Tipos">Tipos</option>
        </select>
      </div>
      {showTypes ? (
        <div className={style.box}>
          <label className={style.boxlabel}>Elige tipo:</label>
         
            <select onChange={handleTypes}>
              <option></option>
              {types.map((type) => (
                <option key={type}>{type}</option>
              ))}
            </select>
          </div>
     
      ) : (
        ""
      )}
      <div className={style.box}>
        <label className={style.boxlabel}>Ordena por: </label>
        <select onChange={handleChange2}>
          <option value=""></option>
          <option name="Numero">Numero</option>
          <option name="A-Z">A-Z</option>
          <option name="Z-A">Z-A</option>
          <option name="Fuerza">Fuerza</option>
        </select>
      </div>
    </div>
  );
};

export default PokeName;
