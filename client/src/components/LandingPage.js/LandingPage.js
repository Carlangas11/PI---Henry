import React from "react";
import { Link } from "react-router-dom";
import { connect } from 'react-redux'
import { getPokemons } from "../../actions/getPokemons";
import { GetTypes } from "../../actions/getTypes";
import { GetCreate } from "../../actions/getCreate";

import style from './LandingPage.module.css'




const LandingPage = (props) => {

const handleClick = () => {
    props.getPokemons()
    props.getTypes()
    props.getCreate()
}


  return (
    <div className={style.welcome}>
    <div className={style.containerImg}>
    <Link onClick={handleClick} to="/pokemons">
  <img className={style.homeimg} src="https://fontmeme.com/permalink/210326/1ab04c648f623a5abf36ea88eb5c3cb5.png"  alt="imagen obtenida en https://fontmeme.com/"/>
  </Link>
  </div>
   
    

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
