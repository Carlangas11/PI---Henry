import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { GetCreate } from "../../actions/getCreate";
import { getDetails } from "../../actions/getDetails";
import { getPokemons } from "../../actions/getPokemons";
import { GetTypes } from "../../actions/getTypes";

import "./Home.css";
import Pagination from "./Pagination";
import { Pokemons } from "./Pokemons";

const Home = (props) => {
  //store
  const [pokemons, setPokemons] = useState([]);
  const [pokeCreado, setPokeCreado] = useState([]);
  const [types, setTypes] = useState([]);
  const [ejecutar, setEjecutar] = useState(false);
  //Pagination
  const [currentPage, setCurrentPage] = useState(1);
  const [pokemonsPerPage] = useState(12);
  const [pagina, setPagina] = useState(1);
  //filtrado y ordenado

  const [showTypes, setShowTypes] = useState(false);

  const Default = () => {
    setPokemons(props.state);
    setPokeCreado(props.pokemonCreate);
    pokeCreado.sort(function (a, b) {
      return a.pokeId - b.pokeId;
    });
    pokemon = pokemons.concat(pokeCreado);
    setTypes(props.types);
    setEjecutar(false);
    setShowTypes(false);
    setCurrentPage(1);
    setPagina(1);
  };

  useEffect(() => {
    Default()
    props.getCreate();
    if (pokemons.length < 897)setEjecutar(true);
  }, [props.state]);

  // // llenar store
  const handleClick = (numero) => {
    setCurrentPage(numero);
    setPagina(numero);
    if (ejecutar) {
      props.getCreate();
      props.getPokemons();
      props.getTypes();
       setEjecutar(false);
    }
  };

  const handleFilters = (e) => {
    if (e.target.value === "Todos") {
      Default();
      setShowTypes(false);
      if (pokemons.length < 898) setEjecutar(true);
    }else
    if (e.target.value === "PokeCreados") {
      setPokemons(props.pokemonCreate);
      setPokeCreado([]);
      setCurrentPage(1);
      setPagina(1);
      setShowTypes(false);
      setEjecutar(false);
    }else
    if (e.target.value === "PokeOriginales") {
      Default();
      setPokemons(props.state);
      setPokeCreado([]);
      setCurrentPage(1);
      setPagina(1);
      setShowTypes(false);
      setEjecutar(false);
    }else
    if (e.target.value === "Tipos") {
      Default();
      setShowTypes(true);
      setEjecutar(false);
    }
  };

  const handleTypes = (e) => {
    console.log(e.target.value);

    pokemon = pokemon.filter((r) => {
      return r.tipos[0] === e.target.value || r.tipos[1] === e.target.value;
    });
    setPokemons(pokemon);
    setPokeCreado([]);
    setCurrentPage(1);
    setShowTypes(false);
    setPagina(1);
    setEjecutar(false);
  };

  //mostrar pokemon API + pokemons Creados
  let pokemon = pokemons.concat(pokeCreado);

  const handleChange2 = (e) => {
    
    if (e.target.value === "Numero") {
      pokemons.sort(function (a, b) {
        return a.pokeId - b.pokeId;
      });
      pokeCreado.sort(function (a, b) {
        if (a.name > b.name) {
          return 1;
        }
        if (a.name < b.name) {
          return -1;
        }
        return 0;
      });
      pokemon = pokemons.concat(pokeCreado);
      setPokemons(pokemon);
      setPokeCreado([]);
      setEjecutar(false);
      setShowTypes(false);
    }
    if (e.target.value === "Nombre ascendente") {
      pokemon.sort(function (a, b) {
        if (a.name > b.name) {
          return 1;
        }
        if (a.name < b.name) {
          return -1;
        }
        return 0;
      });
      setPokemons(pokemon);
      setPokeCreado([]);
      setEjecutar(false);
      setShowTypes(false);
    }
    if (e.target.value === "Nombre descendente") {
      pokemon.sort(function (a, b) {
        if (a.name < b.name) {
          return 1;
        }
        if (a.name > b.name) {
          return -1;
        }
        return 0;
      });
      setPokemons(pokemon);
      setPokeCreado([]);
      setEjecutar(false);
      setShowTypes(false);
    }
    if (e.target.value === "Fuerza") {
      pokemon.sort(function (a, b) {
        if (Number(a.attack) < Number(b.attack)) {
          return 1;
        }
        if (Number(a.attack) > Number(b.attack)) {
          return -1;
        }
        return 0;
      });
      setPokemons(pokemon);
      setPokeCreado([]);
      setEjecutar(false);
      setShowTypes(false);
    }
  };

  const indexOfLastPokemons = currentPage * pokemonsPerPage;
  const indexOfFirstPokemons = indexOfLastPokemons - pokemonsPerPage;
  const currentPokemons = pokemon.slice(
    indexOfFirstPokemons,
    indexOfLastPokemons
  );

  return (
    <div className="App">
      <div>
        {props.loading ? (
          <div className="poke">
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
              <img
                src="https://i.pinimg.com/564x/35/77/7a/35777a82ba036602cc75f281bf1fb20d.jpg"
                alt="Esperando!"
              />
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

      <div className="pagination">
        <form>
          <label>Filtra por: </label>
          <select onChange={handleFilters}>
          <option value=""></option>
            <option name="Todos">Todos</option>
            <option name="PokeOriginales">PokeOriginales</option>
            <option name="PokeCreados">PokeCreados</option>
            <option name="Tipos">Tipos</option>
          </select>
          {showTypes ? (
            <select onChange={handleTypes}>
              <option></option>
              {types.map((type) => (
                <option key={type}>{type}</option>
              ))}
            </select>
          ) : (
            ""
          )}
          <label>Ordena por: </label>
          <select onChange={handleChange2}>
          <option value=""></option>
            <option name="Numero">Numero</option>
            <option name="ascendente">Nombre ascendente</option>
            <option name="descendente">Nombre descendente</option>
            <option name="Fuerza">Fuerza</option>
          </select>
        </form>

        <Pokemons
          pokemons={pokemons}
          pokemon={currentPokemons}
          types={types}
          pagina={pagina}
        />
        <Pagination
          pokemonsPerPage={pokemonsPerPage}
          totalPokemons={pokemon.length}
          handleClick={handleClick}
        />
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
    types: state.types,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getPokemons: () => dispatch(getPokemons()),
    getDetails: (id) => dispatch(getDetails(id)),
    getCreate: () => dispatch(GetCreate()),
    getTypes: () => dispatch(GetTypes()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
