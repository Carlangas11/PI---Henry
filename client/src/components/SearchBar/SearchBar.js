import React, { useState } from "react";
import { connect } from "react-redux";

import { GetName } from "../../actions/getName";

const SearchBar = (props) => {
  const [poke, setName] = useState({
    name: "",
  });

  const handleChange = (e) => {
    setName({ name: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    props.getName(poke.name);
    setName({ name: "" });
    props.history.push("/pokemons");
  };

  return (
    <div>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input
          value={poke.name}
          onChange={(e) => handleChange(e)}
          placeholder="Nombre..."
        />
        <button type="submit">enviar</button>
      </form>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    state: state.pokemonDetails,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getName: (name) => dispatch(GetName(name)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
