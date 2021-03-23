import React, { useEffect } from "react";
import { connect } from "react-redux";

import { getDetails } from "../../actions/getDetails";


const PokeDetails = (props) => {
   
  let pokemonId = props.match.params.pokeId;
  useEffect(() => {
    props.getDetails(pokemonId);
  },[getDetails]);

  return (
    <div>
  
      {
        <div>
          <h4>
          {props.state.pokeId < 20000 ? (
            <div>
                  <h4>#{props.state.pokeId - 10000} {props.state.name} </h4>
                  <img src={props.state.sprite} alt="No esta" />
                  </div>
                ) : (
                  <div>
                  <h4>Creado #{props.state.pokeId - 20000} {props.state.name}</h4>
                  <img src="https://i.pinimg.com/564x/35/77/7a/35777a82ba036602cc75f281bf1fb20d.jpg" alt="No esta" />
                  </div>
                )}
          </h4>
          
          <ul>
          <li>HP: {props.state.health}</li>
          <li>weight: {props.state.weight}</li>
          <li>height: {props.state.height}</li>
          <li>attack: {props.state.attack}</li>
          <li>defense: {props.state.defense}</li>
          <li>speed: {props.state.speed}</li>
          <li>
            { props.state.tipos ? props.state.tipos.map(t => (
              <h5 key={t}>{t}</h5>
            )):
            ""}
          </li>
        </ul>
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
