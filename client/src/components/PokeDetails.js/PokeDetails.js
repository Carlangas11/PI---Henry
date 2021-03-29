import React, { useEffect } from "react";
import { connect } from "react-redux";

import { getDetails } from "../../actions/getDetails";
import style from "./PokeDetails.module.css";
import "../../scss/components/_PokeDetails.scss";

const PokeDetails = (props) => {
  let pokemonId = props.match.params.pokeId;
  useEffect(() => {
    props.getDetails(pokemonId);
  }, [pokemonId]);

  return (
    <div>
      {
        <div className={style.container}>
          {props.state.pokeId < 20000 ? (
            <div className={style.subcontainer}>
              <h4>
                #{props.state.pokeId - 10000} {props.state.name}{" "}
              </h4>
              <img src={props.state.sprite} alt="No esta" />
            </div>
          ) : (
            <div className={style.subcontainer}>
              <h4>
                Creado #{props.state.pokeId - 20000} {props.state.name}
              </h4>
              <img
                src="/images/pokecreado_details.png"
                alt="No esta"
              />
            </div>
          )}
          <div className={style.subcontainer}>
            <ul>
              <li>HP: {props.state.health}</li>
              <li>weight: {props.state.weight}</li>
              <li>height: {props.state.height}</li>
              <li>attack: {props.state.attack}</li>
              <li>defense: {props.state.defense}</li>
              <li>speed: {props.state.speed}</li>
              <div>
                {props.state.tipos
                  ? props.state.tipos.map((t) => 
                  <img key={t}
                  className={style.typeImg}
                  src={`/images/Tipo_Pokemons/${t}.gif`}
                  alt="no encontrada"
                />)
                  : ""}
              </div>
            </ul>
          </div>
        </div>
      }
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
    getDetails: (id) => dispatch(getDetails(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PokeDetails);
