import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { connect } from 'react-redux'
import { getPokemons } from "../../actions/getPokemons";
import { GetTypes } from "../../actions/getTypes";
import { GetCreate } from "../../actions/getCreate";


const LandingPage = (props) => {

const handleClick = () => {
    props.getPokemons()
    props.getTypes()
    props.getCreate()
}
// useEffect(() => {
//   props.getPokemons()
 
// }, []);

  return (
    <div>
      
      <Link to="/pokemons">
        <button onClick={() => handleClick()}>Entrar!</button>
      </Link>

    </div>
  );
};

const mapStateToProps = (state) => {
  return {
  
  }
}

const mapDispatchtoProps = (dispatch) => {
return {
    getPokemons: () => dispatch(getPokemons()),
    getTypes: () => dispatch(GetTypes()),
    getCreate: () => dispatch(GetCreate())
}
} 

export default connect(mapStateToProps,mapDispatchtoProps)(LandingPage);
