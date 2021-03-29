import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { GetCreate } from "../../actions/getCreate";
import { getDetails } from "../../actions/getDetails";
import { getPokemons } from "../../actions/getPokemons";
import { GetTypes } from "../../actions/getTypes";

import Pagination from "./components/Pagination";
import { Pokemons } from "./components/Pokemons";
import PokeName from "./components/PokeName";
import PokeSearched from "./components/PokeSearched";

import style from "./Home.module.css";

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
    props.getCreate();
    setPokeCreado(props.pokemonCreate);
  }, []);

  useEffect(() => {
    Default();
    props.getCreate();
    if (pokemons.length < 40) setEjecutar(true);
  }, [props.state]);

  // // llenar store
  const handleClick = (numero) => {
    setCurrentPage(numero);
    setPagina(numero);
    if (ejecutar) {
      props.getCreate();
      // props.getPokemons();
      props.getTypes();
      setEjecutar(false);
    }
  };

  const handleFilters = (e) => {
    if (e.target.value === "Todos") {
      Default();
      setShowTypes(false);
      if (pokemons.length < 40) setEjecutar(true);
    } else if (e.target.value === "PokeCreados") {
      setPokemons(props.pokemonCreate);
      setPokeCreado([]);
      setCurrentPage(1);
      setPagina(1);
      setShowTypes(false);
      setEjecutar(false);
    } else if (e.target.value === "PokeOriginales") {
      Default();
      setPokemons(props.state);
      setPokeCreado([]);
      setCurrentPage(1);
      setPagina(1);
      setShowTypes(false);
      setEjecutar(false);
    } else if (e.target.value === "Tipos") {
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
    if (e.target.value === "A-Z") {
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
    if (e.target.value === "Z-A") {
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
    <div className={style.home}>
      <div className={style.containers}>
        <PokeName
          handleFilters={handleFilters}
          handleTypes={handleTypes}
          handleChange2={handleChange2}
          showTypes={showTypes}
          types={types}
        />
      </div> 
      <div className={style.containers}>
        <PokeSearched />
      </div>
      <div className={style.containers}>
        <Pokemons
          pokemons={pokemons}
          pokemon={currentPokemons}
          types={types}
          pagina={pagina}
        />
      </div>
      <div className={style.containers}>
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
