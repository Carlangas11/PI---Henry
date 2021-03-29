import React, { Fragment } from "react";
import { connect } from "react-redux";
import { addPokemons } from "../../actions/addPokemons";
import style from "./AddPokemon.module.css";

export function AddPokemon(props) {
  const [pokemon, setPokemon] = React.useState({
    id: "",
    name: "",
    health: "",
    attack: "",
    defense: "",
    speed: "",
    height: "",
    weight: "",
    tipo1: "",
    tipo2: "",
  });
  const [pokemonS, setPokemonS] = React.useState({});

  const [show, setShow] = React.useState(false);
  const handleChange = (e) => {
    setPokemon({
      ...pokemon,
      [e.target.name]: e.target.value,
    });
  };
  const handlesubmit = (e) => {
    e.preventDefault();
    props.addPokemons(pokemon);
    setShow(true);
    setPokemonS(pokemon);
    setPokemon({
      id: "",
      name: "",
      health: "",
      attack: "",
      defense: "",
      speed: "",
      height: "",
      weight: "",
      tipo1: "",
      tipo2: "",
    });
  };

  return (
    <div className={style.container}>
      <div className={style.subcontainerform}>
        <form className={style.formcreate} onSubmit={handlesubmit}>
          
            <label>ID: </label>
            <input className={style.input} name="id" value={pokemon.id} onChange={handleChange}></input>
         <br/>
        
            <label>PokeName: </label>
            <input className={style.input} name="name" value={pokemon.name} onChange={handleChange} />
            <br/>
            <label>HP:</label>
            <input
            className={style.input}
              name="health"
              value={pokemon.health}
              onChange={handleChange}
            />
         <br/>
            <label>Attack: </label>
            <input
            className={style.input}
              name="attack"
              value={pokemon.attack}
              onChange={handleChange}
            />
          <br/>
            <label>Defense:</label>
            <input
            className={style.input}
              name="defense"
              value={pokemon.defense}
              onChange={handleChange}
            />
        <br/>
            <label>Speed:</label>
            <input className={style.input} name="speed" value={pokemon.speed} onChange={handleChange} />
            <br/>
            <label>Height:</label>
            <input
            className={style.input}
              name="height"
              value={pokemon.height}
              onChange={handleChange}
            />
      <br/>
            <label>Weight: </label>
            <input
            className={style.input}
              name="weight"
              value={pokemon.weight}
              onChange={handleChange}
            />
       <br/>

          {props.state ? (
            <div>
              <label>Tipo 1:</label>
              <select
              className={style.select}
                name="tipo1"
                value={pokemon.tipo1.value}
                onChange={handleChange}
              >
                <option value=""></option>
                {props.state.map((t) => (
                  <option key={t} value={t}>
                    {t}
                  </option>
                ))}
              </select>
<br/>
              <label>Tipo 2:</label>
              <select
               className={style.select}
                name="tipo2"
                value={pokemon.tipo2.value}
                onChange={handleChange}
              >
                <option value=""></option>
                {props.state.map((t) => (
                  <option key={t} value={t}>
                    {t}
                  </option>
                ))}
              </select>
            </div>
          ) : (
            ""
          )}
          <button className={style.button} type="submit">enviar</button>
        </form>
      </div>

      <div>
        {show ? (
          <div className={style.subcontainerform2}>
            <div>
              <h4>
                CREADO #{pokemonS.id} {pokemonS.name}
              </h4>
              <img
                src="https://pm1.narvii.com/6146/db6b84da68e8b62ba009edf15d42700384560f74_hq.jpg"
                alt="No esta"
              />
            </div>

            <div>
              <ul>
                <li>HP: {pokemonS.health}</li>
                <li>weight: {pokemonS.weight}</li>
                <li>height: {pokemonS.height}</li>
                <li>attack: {pokemonS.attack}</li>
                <li>defense: {pokemonS.defense}</li>
                <li>speed: {pokemonS.speed}</li>
                <div>
                  <img
                    className={style.typeImg}
                    src={`/images/Tipo_Pokemons/${pokemonS.tipo1}.gif`}
                    alt="no encontrada"
                  />
                  <img
                    className={style.typeImg}
                    src={`/images/Tipo_Pokemons/${pokemonS.tipo2}.gif`}
                    alt="no encontrada"
                  />
                </div>
              </ul>
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    state: state.types,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addPokemons: (poke) => dispatch(addPokemons(poke)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddPokemon);
