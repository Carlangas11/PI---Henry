import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { GetCreate } from "../../actions/getCreate";
import { getDetails } from "../../actions/getDetails";
import { getPokemons } from "../../actions/getPokemons";
import { GetTypes } from "../../actions/getTypes";

import "./Home.css";

const Home = (props) => {
  const [pokemons, setPokemons] = useState([]);
  const [pokeCreado, setPokeCreado] = useState([]);
  const [ejecutar, setEjecutar] = useState(false); // llenar store

  useEffect(() => {
    setPokemons(props.state);
    setPokeCreado(props.pokemonCreate);
    setEjecutar(true); // llenar store
  }, [props.state, setPokemons]);

  useEffect(() => {
    props.getCreate();
  }, []);
  // llenar store
  const handleClick = () => {
    props.getCreate();
    props.getPokemons();
    props.getTypes();
    setEjecutar(false);
  };

  let pokemon = pokemons.concat(pokeCreado);
  pokeCreado.sort(function (a, b) {
    return a.pokeId - b.pokeId;
  });
  console.log(pokemon);

  return (
    <div className="App">
      <div>
        {" "}
        {props.loading ? (
          <div className="poke" key={props.pokeDetails.pokeId}>
            <div>
              {props.pokeDetails.pokeId < 20000 ? (
                <h4>#{props.pokeDetails.pokeId - 10000} </h4>
              ) : (
                <h4>Creado #{props.pokeDetails.pokeId - 20000} </h4>
              )}{" "}
              
              {props.pokeDetails.pokeId < 20000 ? (
                <Link to={`/pokemons/id/${props.pokeDetails.pokeId - 10000}`}>
                  {props.pokeDetails.name}
                </Link>
                
              ) : (
                <Link to={`/pokemons/id/${props.pokeDetails.pokeId}`}>
                  {props.pokeDetails.name}
                </Link>
              )}
          </div>
              {props.pokeDetails.pokeId < 20000 ? (
                <img src={props.pokeDetails.sprite} alt="Esperando!" />
              ) : (
                <img src="https://i.pinimg.com/564x/35/77/7a/35777a82ba036602cc75f281bf1fb20d.jpg" alt="Esperando!" />
              )}
           

           
            <ul>
              {props.pokeDetails.tipos.map((t) => (
                <li key={props.pokeDetails.tipos.indexOf(t)}>{t}</li>
              ))}
            </ul>
          </div>
        ) : (
          ""
        )}
      </div>
      <div >
        {pokemons.length > 1 ? (
          <div className="App">
            {pokemon.map((s) => (
              <div key={s.pokeId}>
                  {s.pokeId < 20000 ? (
                    <div>
                    <h4>#{s.pokeId - 10000} </h4>
                    <Link to={`/pokemons/id/${s.pokeId - 10000}`}>
                      {s.name}
                    </Link>
                    </div>
                  ) : (
                    <div>
                    <h4>Creado #{s.pokeId - 20000} </h4>
                    <Link to={`/pokemons/id/${s.pokeId - 20000}`}>
                      {s.name}
                    </Link>
                    </div>
                  )}
               
                {s.pokeId < 20000 ? (
                  <img src={s.sprite} alt="Esperando!" />
                  ) : (
                    <img src="https://i.pinimg.com/564x/35/77/7a/35777a82ba036602cc75f281bf1fb20d.jpg" alt="Esperando!" />
                  )}
              
                <ul>
                  { s.tipos.map((t) => <li key={s.tipos.indexOf(t)}>{t}</li>)
                    }
                </ul>
              </div>
            ))}
          </div>
        ) : (
          <img
            className="pokegif"
            src="https://i.pinimg.com/originals/ba/0b/7a/ba0b7a611bc443b4e5f684101229d3b5.gif"
            alt=""
          />
        )}
      </div>
      <div className="containerBoton">
        {ejecutar ? (
          <button
            onClick={() => {
              handleClick();
            }}
          >
            MAS!
          </button>
        ) : (
          <button>MAS!</button>
        )}
      </div>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    state: state.pokemonHome,
    pokeDetails: state.pokemonDetails,
    loading: state.loading,
    pokemonCreate: state.pokemonCreate,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    getPokemons: () => dispatch(getPokemons()),
    getDetails: (id) => dispatch(getDetails(id)),
    getCreate: () => dispatch(GetCreate()),
    getTypes: () => dispatch(GetTypes())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
